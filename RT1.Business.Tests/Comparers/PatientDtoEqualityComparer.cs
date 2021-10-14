using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;

using RT1.Model.Dtos;

namespace RT1.Business.Tests.Comparers
{
    public class PatientDtoEqualityComparer : IEqualityComparer<PatientDto>
    {
        private IEqualityComparer<GenderDto> genderDtoEqualityComparer = new GenderDtoEqualityComparer();
        public bool Equals(PatientDto lhs, PatientDto rhs)
        {
            if (lhs == null && rhs == null)
            {
                return true;
            }
            else if (lhs == null || rhs == null)
            {
                return false;
            }
            else
            {
                return lhs.FirstName.Equals(rhs.FirstName) &&
                    lhs.LastName.Equals(rhs.LastName) &&
                    genderDtoEqualityComparer.Equals(lhs.Gender, rhs.Gender) &&
                    lhs.Birthday.Equals(rhs.Birthday) &&
                    lhs.Id == rhs.Id;
            }
        }

        public int GetHashCode([DisallowNull] PatientDto obj)
        {
            return genderDtoEqualityComparer.GetHashCode(obj.Gender) ^
                Tuple.Create(
                    obj.FirstName,
                    obj.LastName,
                    obj.Birthday,
                    obj.Id
                ).GetHashCode();
        }
    }
}
