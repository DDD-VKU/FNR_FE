import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
const HomePage = () => {
  const products = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    name: `Product ${i + 1}`,
    type: "Sample Type",
    image: `/assets/images/products.png`,
    price: 100 + i * 10,
    discount_percent: 10 + i,
    price_before_discount: 150 + i * 10,
  }));
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const listImageSlider = [
    "/assets/images/Rectangle_45.png",
    "/assets/images/Rectangle_40.png",
    "/assets/images/Rectangle_24.png",
  ];
  return (
    <>
      {/* slideshow */}
      <section>
        <div className="relative">
          <Image
            src={"/assets/images/MaskGroup.png"}
            alt="Slideshow"
            height={716}
            width={1440}
            className="w-full"
          />
          <div className="absolute bottom-14 right-14 bg-[#FFF3E3] bg-opacity-80 p-10 mr-4 hidden md:block">
            <h6 className="font-semibold">New Arrivals</h6>
            <h4 className="text-[52px] font-bold text-[#B88E2F]">
              Discover Our <br /> New Collection
            </h4>
            <h2 className="text-[18px] font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing eligendi!
            </h2>
            <button className="bg-[#B88E2F] text-[16px] text-white px-12 py-4 mt-4 font-bold hover:bg-yellow-900 ">
              BUY NOW
            </button>
          </div>
        </div>
      </section>
      {/* browse the range */}
      <section className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Browse The Range</h2>
        <p className="text-gray-500 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex justify-center space-x-6">
          <div className="max-w-xs">
            {/* <img src="" alt="Dining" className="rounded-lg w-full mb-4"> */}
            <Image
              src={"/assets/images/dining.png"}
              width={380}
              height={480}
              alt=""
            />
            <h3 className="text-lg font-semibold">Dining</h3>
          </div>

          <div className="max-w-xs">
            <Image
              src={"/assets/images/living-room.png"}
              width={380}
              height={480}
              alt=""
            />
            <h3 className="text-lg font-semibold">Living</h3>
          </div>

          <div className="max-w-xs">
            {/* <img src="" alt="Bedroom" className="rounded-lg w-full mb-4"> */}
            <Image
              src={"/assets/images/bed-room.png"}
              width={380}
              height={480}
              alt=""
            />
            <h3 className="text-lg font-semibold">Bedroom</h3>
          </div>
        </div>
      </section>
      {/* our products */}
      <section className="container mx-auto p-4 items-center justify-between">
        <h1 className="text-5xl font-bold mt-4 text-center items-center justify-center">
          Our Products
        </h1>
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
      {/* Room stay */}
      <section className="flex justify-center items-center bg-[#FCF8F3]">
        <div className="mx-auto flex flex-col md:flex-row py-9">
          {/* Left columns: text */}
          <div className="float-left w-full md:w-1/2">
            <h1 className="text-4xl font-bold">
              50+ Beautiful rooms <br /> insporation
            </h1>
            <p className="text-gray-500 mt-4">
              Our design alredy made a lot of beautiful <br /> prototipe of room
              that inspire you
            </p>
            <button className="bg-yellow-400 text-white px-8 py-3 mt-4 font-bold hover:bg-yellow-600 ">
              Explore More
            </button>
          </div>
          {/* Right columns: image */}
          <div className="w-full md:w-1/2 flex items-center justify-center relative overflow-hidden">
            {/* Main Images */}
            <div className="flex-shrink-0">
              <Image
                src={"/assets/images/Rectangle 24.png"}
                width={432}
                height={582}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay */}
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 p-6">
              <h4 className="text-2xl font-bold text-[#898989]">01-Bedroom</h4>
              <h2 className="text-3xl font-bold">Inner Peace</h2>
            </div>
            {/* Overlay Arrows */}
            <div className="absolute right-1/4 bottom-4  ">
              <button className="bg-yellow-400 p-2">
                <Image
                  src={"/assets/icons/right_16px.svg"}
                  width={24}
                  height={24}
                  alt=""
                  className="w-6 h-6 text-gray-800"
                />
              </button>
            </div>
          </div>

          <Slider className="" {...settings}>
            {listImageSlider.map((image, index) => (
              <div key={index}>
                <Image src={image} width={24} height={24} alt="" />
              </div>
            ))}
          </Slider>

        </div>
      </section>
      {/* Stay Furniture */}
      <section className="bg-gray-50 p-8">
        <div className="text-center mb-8">
          <h1 className="text-[20px] font-bold text-gray-400">
            Share your setup with
          </h1>
          <h2 className="text-4xl text-gray-800 font-bold mt-2">
            #FuniroFurniture
          </h2>
        </div>
        <Image
          src={"/assets/images/stay.png"}
          alt=""
          width={1000}
          height={16}
          className="mx-auto"
        />
      </section>
    </>
  );
};

export default HomePage;
