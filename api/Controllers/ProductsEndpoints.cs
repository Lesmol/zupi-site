using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Data.Services;

namespace api.Controllers
{
    public static class ProductsEndpoints
    {
        public static void MapProductsEndpoints(this IEndpointRouteBuilder app)
        {
            var group = app.MapGroup("/v1/products");

            group.MapGet("/", GetAll);
            group.MapGet("/{id}", GetById);
            group.MapGet("/exists{id}", ProductExists);
        }

        public static async Task<IResult> GetAll(IProductService service)
        {
            var result = await service.GetAll();

            return Results.Ok(result);
        }

        public static async Task<IResult> GetById(IProductService service, int id)
        {
            var result = await service.GetById(id);

            if (result is null) {
                return Results.NotFound("Product Does Not Exist");
            }

            return Results.Ok(result);
        }

        public static async Task<IResult> ProductExists(IProductService service, int id)
        {
            var result = await service.GetById(id);

            return Results.Ok(result);
        }
    }
}