using WebAPI.Models;

namespace WebAPI.Data.Services
{
    public interface IProductService
    {
        Task<IEnumerable<Product>> GetAll();
        Task<Product?> GetById(int id);
        Task<IEnumerable<Product?>> GetByCategory(string category);
        Task<IEnumerable<Product?>> Search(string query);
        Task<bool> ProductExists(int id);
    }
}
