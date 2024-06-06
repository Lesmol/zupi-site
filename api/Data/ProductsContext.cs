using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class ProductsContext : DbContext
    {
        public ProductsContext(DbContextOptions<ProductsContext> options) : base(options)
        {}

        public DbSet<Product> Products { get; set;}
    }
}