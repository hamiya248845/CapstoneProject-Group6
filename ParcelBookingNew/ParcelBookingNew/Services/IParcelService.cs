using ParcelBookingNew.Model;

namespace ParcelBookingNew.Services
{
    public interface IParcelService
    {
        public IEnumerable<Parcels> GetProductList();
        public Parcels GetProductById(int id);
        public Parcels AddProduct(Parcels product);
        public Parcels UpdateProduct(Parcels product);
        public bool DeleteProduct(int Id);
    }
}
