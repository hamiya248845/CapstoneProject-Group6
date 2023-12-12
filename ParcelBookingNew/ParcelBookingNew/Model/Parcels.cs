using System.ComponentModel.DataAnnotations;

namespace ParcelBookingNew.Model
{
    public class Parcels
    {
        [Key]
        public int bookingId { get; set; }
        public string description { get; set; }
        public float weight { get; set; }
        public string deliveryAddress { get; set; }
        public int amount { get; set; }
    }
}
