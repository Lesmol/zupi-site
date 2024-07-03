"use server";

// TODO: provide productive return messages to the frontend
// creating Product interface that defines the Product structure
interface Product {
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
  let data;

  try {
    const response = await fetch("http://localhost:5290/v1/products");

    if (!response.ok) {
      // throw an error
      throw new Error("Failed to fetch products.");
    }

    data = await response.json();
  } catch (error) {
    // write the error to the console and return an empty array
    console.error(error);
    data = [];
  }

  return data;
}

// server-side function that fetches a product and returns it
export async function fetchProduct(id: number): Promise<Product | null> {
  // define data variable that store the product
  let data;

  try {
    const response = await fetch(`http://localhost:5290/v1/products/${id}`);

    if (!response.ok) {
      // throw an error
      throw new Error(response.statusText);
    }

    data = await response.json();
  } catch (error) {
    // write the error to the console and return null
    data = null;
  }

  return data;
}
