using api.Models;

namespace api.Data.Repository
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> GetAll();
        Task<Product?> GetById(int id);
        Task<IEnumerable<Product?>> GetByCategory(string category);
        Task<bool> ProductExists(int id);
    }
}