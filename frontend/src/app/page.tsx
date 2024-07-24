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
      setProducts(result);
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
    <>
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
      <section className="container mt-16 p-4 max-w-screen-xl mx-auto">
        <h1 className="text-center text-xl mb-6 sm:text-2xl md:text-4xl font-semibold">
          &#8212; Our products &#8212;
        </h1>

        <div className="flex flex-wrap justify-around">
          {products.length === 0
            ? placeholder.map((index) => {
                return (
                  <div key={index} className="h-96 w-72 bg-gray-100 rounded-lg mb-10">
                    {/* Product image skeleton */}
                    <div className="rounded w-11/12 mx-auto mt-3 aspect-square animate-skeleton"></div>
                    {/* Product name skeleton */}
                    <div className="rounded-full mt-5 ml-3 w-56 h-3 animate-skeleton"></div>
                    <div className="rounded-full mt-2 ml-3 w-44 h-3 animate-skeleton"></div>
                    {/* Product price skeleton */}
                    <div className="rounded-full mt-5 ml-3 w-24 h-3 animate-skeleton"></div>
                  </div>
                );
              })
            : products.slice(0, 8).map((product) => {
                return (
                  <a key={product.id} href="#">
                    <div className="group h-96 max-w-72 mb-10 overflow-clip">
                      <div className="overflow-clip rounded">
                        <img
                          src={product.imageUrl}
                          alt={product.productDescription}
                          className="w-full aspect-square object-cover md:group-hover:scale-105 transition duration-300 ease-out"
                        />
                      </div>

                      <h3 className="font-medium text-lg py-2">
                        {product.productName}
                      </h3>
                      <p className="text-gray-500">
                        For R{product.productPrice}
                      </p>
                    </div>
                  </a>
                );
              })}
        </div>
        {products.length > 0 && (
          <div className="flex justify-center">
            <a
              href="#"
              className="rounded-full text-center text-lg px-36 py-2 border border-black md:hover:bg-black md:hover:text-white transition ease-in"
            >
              View all
            </a>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl mt-10"></div>
      </footer>
    </>
  );
}
