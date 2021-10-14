using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;

using RT1.Model.Objects.Entities;

namespace RT1.Business.Tests.Comparers
{
    public class PatientEqualityComparer : IEqualityComparer<Patient>
    {
        public bool Equals(Patient lhs, Patient rhs)
        {
            if (lhs == null && rhs == null)
            {
                return true;
            }
            else if (lhs == null || rhs == null)
            {
                return true;
            }
            else
            {
                return lhs.FirstName.Equals(rhs.FirstName) &&
                    lhs.LastName.Equals(rhs.LastName) &&
                    lhs.Birthday.Equals(rhs.Birthday) &&
                    lhs.GenderId == rhs.GenderId &&
                    lhs.Id == rhs.Id;
            }
        }

        public int GetHashCode([DisallowNull] Patient obj)
        {
            return Tuple.Create(
                obj.FirstName,
                obj.LastName,
                obj.Birthday,
                obj.GenderId,
                obj.Id
            ).GetHashCode();
        }
    }
}
