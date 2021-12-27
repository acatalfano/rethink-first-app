using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using AutoMapper;

using Moq;

using RT1.Business.Tests.Providers;
using RT1.Business.Tests.Utilities;
using RT1.DataProviders;
using RT1.Implementations.Services;
using RT1.Model.Dtos.OperationOutcome;

using Xunit;

namespace RT1.Business.Tests
{
    /// <summary>
    /// This class merely runs each PatientsService method using the unmocked mapper
    /// to ensure that an exception is not thrown.
    ///
    /// Effectively testing that the configuration is set up properly to facilitate
    /// the service's conversions
    /// </summary>
    public class PatientsServiceAndMapperIntegrationTest
    {
        private readonly MockControllerBase mockController;
        private readonly PatientsServiceMocksUnmockedMapper dependencyProvider;
        private readonly IPatientsService service;

        public PatientsServiceAndMapperIntegrationTest()
        {
            mockController = new MockControllerBase();
            dependencyProvider = new PatientsServiceMocksUnmockedMapper();
            service = new PatientsService(
                dependencyProvider.DataProviderMock.Object,
                dependencyProvider.Mapper
            );
        }

        [Fact]
        public async Task GetAllPatients_MapperConversions()
        {
            var outcome = await service.GetAllPatients();
            outcome.GetStatusCode(mockController);
            mockController.AssertStatusIs(OperationStatus.Ok);
        }

        [Fact]
        public async Task GetPatientById_MapperConversions()
        {
            var outcome = await service.GetPatientById(dependencyProvider.validId);
            outcome.GetStatusCode(mockController);
            mockController.AssertStatusIs(OperationStatus.Ok);
        }

        [Fact]
        public async Task CreateManyPatients_MapperConversions()
        {
            var outcome = await service.CreateManyPatients(dependencyProvider.PatientDtos);
            outcome.GetStatusCode(mockController);
            mockController.AssertStatusIs(OperationStatus.Ok);
        }

        [Fact]
        public async Task UpdateManyPatients_MapperConversions()
        {
            var outcome = await service.UpdateManyPatients(dependencyProvider.PatientDtos);
            outcome.GetStatusCode(mockController);
            mockController.AssertStatusIs(OperationStatus.Ok);
        }

        [Fact]
        public async Task UpdatePatient_MapperConversions()
        {
            var outcome = await service.UpdatePatient(
                dependencyProvider.validId,
                dependencyProvider.TargetPatientDto
            );
            outcome.GetStatusCode(mockController);
            mockController.AssertStatusIs(OperationStatus.Ok);
        }

        [Fact]
        public async Task DeletePatient_MapperConversions()
        {
            var outcome = await service.DeletePatient(dependencyProvider.validId);
            outcome.GetStatusCode(mockController);
            mockController.AssertStatusIs(OperationStatus.Ok);
        }
    }
}
