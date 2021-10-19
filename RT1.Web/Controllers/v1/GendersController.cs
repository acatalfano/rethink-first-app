using System.Collections.Generic;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;

using RT1.Business;
using RT1.Model.Dtos;

//LinkID=397860

namespace RT1.Web.Controllers.v1
{
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiController]
    public class GendersController : ControllerBase
    {
        private readonly IGendersService service;

        public GendersController(IGendersService service)
        {
            this.service = service;
        }

        // GET: api/v1/Genders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GenderDto>>> Get()
        {
            var result = await service.GetAllGenders();
            return result.GetStatusCode(this);
        }
    }
}
