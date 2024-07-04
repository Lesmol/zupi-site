using WebAPI.Data.Repositories;
using WebAPI.Models;

namespace WebAPI.Data.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _repository;
        private readonly ILogger<ProductService> _logger;

        public ProductService(ILogger<ProductService> logger, IProductRepository repository)
        {
            this._logger = logger;
            this._repository = repository;
        }

        public async Task<IEnumerable<Product>> GetAll()
        {
            var result = await _repository
                .GetAll();

            return result;
        }

        public async Task<IEnumerable<Product?>> GetByCategory(string category)
        {
            var result = await _repository
                .GetByCategory(category);

            return result;
        }

        public async Task<Product?> GetById(int id)
        {
            var result = await _repository
                .GetById(id);

            return result;
        }

        public Task<bool> ProductExists(int id)
        {
            var result = _repository
                .ProductExists(id);

            return result;
        }

        public async Task<IEnumerable<Product?>> Search(string query)
        {
            var result = await _repository
                .Search(query);

            return result;
        }
    }
}
