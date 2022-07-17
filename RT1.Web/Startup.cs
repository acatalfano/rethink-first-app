using System.Reflection;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;

using NLog.Extensions.Logging;

using Swashbuckle.AspNetCore.SwaggerGen;

using RT1.Configurations;
using RT1.Model.Objects;
using RT1.Business;
using RT1.Implementations.Services;
using RT1.Implementations.DataProviders;
using RT1.DataProviders;

namespace RT1.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment hostEnvironment)
        {
            Configuration = configuration;
            HostEnvironment = hostEnvironment;
            AppSettings = Configuration.GetSection(AppSettingsConfigKeys.AppSettingsKey).Get<Rt1AppSettings>();
        }

        private IConfiguration Configuration { get; }
        private IWebHostEnvironment HostEnvironment { get; }
        private Rt1AppSettings AppSettings { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddLogging(config =>
            {
                config.AddNLog();
            });

            services.AddMvc()
                .AddJsonOptions(options =>
                {
                    options.JsonSerializerOptions.AllowTrailingCommas = true;
                    options.JsonSerializerOptions.MaxDepth = 15;
                });


            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });

            services.AddApiVersioning(opt =>
            {
                opt.ReportApiVersions = true;
                opt.AssumeDefaultVersionWhenUnspecified = true;
                opt.DefaultApiVersion = ApiVersion.Default;
            });

            services.AddVersionedApiExplorer(opt =>
            {
                opt.GroupNameFormat = "'v'VVV";
                opt.SubstituteApiVersionInUrl = true;
            });

            services.AddTransient<IConfigureOptions<SwaggerGenOptions>, SwaggerConfigureOptions>();

            var connectionStrings = Configuration
                .GetSection(AppSettingsConfigKeys.ConnectionStringsKey)
                .Get<ConnectionStringsConfig>();
            services.AddSingleton(connectionStrings);


            services.AddDbContext<Rt1DbContext>(
                opt =>
                    {
                        opt.UseSqlServer(connectionStrings.Rt1Model);
                        opt.ConfigureWarnings(opt => opt.Ignore(CoreEventId.StartedTracking));
                        opt.EnableDetailedErrors(AppSettings.EnableDetailedEfErrors);
                    },
                ServiceLifetime.Transient
            );
            services.AddDatabaseDeveloperPageExceptionFilter();


            services.AddAutoMapper(typeof(AutoMapperProfile).Assembly);

            configureBusinessServices(services);
            configureDataProviders(services);

            if (HostEnvironment.IsDevelopment())
            {
                services.AddSwaggerGen(opt =>
                {
                    opt.IncludeXmlComments(XmlCommentsFilePath);
                });
            }
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(
            IApplicationBuilder app,
            IWebHostEnvironment env,
            IApiVersionDescriptionProvider apiVersionDescriptionProvider)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                app.UseSwagger(opt =>
                    opt.PreSerializeFilters.Add((swagger, request) =>
                        swagger.Servers = new List<OpenApiServer> { new OpenApiServer { Url = $"https://{request.Host}" } }
                    )
                );

                app.UseSwaggerUI(opt =>
                {
                    foreach (var description in apiVersionDescriptionProvider.ApiVersionDescriptions)
                    {
                        opt.SwaggerEndpoint($"/swagger/{description.GroupName}/swagger.json", description.GroupName.ToUpperInvariant());
                    }
                });
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseCors("default");

            app.UseStaticFiles();

            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "v{version:apiVersion}/{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                    //spa.UseProxyToSpaDevelopmentServer("http://localhost:4200/");
                }
            });
        }

        private void configureBusinessServices(IServiceCollection services)
        {
            services.AddScoped<IPatientsService, PatientsService>();
            services.AddScoped<IGendersService, GendersService>();
        }

        private void configureDataProviders(IServiceCollection services)
        {
            services.AddScoped<IPatientsDataProvider, PatientsDataProvider>();
            services.AddScoped<IGendersDataProvider, GendersDataProvider>();
        }

        static string XmlCommentsFilePath
        {
            get
            {
                var basePath = AppContext.BaseDirectory;
                var fileName = typeof(Startup).GetTypeInfo().Assembly.GetName().Name + ".xml";
                return Path.Combine(basePath, fileName);
            }
        }
    }
}
