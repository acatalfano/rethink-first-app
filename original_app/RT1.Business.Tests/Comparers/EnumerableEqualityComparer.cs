using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;

namespace RT1.Business.Tests.Comparers
{
    public class EnumerableEqualityComparer<T> : IEqualityComparer<IEnumerable<T>>
    {

        private readonly IEqualityComparer<T> elementComparer;

        public EnumerableEqualityComparer(IEqualityComparer<T> elementComparer)
        {
            this.elementComparer = elementComparer;
        }

        public bool Equals(IEnumerable<T> lhs, IEnumerable<T> rhs)
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
                return lhs.Count() == rhs.Count() &&
                    lhs.Zip(rhs, (l, r) => new { l, r }).All(pair => elementComparer.Equals(pair.l, pair.r));
            }
        }

        public int GetHashCode([DisallowNull] IEnumerable<T> obj)
        {
            return obj.Count() ^
                obj.Aggregate(0, (accum, patient) => accum ^ elementComparer.GetHashCode(patient));
        }
    }
}
