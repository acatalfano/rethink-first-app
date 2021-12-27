using System.Collections.Generic;
using System.Threading.Tasks;

using RT1.Model.Objects.Entities;

namespace RT1.DataProviders
{
    public interface IGendersDataProvider
    {
        Task<IEnumerable<Gender>> GetAllGenders();
    }
}
