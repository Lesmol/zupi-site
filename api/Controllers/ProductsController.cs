using Microsoft.AspNetCore.Mvc;
using WebAPI.Data.Services;
using WebAPI.Models;

namespace WebAPI.Controllers
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

        [HttpGet("{id}")]
        public async Task<Product?> GetById(int id)
        {
            return await _service.GetById(id);
        }

        [HttpGet("exists/{id}")]
        public async Task<bool> ProductExists(int id)
        {
            return await _service.ProductExists(id);
        }
    }
}
