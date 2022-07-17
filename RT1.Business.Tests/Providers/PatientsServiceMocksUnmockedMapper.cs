using AutoMapper;

using RT1.Configurations;

namespace RT1.Business.Tests.Providers
{
    class PatientsServiceMocksUnmockedMapper : PatientsServiceMocks
    {
        public new IMapper Mapper
        {
            get
            {
                if (mapper == null)
                {
                    var configuration = new MapperConfiguration(cfg => cfg.AddProfile(new AutoMapperProfile()));
                    mapper = new Mapper(configuration);
                }
                return mapper;
            }
        }

        private IMapper mapper;
    }
}
