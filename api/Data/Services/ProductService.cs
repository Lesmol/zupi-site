using api.Models;

namespace api.Data.Services
{
    public class ProductService : IProductService
    {
        public Task<IEnumerable<Product>> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Product?>> GetByCategory(string category)
        {
            throw new NotImplementedException();
        }

        public Task<Product?> GetById(int id)
        {
            throw new NotImplementedException();
        }

        public bool ProductExists(int id)
        {
            throw new NotImplementedException();
        }
    }
}