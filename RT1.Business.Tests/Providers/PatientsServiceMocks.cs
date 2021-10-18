using System;
using System.Collections.Generic;
using System.Linq;

using AutoMapper;

using Microsoft.EntityFrameworkCore;

using Moq;

using RT1.Business.Tests.Comparers;
using RT1.DataProviders;
using RT1.Model.Dtos;
using RT1.Model.Objects.Entities;

namespace RT1.Business.Tests.Providers
{
    class PatientsServiceMocks
    {
        public Mock<IPatientsDataProvider> DataProviderMock
        {
            get
            {
                if (dataProviderMock == null)
                {
                    dataProviderMock = buildDataProviderMock();
                }
                return dataProviderMock;
            }
        }

        public Mock<IMapper> Mapper
        {
            get
            {
                if (mapper == null)
                {
                    mapper = buildMapperMock();
                }
                return mapper;
            }
        }

        public Patient TargetPatientEntity
        {
            get
            {
                if (targetPatientEntity == null)
                {
                    targetPatientEntity = new Patient
                    {
                        FirstName = "first",
                        LastName = "last",
                        Id = validId,
                        GenderId = 0,
                        Birthday = new DateTime(0)
                    };
                }
                return targetPatientEntity;
            }
        }

        public PatientDto TargetPatientDto
        {
            get
            {
                if (targetPatientDto == null)
                {
                    targetPatientDto = new PatientDto
                    {
                        FirstName = "first",
                        LastName = "last",
                        Id = validId,
                        Birthday = new DateTime(0),
                        Gender = new GenderDto { Id = 0, Label = "M" }
                    };
                }
                return targetPatientDto;
            }
        }

        public PatientDto InvalidPatientDto
        {
            get
            {
                return new PatientDto
                {
                    Id = invalidId,
                    Gender = new GenderDto { Id = 5000, Label = "Jedi" },
                    FirstName = "Luke",
                    LastName = "Skywalker",
                    Birthday = new DateTime(0)
                };
            }
        }

        public Patient InvalidPatient
        {
            get
            {
                return new Patient
                {
                    Id = invalidId,
                    GenderId = 5000,
                    FirstName = "Luke",
                    LastName = "Skywalker",
                    Birthday = new DateTime(0)
                };
            }
        }

        public List<Patient> PatientEntities
        {
            get
            {
                if (patientEntities == null)
                {
                    patientEntities = new List<Patient>
                    {
                        TargetPatientEntity,
                        new Patient
                        {
                            FirstName = "next",
                            LastName = "one",
                            GenderId = 1,
                            Birthday = new DateTime(10),
                            Id = 2
                        }
                    };
                }
                return patientEntities;
            }
        }

        public List<PatientDto> PatientDtos
        {
            get
            {
                if (patientDtos == null)
                {
                    patientDtos = new List<PatientDto>
                    {
                        TargetPatientDto,
                        new PatientDto
                        {
                            FirstName = "next",
                            LastName = "one",
                            Gender = new GenderDto { Id = 1, Label = "F" },
                            Birthday = new DateTime(10),
                            Id = 2
                        }
                    };
                }
                return patientDtos;
            }
        }

        public IEqualityComparer<Patient> PatientEqualityComparer
        {
            get
            {
                if (patientEqualityComparer == null)
                {
                    patientEqualityComparer = new PatientEqualityComparer();
                }
                return patientEqualityComparer;
            }
        }

        public IEqualityComparer<IEnumerable<Patient>> PatientListEqualityComparer
        {
            get
            {
                if (patientListEqualityComparer == null)
                {
                    patientListEqualityComparer = new EnumerableEqualityComparer<Patient>(PatientEqualityComparer);
                }
                return patientListEqualityComparer;
            }
        }

        public IEqualityComparer<PatientDto> PatientDtoEqualityComparer
        {
            get
            {
                if (patientDtoEqualityComparer == null)
                {
                    patientDtoEqualityComparer = new PatientDtoEqualityComparer();
                }
                return patientDtoEqualityComparer;
            }
        }

        public IEqualityComparer<IEnumerable<PatientDto>> PatientDtoListEqualityComparer
        {
            get
            {
                if (patientDtoListEqualityComparer == null)
                {
                    patientDtoListEqualityComparer = new EnumerableEqualityComparer<PatientDto>(PatientDtoEqualityComparer);
                }
                return patientDtoListEqualityComparer;
            }
        }

