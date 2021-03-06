using System.Collections.Generic;
using System.Threading.Tasks;

using RT1.Model.Dtos;
using RT1.Model.Dtos.OperationOutcome;

namespace RT1.Business
{
    public interface IPatientsService
    {
        Task<OperationOutcome<IEnumerable<PatientDto>>> GetAllPatients();
        Task<OperationOutcome<PatientDto>> GetPatientById(int id);
        Task<OperationOutcome<IEnumerable<PatientDto>>> CreateManyPatients(IEnumerable<PatientDto> patients);
        Task<OperationOutcome<IEnumerable<PatientDto>>> UpdateManyPatients(IEnumerable<PatientDto> patients);
        Task<OperationOutcome<PatientDto>> UpdatePatient(int id, PatientDto patient);
        Task<OperationOutcome<PatientDto>> DeletePatient(int id);
    }
}
