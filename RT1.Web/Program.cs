using Microsoft.AspNetCore.Mvc.ApiExplorer;

using RT1.Web;

// instantiate builder and startup
var builder = WebApplication.CreateBuilder(args);
var startup = new Startup(builder.Configuration, builder.Environment);

// configure DI (application code, Startup.cs)
startup.ConfigureServices(builder.Services);

// build app
var app = builder.Build();
var apiVersionProvider = app.Services.GetRequiredService<IApiVersionDescriptionProvider>();

// configure app (application code, Startup.cs)
startup.Configure(app, builder.Environment, apiVersionProvider);

// start application
app.Run();
