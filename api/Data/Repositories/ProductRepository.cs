using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Data.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly ILogger<ProductRepository> _logger;
        private readonly ProductsContext _context;

        public ProductRepository(ILogger<ProductRepository> logger, ProductsContext context)
        {
            this._logger = logger;
            this._context = context;
        }

        public async Task<IEnumerable<Product>> GetAll()
        {
            var result = await _context
                .Products
                .ToListAsync();

            return result;
        }

        public async Task<IEnumerable<Product?>> GetByCategory(string category)
        {
            var result = await _context
                .Products
                .Where(product => product.ProductCategory == category)
                .ToListAsync();

            return result;
        }

        public async Task<Product?> GetById(int id)
        {
            var result = await _context
                .Products
                .FirstOrDefaultAsync(member => member.Id == id);

            return result;
        }

        public async Task<bool> ProductExists(int id)
        {
            return await _context
                .Products
                .AnyAsync(product => product.Id == id);
        }
    }
}
