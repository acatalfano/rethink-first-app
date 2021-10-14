using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;

using RT1.Model.Dtos;

namespace RT1.Business.Tests.Comparers
{
    public class GenderDtoEqualityComparer : IEqualityComparer<GenderDto>
    {
        public bool Equals(GenderDto lhs, GenderDto rhs)
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
                return lhs.Id == rhs.Id && lhs.Label.Equals(rhs.Label);
            }
        }

        public int GetHashCode([DisallowNull] GenderDto obj)
        {
            return obj.Id ^ obj.Label.GetHashCode();
        }
    }
}
