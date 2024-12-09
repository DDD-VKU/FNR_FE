import { useRouter } from "next/router";
import ProductCard from "@/components/ProductCard";
import ShowMore from "@/components/ShowMore";
import Footer from "@/pages/layouts/Footer";
import Header from "@/pages/layouts/Header";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useGetProductsByIdQuery } from "@/redux/api/productApi";
import { IProduct } from "@/utils/types";
// import { ICategories} from "@/utils/types";
const ProductDetail = () => {
  const id = useRouter().query.id;

  const [activeTab, setActiveTab] = useState("description");
  const productResponse = useGetProductsByIdQuery(id);
  const [product, setProduct] = useState<IProduct>();
  const [mainImage, setMainImage] = useState<string>("");

  useEffect(() => {
    setProduct(productResponse.data?.data);
  }, [productResponse.data]);

  useEffect(() => {
    if (productResponse.data?.data) {
      setProduct(productResponse.data?.data);
      setMainImage(productResponse.data?.data.products_images.images[0]); //mainImage = index[0]
    }
  }, [productResponse.data]);

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
          {/* Image Part in PC*/}
          <div className="flex flex-col items-center lg:w-1/2">
            <div className="grid grid-cols-5 gap-4">
              <div className="hidden md:grid col-span-1 space-y-4">
                {/* Thumbnail Images */}
                <Image
                  src={product?.products_images.images[1] || ""}
                  width={83}
                  height={55}
                  alt=""
                  quality={100}
                  unoptimized
                  className="w-full h-auto mx-auto object-cover rounded-lg cursor-pointer border"
                  onClick={() =>
                    setMainImage(product?.products_images.images[1] || "")
                  }
                />
                <Image
                  src={product?.products_images.images[2] || ""}
                  width={83}
                  height={55}
                  alt=""
                  quality={100}
                  unoptimized
                  className="w-full h-auto mx-auto object-cover rounded-lg cursor-pointer border"
                  onClick={() =>
                    setMainImage(product?.products_images.images[2] || "")
                  }
                />
                <Image
                  src={product?.products_images.images[3] || ""}
                  width={83}
                  height={55}
                  alt=""
                  quality={100}
                  unoptimized
                  className="w-full h-auto mx-auto object-cover rounded-lg cursor-pointer border"
                  onClick={() =>
                    setMainImage(product?.products_images.images[3] || "")
                  }
                />
                <Image
                  src={product?.products_images.images[0] || ""}
                  width={83}
                  height={55}
                  alt=""
                  quality={100}
                  unoptimized
                  className="w-full h-auto mx-auto object-cover rounded-lg cursor-pointer border"
                  onClick={() =>
                    setMainImage(product?.products_images.images[0] || "")
                  }
                />
              </div>
              {/* Main Image */}
              <div className="col-span-4 fle hidden md:flex justify-center items-center rounded-lg  bg-[#F9F1E7]">
                <Image
                  src={mainImage}
                  width={481}
                  height={391}
                  unoptimized
                  alt="mainImage"
                  quality={100}
                  className="w-full h-full mx-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
          {/* Mobile Part */}
          <div className="lg:hidden w-full">
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-5 gap-4">
                {/* Main Image */}
                <div className="col-span-5 fle md:flex justify-center items-center rounded-lg  bg-[#F9F1E7]">
                  <Image
                    src={mainImage}
                    width={481}
                    height={391}
                    unoptimized
                    alt="mainImage"
                    quality={100}
                    className="w-full h-full mx-auto rounded-lg object-cover"
                  />
                </div>
                {/* Thumbnail Images */}
                <div className="flex space-x-9">
                  <Image
                    src={product?.products_images.images[1] ?? ""}
                    width={83}
                    height={55}
                    alt=""
                    quality={100}
                    unoptimized
                    className="w-full h-auto mx-auto object-cover rounded-lg cursor-pointer border"
                    onClick={() =>
                      setMainImage(product?.products_images.images[1] ?? "")
                    }
                  />
                  <Image
                    src={product?.products_images.images[2] ?? ""}
                    width={83}
                    height={55}
                    alt=""
                    quality={100}
                    unoptimized
                    className="w-full h-auto mx-auto object-cover rounded-lg cursor-pointer border"
                    onClick={() =>
                      setMainImage(product?.products_images.images[2] ?? "")
                    }
                  />
                  <Image
                    src={product?.products_images.images[3] || ""}
                    width={83}
                    height={55}
                    alt=""
                    quality={100}
                    unoptimized
                    className="w-full h-auto mx-auto object-cover rounded-lg cursor-pointer border"
                    onClick={() =>
                      setMainImage(product?.products_images.images[3] ?? "")
                    }
                  />
                  <Image
                    src={product?.products_images.images[0] || ""}
                    width={83}
                    height={55}
                    alt=""
                    quality={100}
                    unoptimized
                    className="w-full h-auto mx-auto object-cover rounded-lg cursor-pointer border"
                    onClick={() =>
                      setMainImage(product?.products_images.images[0] ?? "")
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Detail Part */}
          <div className="lg:w-1/2 space-y-6">
            <h1
              className="font-bold text-[42px] lg:text-left text-center
            "
            >
              {product?.name}
            </h1>
            <p className="text-[#9F9F9F] text-[24px]">{product?.price}</p>

            <div className="flex items-center space-x-2">
              <div className="text-yellow-500 text-xl">★ ★ ★ ★ ★</div>
              <p className="text-[#9F9F9F] text-xl">|</p>
              <p className="text-[#9F9F9F] ml-4">5 Customer Reviews</p>
            </div>

            <p>{product?.description}</p>

            {/* Size Selector */}
            <div>
              <p className="mb-1">Size:</p>
              <div className="flex space-x-2">
                <button className="h-10 w-10 border rounded-lg hover:transform hover:scale-110">
                  S
                </button>
                <button className="h-10 w-10 border rounded-lg hover:transform hover:scale-110">
                  L
                </button>
                <button className="h-10 w-10 border rounded-lg hover:transform hover:scale-110">
                  XL
                </button>
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
              <input
                className=" w-1/5 px-2 py-4 rounded-lg border text-center border-black"
                type="number"
                name=""
                id=""
                min={1}
                placeholder="1"
              />
              <button className=" px-6 py-4 rounded-lg border border-black">
                Add To Cart
              </button>
              <button className=" px-6 py-4 rounded-lg border border-black">
                + Comprate
              </button>
            </div>

            {/* Tags */}
            <div className="flex-col space-y-4 pb-[25px]">
              <hr className="pb-[15px]" />
              <div className="flex items-center space-x-2">
                <p>SKU</p>
                <p className="">:</p>
                <p className="text-[#9F9F9F]">{product?.SKU}</p>
              </div>
              <div className="flex items-center space-x-2">
                <p>Category</p>
                <p>:</p>
                <p className="text-[#9F9F9F]">{product?.categories?.name}</p>
              </div>
              <div className="flex items-center space-x-2">
                <p>Tags</p>
                <p>:</p>
                <p className="text-[#9F9F9F]">{product?.tags}</p>
              </div>
              <div className="flex items-center space-x-2">
                <p>Share</p>
                <p>:</p>
                <div className="flex items-center space-x-4">
                  <Image
                    src={"/assets/images/fb.png"}
                    width={6}
                    height={6}
                    alt=""
                    quality={100}
                    unoptimized
                    className="w-5 h-5 text-gray-800"
                  />
                  <Image
                    src={"/assets/images/ytb.png"}
                    width={16}
                    height={16}
                    unoptimized
                    alt=""
                    className="w-5 h-5 text-gray-800"
                  />
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
                  {product?.products_details?.long_description}
                </p>
              </div>
              <Image
                src={product?.products_images.images[1] || ""}
                width={481}
                height={391}
                quality={100}
                unoptimized
                alt=""
                className="mt-5 mx-auto rounded-lg object-cover"
              />
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
              <h2 className="text-xl font-semibold">Additional Information</h2>
              <p>Material: 100% genuine leather, Oak wood frame.</p>
              <p>Dimensions: 200cm x 90cm x 85cm</p>
            </div>
          )}
        </div>
      </div>

      {/* Products */}
      <section className="container mx-auto p-4 items-center justify-between">
        <h1 className="text-5xl font-bold mt-4 text-center items-center justify-center">
          Related Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {products.map((product) => (
            <ProductCard
              id={product.id}
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

export default ProductDetail;
