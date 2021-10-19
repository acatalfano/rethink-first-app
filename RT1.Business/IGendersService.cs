using System.Collections.Generic;
using System.Threading.Tasks;

using RT1.Model.Dtos.OperationOutcome;
using RT1.Model.Dtos;

namespace RT1.Business
{
    public interface IGendersService
    {
        Task<OperationOutcome<IEnumerable<GenderDto>>> GetAllGenders();
    }
}
