using System.ComponentModel.DataAnnotations;

namespace api.Models
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
        [Range(1, int.MaxValue)]
        public required int ProductPrice { get; set; }

        [Required]
        public required string ImageUrl { get; set; }
    }
}