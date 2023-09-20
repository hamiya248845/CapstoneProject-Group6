using ABCInsurance.Data;
using Microsoft.AspNetCore.Mvc;

namespace InsuranceWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class webController : ControllerBase
    {
        public readonly DataDBContext _dataDBContext;



        public webController(DataDBContext DataDBContext)
        {
            _dataDBContext = DataDBContext;
        }



        [HttpGet("{UNIQUEPERSONKEY}")]
        public ActionResult<object> GetByUniquePersonKey(string UNIQUEPERSONKEY)
        {
            if (string.IsNullOrEmpty(UNIQUEPERSONKEY))
            {
                return BadRequest("Invalid uniquePersonKey");
            }





            var data = _dataDBContext.Member.FirstOrDefault(d => d.UNIQUEPERSONKEY == UNIQUEPERSONKEY);



            if (data == null)
            {
                return NotFound("Data not found");
            }



            return Ok(data); // Return the data found
        }



        [HttpDelete("{UNIQUEPERSONKEY}")]



        public IActionResult DeleteByUniquePersonKey(string UNIQUEPERSONKEY)
        {
            if (string.IsNullOrEmpty(UNIQUEPERSONKEY))
            {
                return BadRequest("UNIQUEPERSONKEY is required.");
            }



            // Use Entity Framework Core to find and delete data by uniquePersonKey
            var data = _dataDBContext.Member
              .FirstOrDefault(d => d.UNIQUEPERSONKEY == UNIQUEPERSONKEY);
            if (data != null)
            {
                _dataDBContext.Member.Remove(data);
                _dataDBContext.SaveChanges();
                return Ok(); // Return a 204 No Content response after successful deletion
            }
            return BadRequest("No");



        }
    }
}