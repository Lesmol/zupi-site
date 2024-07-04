using WebAPI.Models;

namespace WebAPI.Data.Repositories
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> GetAll();
        Task<Product?> GetById(int id);
        Task<IEnumerable<Product?>> GetByCategory(string category);
        Task<IEnumerable<Product?>> Search(string query);
        Task<bool> ProductExists(int id);
    }
}
