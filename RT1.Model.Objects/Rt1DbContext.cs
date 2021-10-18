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
            modelBuilder.Entity<Gender>(gender =>
            {
                //TODO: clear this out if you figure out why it's not working...
                //TODO: likewise for the attributes in the class declarations
                //gender.Property(thisGender => thisGender.Id)
                //    .ValueGeneratedOnAdd();
            });

            modelBuilder.Entity<Patient>(patient =>
            {
                //patient.Property(thisPatient => thisPatient.Id)
                //    .ValueGeneratedOnAdd();
                patient.HasOne(thisPatient => thisPatient.Gender)
                    .WithMany(gender => gender.Patients)
                    .HasForeignKey(patient => patient.GenderId);
            });
        }
    }
}
