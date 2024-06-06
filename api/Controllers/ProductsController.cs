using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
        public Task<IEnumerable<Product>> GetAll()
        {
            return _service.GetAll();
        }

        [HttpGet]
        public Task<Product?> GetById(int id)
        {
            return _service.GetById(id);
        }

        [HttpGet]
        public bool ProductExists(int id)
        {
            return _service.ProductExists(id);
        }
    }
}