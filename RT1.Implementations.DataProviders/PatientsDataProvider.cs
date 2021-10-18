using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;

using RT1.DataProviders;
using RT1.Model.Objects;
using RT1.Model.Objects.Entities;

namespace RT1.Implementations.DataProviders
{
    public class PatientsDataProvider : IPatientsDataProvider
    {
        private readonly Rt1DbContext dbContext;

        public PatientsDataProvider(Rt1DbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<IEnumerable<Patient>> GetAllPatients() =>
            await dbContext.Patients
                .Include(patient => patient.Gender)
                .ToListAsync();

        public async Task<Patient> GetPatientById(int id) =>
            await dbContext.Patients
                .Include(patient => patient.Gender)
                .FirstOrDefaultAsync(patient => patient.Id == id);

        public async Task<IEnumerable<Patient>> UpdateManyPatients(IEnumerable<Patient> patients)
        {
            dbContext.Patients.UpdateRange(patients);
            await dbContext.SaveChangesAsync();

            var ids = patients.Select(patient => patient.Id).ToList();

            IEnumerable<Patient> entities = await dbContext.Patients
                .Include(patient => patient.Gender)
                .Where(patient => ids.Contains(patient.Id))
                .ToListAsync();
            return entities;
        }

        public async Task<Patient> UpdatePatient(Patient patient)
        {
            dbContext.Update(patient);
            await dbContext.SaveChangesAsync();

            Patient updatedPatient = await dbContext.Patients.FindAsync(patient.Id);
            return updatedPatient;
        }

        public async Task<IEnumerable<Patient>> CreateManyPatients(IEnumerable<Patient> patients)
        {
            dbContext.Patients.AddRange(patients.ToList());
            await dbContext.SaveChangesAsync();

            var ids = patients.Select(patient => patient.Id).ToList();
            IEnumerable<Patient> updates = await dbContext.Patients
                .Include(patient => patient.Gender)
                .Where(patient => ids.Contains(patient.Id))
                .ToListAsync();

            return updates;
        }

        public async Task<Patient> DeletePatient(int id)
        {
            Patient targetPatient = await dbContext.Patients
                .Include(patient => patient.Gender)
                .FirstAsync(patient => patient.Id == id);

            dbContext.Remove(targetPatient);
            await dbContext.SaveChangesAsync();

            return targetPatient;
        }
    }
}
