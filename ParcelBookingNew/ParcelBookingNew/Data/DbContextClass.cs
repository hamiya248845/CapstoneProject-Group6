using Microsoft.EntityFrameworkCore;
using ParcelBookingNew.Model;
using Microsoft.Extensions.Configuration;

namespace ParcelBookingNew.Data
{
    public class DbContextClass : DbContext
    {
        protected readonly IConfiguration Configuration;

        public DbContextClass(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"));
        }

        public DbSet<Parcels> ParcelList { get; set; }
    }
}
