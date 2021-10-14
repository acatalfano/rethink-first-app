using System;

namespace RT1.Model.Dtos
{
    public class PatientDto
    {
        public long Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public GenderDto Gender { get; set; }
        public DateTime Birthday { get; set; }
    }
}
