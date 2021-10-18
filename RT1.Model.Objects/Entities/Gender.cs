using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace RT1.Model.Objects.Entities
{
    public class Gender
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Label { get; set; }
        public ICollection<Patient> Patients { get; set; }
    }
}
