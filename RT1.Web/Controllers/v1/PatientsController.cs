using System.Collections.Generic;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;

using RT1.Business;
using RT1.Model.Dtos;
using RT1.Web.Controllers.Extensions;

namespace RT1.Web.Controllers.v1
{
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiController]
    public class PatientsController : ControllerBase
    {
        private readonly IPatientsService patientsService;
        public PatientsController(IPatientsService patientsService)
        {
            this.patientsService = patientsService;
        }
        // GET: api/v1/Patients
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PatientDto>>> GetAllPatients()
        {
            var result = await patientsService.GetAllPatients();
            return this.GetStatusCode(result);
        }

        // POST api/v1/Patients/batch
        [HttpPost("batch")]
        public async Task<ActionResult<IEnumerable<PatientDto>>> CreateManyPatients([FromBody] IEnumerable<PatientDto> patients)
        {
            var result = await patientsService.CreateManyPatients(patients);
            return this.GetStatusCode(result);
        }

        // PUT api/v1/Patients/batch
        [HttpPut("batch")]
        public async Task<ActionResult<IEnumerable<PatientDto>>> UpdateManyPatients([FromBody] IEnumerable<PatientDto> patients)
        {
            var result = await patientsService.UpdateManyPatients(patients);
            return this.GetStatusCode(result);
        }

        // GET api/v1/Patients/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PatientDto>> GetPatientById(long id)
        {
            // N.B.: no specific use-case right now, but it's a matter of time for this one
            //          -- get-by-id is fairly standard
            var result = await patientsService.GetPatientById(id);
            return this.GetStatusCode(result);
        }

        // PUT api/v1/Patients/5
        [HttpPut("{id}")]
        public async Task<ActionResult<PatientDto>> UpdatePatient(long id, [FromBody] PatientDto patient)
        {
            var result = await patientsService.UpdatePatient(id, patient);
            return this.GetStatusCode(result);
        }

        // DELETE api/v1/Patients/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<PatientDto>> DeletePatient(long id)
        {
            var result = await patientsService.DeletePatient(id);
            return this.GetStatusCode(result);
        }
    }
}
