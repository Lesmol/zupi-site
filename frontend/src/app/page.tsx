"use client";

import Navbar from "./components/navbar";
import bedroom from "@/../public/images/bedroom.webp";
import chair from "@/../public/images/chair.jpg";
import coffee_table from "@/../public/images/coffee_table.jpg";
import dining from "@/../public/images/dining.webp";
import kitchen from "@/../public/images/kitchen.webp";
import outdoor from "@/../public/images/outdoor.jpg";
import sofas from "@/../public/images/sofas.jpg";
import lounge from "@/../public/images/lounge.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchProduct, fetchProducts, Product } from "../actions/products";

export default function Home() {
  const [products, setProducts] = useState<Product[] | []>([]);
  const placeholder = new Array(8).fill(null);

  useEffect(() => {
    // ! on the first fetch to the database, it always exceeds the time limit and requires a refresh
    // TODO: provide productive return messages to the frontend
    // lambda function to fetch products with server-side function
    async function fetchProductsData() {
      const result = await fetchProducts();
      // setProducts(result);
      console.log(result);
    }

    fetchProductsData();
  }, []);

  async function fetchProductData(id: number) {
    // TODO: provide productive return messages to the frontend
    // function to fetch product with server-side function
    const result = await fetchProduct(id);
  }

  return (
    <main>
      {/* Hero section */}
      <section className="bg-orange p-4">
        <Navbar />
        <div className="container max-w-screen-xl mx-auto flex flex-col-reverse my-14 items-center justify-center lg:flex-row">
          <div className="text-primary z-10 text-center lg:text-left">
            <h1 className="mx-auto mt-3 text-4xl font-semibold max-w-md lg:mt-0">
              A space only you can create.
            </h1>
            <p className="mx-auto max-w-xl lg:max-w-sm lg:mx-0">
              Elevate your home and office with our incredibly high-quality
              furniture at surprisingly affordable prices. Our exceptional
              service goes beyond the sale, ensuring a smile-worthy experience
              that leaves your space looking stylish and feeling functional.
            </p>
          </div>
          <Image
            src={lounge}
            alt="An image of a couch and a coffee table"
            className="aspect-752/444 w-full max-w-3xl rounded-xl lg:w-2/3 lg:-ml-24"
          />
        </div>
      </section>

      {/* Explore range of products */}
      <section className="container p-4 max-screen-xl mx-auto justify-center items-center">
        <h1 className="text-center text-xl mt-10 sm:text-2xl md:text-4xl font-semibold">
          &#8212; Explore our range of products &#8212;
        </h1>

        <div className="relative grid grid-cols-2 gap-2 max-w-screen-lg mx-auto mt-6">
          <div className="space-y-2">
            <div className="rounded-lg group relative h-1/2 overflow-clip flex justify-center items-center">
              <Image
                src={chair}
                alt="A picture of a Bentley dining room chair"
                className="object-cover h-full md:group-hover:scale-105 transition duration-300 ease-out"
              />

              <a
                href=""
                className="absolute z-10 text-xs w-1/2 py-2 bottom-2 rounded font-bold text-center bg-white text-black md:text-base hover:md:bg-black hover:md:text-white transition 150 ease-in-out"
              >
                Chairs
              </a>
            </div>
            <div className="rounded-lg group relative h-1/2 overflow-clip flex justify-center items-center">
              <Image
                src={kitchen}
                alt="A picture of a minimalist modern kitchen"
                className="object-cover h-full md:group-hover:scale-105 transition duration-300 ease-out"
              />

              <a
                href=""
                className="absolute z-10 text-xs w-1/2 py-2 bottom-2 rounded font-bold text-center bg-white text-black md:text-base hover:md:bg-black hover:md:text-white transition 150 ease-in-out"
              >
                Kitchen
              </a>
            </div>
          </div>
          <div className="space-y-1">
            {/* Bedroom */}
            <div className="rounded-lg group relative h-2/5 overflow-clip flex justify-center items-center">
              <Image
                src={bedroom}
                alt="A picture of a Bentley bed"
                className="object-cover h-full md:group-hover:scale-105 transition duration-300 ease-out"
              />

              <a
                href=""
                className="absolute z-10 text-xs w-1/2 py-2 bottom-2 rounded font-bold text-center bg-white text-black md:text-base hover:md:bg-black hover:md:text-white transition 150 ease-in-out"
              >
                Bedroom
              </a>
            </div>

            {/* Couches */}
            <div className="rounded-lg group relative h-2/5 overflow-clip flex justify-center items-center">
              <Image
                src={sofas}
                alt="A picture of a Bentley sofa set"
                className="object-cover h-full md:group-hover:scale-105 transition duration-300 ease-out"
              />

              <a
                href=""
                className="absolute z-10 text-xs w-1/2 py-2 bottom-2 rounded font-bold text-center bg-white text-black md:text-base hover:md:bg-black hover:md:text-white transition 150 ease-in-out"
              >
                Couches
              </a>
            </div>

            {/* Tables */}
            <div className="rounded-lg group relative h-1/5 overflow-clip flex justify-center items-center">
              <Image
                src={coffee_table}
                alt="A picture of a coffee table"
                className="object-cover h-full md:group-hover:scale-105 transition duration-300 ease-out"
              />

              <a
                href=""
                className="absolute z-10 text-xs w-1/2 py-2 bottom-2 rounded font-bold text-center bg-white text-black md:text-base hover:md:bg-black hover:md:text-white transition 150 ease-in-out"
              >
                Tables
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products section */}
      <section className="container flex flex-wrap justify-around mt-24 p-4 max-w-screen-xl mx-auto">
        {products.length === 0
          ? placeholder.map(() => {
              return (
                <div className="h-80 w-72 animate-skeleton rounded-lg mb-10"></div>
              );
            })
          : products.map((product) => {
              return (
                <div className="h-80 w-72 animate-skeleton rounded-lg mb-10">
                  {product.productName}
                </div>
              );
            })}
      </section>
    </main>
  );
}
