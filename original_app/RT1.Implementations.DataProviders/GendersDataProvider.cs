using System.Collections.Generic;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;

using RT1.DataProviders;
using RT1.Model.Objects;
using RT1.Model.Objects.Entities;

namespace RT1.Implementations.DataProviders
{
    public class GendersDataProvider : IGendersDataProvider
    {
        private readonly Rt1DbContext dbContext;
        public GendersDataProvider(Rt1DbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public async Task<IEnumerable<Gender>> GetAllGenders()
        {
            return await dbContext.Genders.ToListAsync();
        }
    }
}
