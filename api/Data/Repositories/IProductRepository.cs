using WebAPI.Models;

namespace WebAPI.Data.Repositories
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> GetAll();
        Task<Product?> GetById(int id);
        Task<IEnumerable<Product?>> GetByCategory(string category);
        Task<bool> ProductExists(int id);
    }
}