        public readonly int validId = 5;
        public readonly int invalidId = 10;

        private Mock<IPatientsDataProvider> dataProviderMock;
        private Mock<IMapper> mapper;


        private IEqualityComparer<Patient> patientEqualityComparer;
        private IEqualityComparer<IEnumerable<Patient>> patientListEqualityComparer;
        private IEqualityComparer<PatientDto> patientDtoEqualityComparer;
        private IEqualityComparer<IEnumerable<PatientDto>> patientDtoListEqualityComparer;
        private Patient targetPatientEntity;
        private PatientDto targetPatientDto;
        private List<Patient> patientEntities;
        private List<PatientDto> patientDtos;

        private Mock<IPatientsDataProvider> buildDataProviderMock()
        {
            Mock<IPatientsDataProvider> mock = new Mock<IPatientsDataProvider>();
            mock.Setup(dataProvider => dataProvider.GetAllPatients())
                .ReturnsAsync(PatientEntities);
            mock.Setup(dataProvider => dataProvider.GetPatientById(It.Is<int>(id => id == validId)))
                .ReturnsAsync(TargetPatientEntity);
            mock.Setup(dataProvider => dataProvider.GetPatientById(It.Is<int>(id => id == invalidId)))
                .ReturnsAsync(default(Patient));

            mock.Setup(dataProvider => dataProvider.CreateManyPatients(It.IsAny<IEnumerable<Patient>>()))
                .ReturnsAsync(PatientEntities);
            mock.Setup(dataProvider =>
                dataProvider.CreateManyPatients(
                    It.Is<IEnumerable<Patient>>(patients => patients.Any(patient => patient.Id == invalidId))
                )
            ).ThrowsAsync(new DbUpdateException());

            mock.Setup(dataProvider => dataProvider.UpdateManyPatients(It.IsAny<IEnumerable<Patient>>()))
                .ReturnsAsync(PatientEntities);
            mock.Setup(dataProvider =>
                dataProvider.UpdateManyPatients(
                    It.Is<IEnumerable<Patient>>(patients => patients.Any(patient => patient.Id == invalidId))
                )
            ).ThrowsAsync(new DbUpdateException());

            mock.Setup(dataProvider => dataProvider.UpdatePatient(It.IsAny<Patient>()))
                .ReturnsAsync(TargetPatientEntity);
            mock.Setup(dataProvider =>
                dataProvider.UpdatePatient(
                    It.Is<Patient>(patient => patient.Id == invalidId)
                )
            ).ThrowsAsync(new DbUpdateException());

            mock.Setup(dataProvider => dataProvider.DeletePatient(It.IsAny<int>()))
                .ReturnsAsync(TargetPatientEntity);
            mock.Setup(dataProvider =>
                dataProvider.DeletePatient(
                    It.Is<int>(id => id == invalidId)
                )
            ).ThrowsAsync(new DbUpdateException());

            return mock;
        }

        private Mock<IMapper> buildMapperMock()
        {
            Mock<IMapper> mock = new Mock<IMapper>();
            mock.Setup(mapper => mapper.Map<IEnumerable<PatientDto>>(It.Is(PatientEntities, PatientListEqualityComparer)))
                .Returns(PatientDtos);
            mock.Setup(mapper => mapper.Map<PatientDto>(It.Is(TargetPatientEntity, PatientEqualityComparer)))
                .Returns(TargetPatientDto);
            mock.Setup(mapper => mapper.Map<IEnumerable<Patient>>(It.Is(PatientDtos, PatientDtoListEqualityComparer)))
                .Returns(PatientEntities);
            mock.Setup(mapper =>
                mapper.Map<IEnumerable<Patient>>(
                    It.Is<IEnumerable<PatientDto>>(patients => patients.Any(patient => patient.Id == invalidId))
            )).Returns(new List<Patient> { InvalidPatient });
            mock.Setup(mapper => mapper.Map<Patient>(It.Is(TargetPatientDto, PatientDtoEqualityComparer)))
                .Returns(TargetPatientEntity);
            mock.Setup(mapper => mapper.Map<Patient>(It.Is(InvalidPatient, PatientEqualityComparer)))
                .Returns(InvalidPatient);
            return mock;
        }
    }
}
