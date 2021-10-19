using System;
using System.Collections.Generic;
using System.Threading.Tasks;

using AutoMapper;

using RT1.Business;
using RT1.DataProviders;
using RT1.Model.Dtos;
using RT1.Model.Dtos.OperationOutcome;

namespace RT1.Implementations.Services
{
    public class GendersService : IGendersService
    {
        private readonly IMapper mapper;
        private readonly IGendersDataProvider dataProvider;

        public GendersService(IMapper mapper, IGendersDataProvider dataProvider)
        {
            this.mapper = mapper;
            this.dataProvider = dataProvider;
        }

        public async Task<OperationOutcome<IEnumerable<GenderDto>>> GetAllGenders()
        {
            OperationOutcome<IEnumerable<GenderDto>> result = new OperationOutcome<IEnumerable<GenderDto>>();
            try
            {
                var genders = await dataProvider.GetAllGenders();
                result.SetOK(mapper.Map<IEnumerable<GenderDto>>(genders));
            }
            catch (Exception ex)
            {
                result.SetException(ex);
            }
            return result;
        }
    }
}
