import Navbar from "./components/navbar";
import bedroom from "@/../public/images/bedroom.webp"
import chair from "@/../public/images/chair.jpg"
import coffee_table from "@/../public/images/coffee_table.jpg"
import dining from "@/../public/images/dining.webp"
import kitchen from "@/../public/images/kitchen.webp"
import outdoor from "@/../public/images/outdoor.jpg"
import sofas from "@/../public/images/sofas.jpg"

export default function Home() {
  return (
    <main>
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
          <img
            src="http://surl.li/sstbh"
            alt="An image of a couch and a coffee table"
            className="aspect-752/444 w-full max-w-3xl rounded-xl lg:w-2/3 lg:-ml-24"
          />
        </div>
      </section>

      <section className="container p-4 max-screen-xl mx-auto justify-center items-center">
        <h1 className="text-center text-xl mt-10 sm:text-2xl md:text-4xl font-semibold">
          &#8212; Explore our range of products &#8212;
        </h1>
      </section>
    </main>
  );
}
