using Microsoft.EntityFrameworkCore;
using ParcelBookingNew.Data;
using ParcelBookingNew.Model;
using ParcelBookingNew.Services;
using System.Collections.Generic; // Add this for IEnumerable<T>

namespace ParcelBookingNew.Services
{
    public class ParcelService : IParcelService // Removed the semicolon
    {
        private readonly DbContextClass _dbContext;

        public ParcelService(DbContextClass dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<Parcels> GetProductList() // Corrected method name and return type
        {
            return _dbContext.ParcelList.ToList(); // Corrected variable name
        }

        public Parcels GetProductById(int id)
        {
            return _dbContext.ParcelList.Where(x => x.bookingId == id).FirstOrDefault();
        }

        public Parcels AddProduct(Parcels product)
        {
            var result = _dbContext.ParcelList.Add(product);
            _dbContext.SaveChanges();
            return result.Entity;
        }

        public Parcels UpdateProduct(Parcels product)
        {
            var result = _dbContext.ParcelList.Update(product);
            _dbContext.SaveChanges();
            return result.Entity;
        }

        public bool DeleteProduct(int Id)
        {
            var filteredData = _dbContext.ParcelList.Where(x => x.bookingId == Id).FirstOrDefault();
            var result = _dbContext.Remove(filteredData);
            _dbContext.SaveChanges();
            return result != null ? true : false;
        }
    }
}
