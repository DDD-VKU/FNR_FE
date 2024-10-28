import ProductCard from "@/components/ProductCard";
import ShowMore from "@/components/ShowMore";
import Footer from "@/pages/layouts/Footer";
import Header from "@/pages/layouts/Header";
import Image from "next/image";
import React, { useState } from "react";


const App = () => {
  const [activeTab, setActiveTab] = useState("description");
  const products = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    name: `Product ${i + 1}`,
    type: "Sample Type",
    image: `/assets/images/products.png`,
    price: 100 + i * 10,
    discount_percent: 10 + i,
    price_before_discount: 150 + i * 10,
}));
  return (
    <>
      <Header />
      <section>
        <div className="bg-[#F9F1E7] p-6">
          <p>Link</p>
        </div>

        {/* Main Container */}
        <div className="flex flex-col lg:flex-row items-start gap-12 p-6 mt-5">
          {/* Image Part */}
          <div className="flex flex-col items-center lg:w-1/2">
            <div className="flex">
              <div className="lg:w-1/5 hidden md:grid space-x-4 space-y-4 mr-12">
                <Image
                    src={'/assets/images/group95.png'}
                    width={83}
                    height={55}
                    alt=""
                    quality={100}
                    className="w-20 h-20 mx-auto object-cover rounded-lg cursor-pointer border"
                  />
                <Image
                    src={'/assets/images/group96.png'}
                    width={83}
                    height={55}
                    alt=""
                    quality={100}
                    className="w-20 h-20 mx-auto object-cover rounded-lg cursor-pointer border"
                  />
                <Image
                    src={'/assets/images/group97.png'}
                    width={83}
                    height={55}
                    alt=""
                    quality={100}
                    className="w-20 h-20 mx-auto object-cover rounded-lg cursor-pointer border"
                  />
                <Image
                    src={'/assets/images/group98.png'}
                    width={83}
                    height={55}
                    alt=""
                    quality={100}
                    className="w-20 h-20 mx-auto object-cover rounded-lg cursor-pointer border"
                  />
              </div>
              {/* Main Image */}
              <div className="flex-1 flex justify-center items-center lg:w-4/5 h-[500px] rounded-lg  bg-[#F9F1E7]">
                <Image
                  src={'/assets/images/asgaard_sofa.png'}
                  width={481}
                  height={391}
                  unoptimized
                  alt=""
                  quality={100}
                  className="w-full rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
          {/* Mobile Image Part */}
          <div className="lg:w-1/5  md:hidden flex space-x-4 space-y-4 mr-12">
                <Image
                    src={'/assets/images/group95.png'}
                    width={83}
                    height={55}
                    alt=""
                    quality={100}
                    className="w-20 h-20 mx-auto object-cover rounded-lg cursor-pointer border mt-4"
                  />
                <Image
                    src={'/assets/images/group96.png'}
                    width={83}
                    height={55}
                    alt=""
                    quality={100}
                    className="w-20 h-20 mx-auto object-cover rounded-lg cursor-pointer border"
                  />
                <Image
                    src={'/assets/images/group97.png'}
                    width={83}
                    height={55}
                    alt=""
                    quality={100}
                    className="w-20 h-20 mx-auto object-cover rounded-lg cursor-pointer border"
                  />
                <Image
                    src={'/assets/images/group98.png'}
                    width={83}
                    height={55}
                    alt=""
                    quality={100}
                    className="w-20 h-20 mx-auto object-cover rounded-lg cursor-pointer border"
                  />
          </div>
          {/* Detail Part */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="font-bold text-[42px]">Asgaard Sofa</h1>
            <p className="text-[#9F9F9F] text-[24px]">Rs. 1,00,000</p>

            <div className="flex items-center space-x-2">
              <div className="text-yellow-500 text-xl">★ ★ ★ ★ ★</div>
              <p className="text-[#9F9F9F] text-xl">|</p>
              <p className="text-[#9F9F9F] ml-4">5 Customer Reviews</p>
            </div>

            <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>

            {/* Size Selector */}
            <div>
              <p className="mb-1">Size:</p>
              <div className="flex space-x-2">
                <button className="h-10 w-10 border rounded-lg hover:transform hover:scale-110">S</button>
                <button className="h-10 w-10 border rounded-lg hover:transform hover:scale-110">L</button>
                <button className="h-10 w-10 border rounded-lg hover:transform hover:scale-110">XL</button>
              </div>
            </div>

            {/* Color Selector */}
            <div>
              <p>Color:</p>
              <div className="flex space-x-2">
                <button className="w-8 h-8 bg-black rounded-full border"></button>
                <button className="w-8 h-8 bg-blue-500 rounded-full border"></button>
                <button className="w-8 h-8 bg-yellow-500 rounded-full border"></button>
              </div>
            </div>

            {/* Button */}
            <div className="flex space-x-2 pb-[15px] mx-auto">
              <input className=" w-1/5 px-2 py-4 rounded-lg border text-center border-black" type="number" name="" id="" min={1} placeholder="1"  />
              <button className=" px-6 py-4 rounded-lg border border-black">Add To Cart</button>
              <button className=" px-6 py-4 rounded-lg border border-black">+ Comprate</button>
            </div>

            {/* Tags */}
            <div className="flex-col space-y-4 pb-[25px]">
              <hr className="pb-[15px]"/>
              <div className="flex items-center space-x-2">
                <p>SKU</p>
                <p className="">:</p>
                <p className="text-[#9F9F9F]">ASG-001</p>
              </div>
              <div className="flex items-center space-x-2">
                <p>Category</p>
                <p>:</p>
                <p className="text-[#9F9F9F]">Sofas</p>
              </div>
              <div className="flex items-center space-x-2">
                <p>Tags</p>
                <p>:</p>
                <p className="text-[#9F9F9F]">Sofas, Chair</p>
              </div>
              <div className="flex items-center space-x-2">
                <p>Share</p>
                <p>:</p>
                <div className="flex items-center space-x-4">
                    <Image
                      src={'/assets/images/fb.png'}
                      width={6}
                      height={6}
                      alt=""
                      quality={100}
                      unoptimized
                      className="w-5 h-5 text-gray-800"/>
                    <Image
                      src={'/assets/images/ytb.png'}
                      width={16}
                      height={16}
                      unoptimized
                      alt=""
                      className="w-5 h-5 text-gray-800"/>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs list part */}
      <div className="w-full p-6">
          {/* Tabs Header */}
          <ul className="flex justify-center space-x-4  border-t border-gray-300">
            <li>
              <button
                onClick={() => setActiveTab("description")}
                className={`px-4 py-2 hover:font-semibold ${
                  activeTab === "description"
                    ? "underline underline-offset-8"
                    : "bg-white"
                }`}
              >
                Description
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("additional-info")}
                className={`px-4 py-2 hover:font-semibold ${
                  activeTab === "additional-info"
                    ? "underline underline-offset-8"
                    : "bg-white"
                }`}
              >
                Additional Information
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`px-4 py-2 hover:font-semibold ${
                  activeTab === "reviews"
                    ? "underline underline-offset-8"
                    : "bg-white"
                }`}
              >
                Reviews [5]
              </button>
            </li>
          </ul>

          {/* Tabs Content */}
          <div className="p-6 ">
            {activeTab === "description" && (
              <div>
                <h2 className="text-xl font-semibold">Product Description</h2>
                <div className="flex">
                  <p className="text-[#9F9F9F]">
                    Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. 
                    Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
                    stout-hearted hero with a well-balanced audio which boasts
                    a clear midrange and extended highs for a sound that is both articulate and pronounced. 
                    The analogue knobs allow you to fine tune the controls to your personal preferences while 
                    the guitar-influenced leather strap enables easy and stylish travel.
                  </p>
                </div>
                <Image
                      src={'/assets/images/double_sofa.png'}
                      width={1239}
                      height={348}
                      unoptimized
                      alt=""
                      className="mt-5 mx-auto"/>
              </div>
            )}
            {activeTab === "reviews" && (
              <div>
                <h2 className="text-xl font-semibold">Customer Reviews</h2>
                <p>★ ★ ★ ★ ★ - 5 stars</p>
                <p>This product is absolutely amazing! Highly recommended!</p>
              </div>
            )}
            {activeTab === "additional-info" && (
              <div>
                <h2 className="text-xl font-semibold">
                  Additional Information
                </h2>
                <p>Material: 100% genuine leather, Oak wood frame.</p>
                <p>Dimensions: 200cm x 90cm x 85cm</p>
              </div>
            )}
          </div>
        </div>

        {/* Products */}
        <section className="container mx-auto p-4 items-center justify-between">
            <h1 className="text-5xl font-bold mt-4 text-center items-center justify-center">Related Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            type={product.type}
                            image={product.image}
                            price={product.price}
                            discount_percent={product.discount_percent}
                            price_before_discount={product.price_before_discount}
                        />
                    ))}
                </div>
        </section>
      <ShowMore />
      <Footer />
    </>
  );
};

export default App;
