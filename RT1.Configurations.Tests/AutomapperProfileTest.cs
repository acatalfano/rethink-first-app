using AutoMapper;

namespace RT1.Configurations.Tests
{
    public class AutomapperProfileTest
    {
        [Fact]
        public void Profile_is_valid()
        {
            var configuration = new MapperConfiguration(
                cfg => cfg.AddProfile(new AutoMapperProfile())
            );
            configuration.AssertConfigurationIsValid();
        }
    }
}
