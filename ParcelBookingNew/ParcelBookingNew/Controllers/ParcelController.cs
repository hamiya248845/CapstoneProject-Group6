using Microsoft.AspNetCore.Mvc;
using ParcelBookingNew.Model;
using ParcelBookingNew.Services;
namespace ParcelBookingNew.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IParcelService productService;
        public ProductController(IParcelService _productService)
        {
            productService = _productService;
        }
        [HttpGet]
        public IEnumerable<Parcels> ProductList()
        {
            var productList = productService.GetProductList();
            return productList;
        }
        [HttpGet("{id}")]
        public Parcels GetProductById(int id)
        {
            return productService.GetProductById(id);
        }
        [HttpPost]
        public Parcels AddProduct(Parcels product)
        {
            return productService.AddProduct(product);
        }
        [HttpPut]
        public Parcels UpdateProduct(Parcels product)
        {
            return productService.UpdateProduct(product);
        }
        [HttpDelete("{id}")]
        public bool DeleteProduct(int id)
        {
            return productService.DeleteProduct(id);
        }
    }
}