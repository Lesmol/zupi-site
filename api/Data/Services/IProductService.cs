using api.Models;

namespace api.Data
{
    public interface IProductService
    {
        Task<IEnumerable<Product>> GetAll();
        Task<Product?> GetById(int id);
        Task<IEnumerable<Product?>> GetByCategory(string category);
        bool ProductExists(int id);
    }
}