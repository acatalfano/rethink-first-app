using System;
using System.Collections.Generic;
using System.Threading.Tasks;

using AutoMapper;

using Microsoft.EntityFrameworkCore;

using RT1.Business;
using RT1.DataProviders;
using RT1.Model.Dtos;
using RT1.Model.Dtos.OperationOutcome;
using RT1.Model.Objects.Entities;

namespace RT1.Implementations.Services
{
    public class PatientsService : IPatientsService
    {
        private readonly IPatientsDataProvider patientsDataProvider;
        private readonly IMapper mapper;

        public PatientsService(
            IPatientsDataProvider patientsDataProvider,
            IMapper mapper
        )
        {
            this.patientsDataProvider = patientsDataProvider;
            this.mapper = mapper;
        }

        public async Task<OperationOutcome<IEnumerable<PatientDto>>> GetAllPatients()
        {
            OperationOutcome<IEnumerable<PatientDto>> outcome = new OperationOutcome<IEnumerable<PatientDto>>();
            try
            {
                var patients = await patientsDataProvider.GetAllPatients();
                outcome.SetOK(mapper.Map<IEnumerable<PatientDto>>(patients));
            }
            catch (Exception ex)
            {
                outcome.SetException(ex);
            }
            return outcome;
        }

        public async Task<OperationOutcome<PatientDto>> GetPatientById(long id)
        {
            OperationOutcome<PatientDto> outcome = new OperationOutcome<PatientDto>();
            try
            {
                var patient = await patientsDataProvider.GetPatientById(id);
                if (patient != null)
                {
                    outcome.SetOK(mapper.Map<PatientDto>(patient));
                }
                else
                {
                    outcome.SetNotFound();
                }
            }
            catch (Exception ex)
            {
                outcome.SetException(ex);
            }
            return outcome;
        }

        public async Task<OperationOutcome<IEnumerable<PatientDto>>> CreateManyPatients(IEnumerable<PatientDto> patients)
        {
            OperationOutcome<IEnumerable<PatientDto>> outcome = new OperationOutcome<IEnumerable<PatientDto>>();
            try
            {
                var createdPatients = await patientsDataProvider.CreateManyPatients(mapper.Map<IEnumerable<Patient>>(patients));
                outcome.SetOK(mapper.Map<IEnumerable<PatientDto>>(createdPatients));
            }
            catch (DbUpdateException)
            {
                outcome.SetBadRequest();
            }
            catch (Exception ex)
            {
                outcome.SetException(ex);
            }
            return outcome;
        }

        public async Task<OperationOutcome<IEnumerable<PatientDto>>> UpdateManyPatients(IEnumerable<PatientDto> patients)
        {
            OperationOutcome<IEnumerable<PatientDto>> outcome = new OperationOutcome<IEnumerable<PatientDto>>();
            try
            {
                var updatedPatients = await patientsDataProvider.UpdateManyPatients(mapper.Map<IEnumerable<Patient>>(patients));
                outcome.SetOK(mapper.Map<IEnumerable<PatientDto>>(updatedPatients));
            }
            catch(DbUpdateException)
            {
                outcome.SetNotFound();
            }
            catch (Exception ex)
            {
                outcome.SetException(ex);
            }
            return outcome;
        }

        public async Task<OperationOutcome<PatientDto>> UpdatePatient(long id, PatientDto patient)
        {
            OperationOutcome<PatientDto> outcome = new OperationOutcome<PatientDto>();
            try
            {
                var targetPatient = mapper.Map<Patient>(patient);
                targetPatient.Id = id;
                var updatedPatient = await patientsDataProvider.UpdatePatient(targetPatient);
                outcome.SetOK(mapper.Map<PatientDto>(updatedPatient));
            }
            catch(DbUpdateException)
            {
                outcome.SetNotFound();
            }
            catch (Exception ex)
            {
                outcome.SetException(ex);
            }
            return outcome;
        }

        public async Task<OperationOutcome<PatientDto>> DeletePatient(long id)
        {
            OperationOutcome<PatientDto> outcome = new OperationOutcome<PatientDto>();
            try
            {
                var deletedPatient = await patientsDataProvider.DeletePatient(id);
                outcome.SetOK(mapper.Map<PatientDto>(deletedPatient));
            }
            catch (DbUpdateException)
            {
                outcome.SetNotFound();
            }
            catch (Exception ex)
            {
                outcome.SetException(ex);
            }
            return outcome;
        }
    }
}
