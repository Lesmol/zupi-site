using api.Controllers;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Data.Repositories;
using WebAPI.Data.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// DB context service
builder.Services.AddDbContext<ProductsContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnectionString"));
});

//IProductService DI scoped service
builder.Services.AddScoped<IProductService, ProductService>();

//IProductRepository DI scoped service
builder.Services.AddScoped<IProductRepository, ProductRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.Use((ctx, next) =>
{
    ctx.Response.Headers["Access-Control-Allow-Origin"] = "http://localhost:3000";
    return next();
});

app.UseExceptionHandler(appError =>
{
    appError.Run(async context =>
    {
        context.Response.StatusCode = 500;
        context.Response.ContentType = "application/json";

        var contextFeature = context.Features.Get<IExceptionHandlerFeature>();

        if (contextFeature is not null)
        {
            await context.Response.WriteAsJsonAsync("Internal Server Error");
        }
    });
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapProductsEndpoints();

app.Run();
