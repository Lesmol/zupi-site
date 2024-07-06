"use server";

// TODO: provide productive return messages to the frontend
// creating Product interface that defines the Product structure
export interface Product {
  id: number;
  productName: string;
  productDescription: string;
  productCategory: string;
  productPrice: number;
  imageUrl: string;
}

// server-side function that fetches products and returns an array
export async function fetchProducts(): Promise<Product[] | []> {
  // define data variable that store products
  let products: Product[] | [] = [];

  try {
    const response = await fetch("http://localhost:5290/v1/products");

    if (!response.ok) {
      // throw an error
      throw new Error("Failed to fetch products.");
    }

    products = await response.json();
  } catch (error) {
    // write the error to the console and return an empty array
    console.error(`Error fetching products: ${error}`);
  }

  return products;
}

// server-side function that fetches a product and returns it
export async function fetchProduct(id: number): Promise<Product | null> {
  // define data variable that store the product
  let productInfo: Product | null = null;

  try {
    const response = await fetch(`http://localhost:5290/v1/products/${id}`);

    if (!response.ok) {
      // throw an error
      throw new Error(response.statusText);
    }

    productInfo = await response.json();
  } catch (error) {
    // write the error to the console and return null
    console.error(`Error fetching product: ${error}`);
  }

  return productInfo;
}

// server-side function that checks if a products exists
export async function productExists(id: number): Promise<boolean | null> {
  // define data variable that store the product
  let productExists: boolean | null = null;

  try {
    const response = await fetch(
      `http://localhost:5290/v1/products/exists/${id}`
    );

    if (!response.ok) {
      // throw an error
      throw new Error(response.statusText);
    }

    productExists = await response.json();
  } catch (error) {
    // write the error to the console and return null
    console.error(`Error checking product existence: ${error}`);
  }

  return productExists;
}
