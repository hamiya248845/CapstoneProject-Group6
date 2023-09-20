using System.ComponentModel.DataAnnotations;

namespace ABCInsurance.Model
{
    public class model
    {

        [Key]
        public string? UNIQUEPERSONKEY { get; set; }
        public string? LASTNAME { get; set; }
        public string? FIRSTNAME { get; set; }

        public string? MIDDLEINITIAL { get; set; }
        public  DateTime DATEOFBIRTH { get; set; }
        public string? GENDER { get; set; }

        public string? PERMANENTADDRESSLINE1 { get; set; }
        public string? PERMANENTADDRESSLINE2 { get; set; }

        public string? PERMANENTCITY { get; set; }

        public string? PERMANENTSTATE { get; set; }

        public int PERMANENTZIPCODE { get; set; }

        public string? PERMANENTCOUNTY { get; set; }

        public string? TELEPHONENUMBER { get; set; }

        public string? EMAIL { get; set; }




    }
}
