using Microsoft.EntityFrameworkCore;

using RT1.Model.Objects.Entities;

namespace RT1.Model.Objects
{
    public class Rt1DbContext : DbContext
    {
        public virtual DbSet<Patient> Patients { get; set; }
        public virtual DbSet<Gender> Genders { get; set; }
        public Rt1DbContext(DbContextOptions options)
            : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Gender>();

            modelBuilder.Entity<Patient>(patient =>
            {
                patient.HasOne(thisPatient => thisPatient.Gender)
                    .WithMany(gender => gender.Patients)
                    .HasForeignKey(patient => patient.GenderId);
            });
        }
    }
}
