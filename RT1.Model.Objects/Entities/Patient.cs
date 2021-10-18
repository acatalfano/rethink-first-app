using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace RT1.Model.Objects.Entities
{
    public class Patient
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int GenderId { get; set; }
        public DateTime Birthday
        {
            get => birthdayValue;
            set => birthdayValue = value.Date;
        }


        public Gender Gender { get; set; }

        private DateTime birthdayValue;
    }
}
