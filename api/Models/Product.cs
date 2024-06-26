using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public required string ProductName { get; set; }

        [Required]
        [StringLength(500)]
        public required string ProductDescription { get; set; }

        [Required]
        [StringLength(100)]
        public required string ProductCategory { get; set; }

        [Required]
        public required decimal ProductPrice { get; set; }

        [Required]
        public required string ImageUrl { get; set; }
    }
}
