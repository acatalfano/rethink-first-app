using AutoMapper;
using RT1.Model.Dtos;
using RT1.Model.Objects.Entities;

namespace RT1.Configurations
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Patient, PatientDto>().ReverseMap();
            CreateMap<Gender, GenderDto>();
        }
    }
}
