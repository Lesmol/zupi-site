using api.Data;
using api.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IProductService _service;

        public ProductsController(IProductService service)
        {
            this._service = service;
        }

        [HttpGet]
        public async Task<IEnumerable<Product>> GetAll()
        {
            return await _service.GetAll();
        }

        [HttpGet]
        public async Task<Product?> GetById(int id)
        {
            return await _service.GetById(id);
        }

        [HttpGet]
        public async Task<bool> ProductExists(int id)
        {
            return await _service.ProductExists(id);
        }
    }
}