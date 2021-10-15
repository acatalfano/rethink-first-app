using System.Collections.Generic;
using System.Threading.Tasks;

using Moq;

using RT1.Business.Tests.Providers;
using RT1.Business.Tests.Utilities;
using RT1.Implementations.Services;
using RT1.Model.Dtos;
using RT1.Model.Dtos.OperationOutcome;
using RT1.Model.Objects.Entities;

using Xunit;

namespace RT1.Business.Tests
{
    public class PatientsServiceTest
    {
        private readonly PatientsServiceMocks mocks;
        private readonly IPatientsService patientsService;
        private readonly MockControllerBase mockController;

        public PatientsServiceTest()
        {
            mocks = new PatientsServiceMocks();
            patientsService = new PatientsService(
                mocks.DataProviderMock.Object,
                mocks.Mapper.Object
            );
            mockController = new MockControllerBase();
        }

        [Fact]
        public async Task GetAllPatients_ReturnsPatients()
        {
            var outcome = await patientsService.GetAllPatients();

            mocks.Mapper.Verify(
                mapper => mapper.Map<IEnumerable<PatientDto>>(
                    It.Is(mocks.PatientEntities, mocks.PatientListEqualityComparer)
                ),
                Times.Once
            );

            outcome.GetStatusCode(mockController);
            mockController.AssertStatusIs(OperationStatus.Ok);
            mockController.AssertValueIs(mocks.PatientDtos, mocks.PatientDtoListEqualityComparer);
        }

        [Fact]
        public async Task GetPatientById_ReturnsSpecificPatient()
        {
            var outcome = await patientsService.GetPatientById(mocks.validId);

            mocks.Mapper.Verify(
                mapper => mapper.Map<PatientDto>(It.Is(mocks.TargetPatientEntity, mocks.PatientEqualityComparer)),
                Times.Once
            );

            outcome.GetStatusCode(mockController);
            mockController.AssertStatusIs(OperationStatus.Ok);
            mockController.AssertValueIs(mocks.TargetPatientDto, mocks.PatientDtoEqualityComparer);
        }

        [Fact]
        public async Task GetPatientById_ReturnsNotFoundForMissingPatient()
        {
            var outcome = await patientsService.GetPatientById(mocks.invalidId);
            mocks.Mapper.Verify(
                mapper => mapper.Map<PatientDto>(It.IsAny<Patient>()),
                Times.Never
            );
            outcome.GetStatusCode(mockController);
            mockController.AssertStatusIs(OperationStatus.NotFound);
        }

        [Fact]
        public async Task CreateManyPatients_ReturnsCreatedPatients()
        {
            var outcome = await patientsService.CreateManyPatients(new List<PatientDto>());

            mocks.Mapper.Verify(
                mapper => mapper.Map<IEnumerable<PatientDto>>(
                    It.Is(mocks.PatientEntities, mocks.PatientListEqualityComparer)
                ),
                Times.Once
            );

            outcome.GetStatusCode(mockController);
            mockController.AssertStatusIs(OperationStatus.Ok);
            mockController.AssertValueIs(mocks.PatientDtos, mocks.PatientDtoListEqualityComparer);
        }

        [Fact]
        public async Task CreateManyPatients_DispatchesCreateOperation()
        {
            var outcome = await patientsService.CreateManyPatients(mocks.PatientDtos);

            mocks.DataProviderMock.Verify(
                dataProvider => dataProvider.CreateManyPatients(
                    It.Is(mocks.PatientEntities, mocks.PatientListEqualityComparer)
                ),
                Times.Once
            );
        }

        [Fact]
        public async Task CreateManyPatients_ReturnsBadRequestForDuplicatePatient()
        {
            var outcome = await patientsService.CreateManyPatients(new List<PatientDto>
            {
                mocks.InvalidPatientDto
            });
            outcome.GetStatusCode(mockController);
            mockController.AssertStatusIs(OperationStatus.BadRequest);
        }

        [Fact]
        public async Task UpdateManyPatients_ReturnsUpdatedPatients()
        {
            var outcome = await patientsService.CreateManyPatients(mocks.PatientDtos);
            outcome.GetStatusCode(mockController);
            mocks.Mapper.Verify(
                mapper => mapper.Map<IEnumerable<Patient>>(
                    It.Is(mocks.PatientDtos, mocks.PatientDtoListEqualityComparer)
                ),
                Times.Once
            );
            mockController.AssertStatusIs(OperationStatus.Ok);
            mockController.AssertValueIs(mocks.PatientDtos);
        }

        [Fact]
        public async Task UpdateManyPatients_DispatchesUpdateOperation()
        {
            await patientsService.UpdateManyPatients(mocks.PatientDtos);
            mocks.DataProviderMock.Verify(
                dataProvider => dataProvider.UpdateManyPatients(
                    It.Is(mocks.PatientEntities, mocks.PatientListEqualityComparer
                ))
            );
        }

        [Fact]
        public async Task UpdateManyPatients_ReturnsNotFoundForMissingPatient()
        {
            var outcome = await patientsService.UpdateManyPatients(new List<PatientDto> { mocks.InvalidPatientDto });
            outcome.GetStatusCode(mockController);
            mockController.AssertStatusIs(OperationStatus.NotFound);
        }

        [Fact]
        public async Task UpdatePatient_ReturnsNotFoundForMissingPatient()
        {
            //TODO: ....why????? it's failing..... but WHY????
            //TODO: ^^^^ the mock for mapper.Map<Patient>(It.Is(InvalidPatient, PatientEqualityComparer))
                // APPEARS to be returning "null", but should return InvalidPatient...
            var outcome = await patientsService.UpdatePatient(mocks.invalidId, mocks.InvalidPatientDto);
            outcome.GetStatusCode(mockController);
            mockController.AssertStatusIs(OperationStatus.NotFound);
        }

        [Fact]
        public async Task UpdatePatient_ReturnsUpdatedPatient()
        {
            var outcome = await patientsService.UpdatePatient(mocks.validId, mocks.TargetPatientDto);
            outcome.GetStatusCode(mockController);
            mockController.AssertValueIs(mocks.TargetPatientDto);
        }

        [Fact]
        public async Task UpdatePatient_DispatchesUpdateOperation()
        {
            await patientsService.UpdatePatient(mocks.validId, mocks.TargetPatientDto);
            mocks.DataProviderMock.Verify(
                dataProvider => dataProvider.UpdatePatient(It.Is(mocks.TargetPatientEntity, mocks.PatientEqualityComparer)),
                Times.Once
            );
        }

        [Fact]
        public async Task DeletePatient_ReturnsDeletedPatient()
        {
            var outcome = await patientsService.DeletePatient(mocks.validId);
            outcome.GetStatusCode(mockController);
            mockController.AssertValueIs(mocks.TargetPatientDto);
        }

        [Fact]
        public async Task DeletePatient_DispatchesDeleteOperation()
        {
            await patientsService.DeletePatient(mocks.validId);
            mocks.DataProviderMock.Verify(
                dataProvider => dataProvider.DeletePatient(mocks.validId),
                Times.Once
            );
        }

        [Fact]
        public async Task DeletePatient_ReturnsNotFoundForMissingPatient()
        {
            var outcome = await patientsService.DeletePatient(mocks.invalidId);
            outcome.GetStatusCode(mockController);
            mockController.AssertStatusIs(OperationStatus.NotFound);
        }
    }
}
