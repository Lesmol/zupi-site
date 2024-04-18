import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="bg-orange p-4">
      <Navbar />
      <section className="container max-w-screen-xl mx-auto flex flex-col-reverse my-14 items-center justify-center lg:flex-row">
        <div className="text-primary z-10 text-center lg:text-left">
          <h1 className="mx-auto mt-3 text-4xl font-semibold max-w-md lg:mt-0">
            A space only you can create.
          </h1>
          <p className="mx-auto max-w-xl lg:max-w-sm lg:mx-0">
            Elevate your home and office with our incredibly high-quality
            furniture at surprisingly affordable prices. Our exceptional service
            goes beyond the sale, ensuring a smile-worthy experience that leaves
            your space looking stylish and feeling functional.
          </p>
        </div>
        <img
          src="http://surl.li/sstbh"
          alt="An image of a couch and a coffee table"
          className="aspect-752/444 w-full max-w-3xl rounded-xl lg:w-2/3 lg:-ml-24"
        />
      </section>
    </main>
  );
}
