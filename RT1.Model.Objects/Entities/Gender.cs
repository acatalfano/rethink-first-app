using System.Collections.Generic;

namespace RT1.Model.Objects.Entities
{
    public class Gender
    {
        public int Id { get; set; }
        public string Label { get; set; }
        public ICollection<Patient> Patients { get; set; }
    }
}
