using System.Collections.Generic;
using System.Threading.Tasks;

using RT1.Model.Objects.Entities;

namespace RT1.DataProviders
{
    public interface IPatientsDataProvider
    {
        Task<IEnumerable<Patient>> GetAllPatients();
        Task<Patient> GetPatientById(int id);
        Task<IEnumerable<Patient>> CreateManyPatients(IEnumerable<Patient> patients);
        Task<IEnumerable<Patient>> UpdateManyPatients(IEnumerable<Patient> patients);
        Task<Patient> UpdatePatient(Patient patient);
        Task<Patient> DeletePatient(int id);
    }
}
