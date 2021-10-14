using AutoMapper;
using RT1.Model.Dtos;
using RT1.Model.Objects.Entities;

namespace RT1.Configurations
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Patient, PatientDto>()
                .ForMember(dto => dto.Gender, opt =>
                {
                    opt.PreCondition(entity => entity.Gender != null);
                    opt.MapFrom(entity => entity.Gender.Label);
                })
                .ReverseMap();
        }
    }
}
