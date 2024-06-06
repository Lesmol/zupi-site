using api.Models;

namespace api.Data
{
    public interface IProductService
    {
        Task<IEnumerable<Product>> GetAll();
        Task<Product?> GetById(int id);
        Task<IEnumerable<Product?>> GetByCategory(string category);
        Task<bool> ProductExists(int id);
    }
}