import { useRouter } from "next/router";
import ProductCard from "@/components/ProductCard";
import ShowMore from "@/components/ShowMore";
import Footer from "@/pages/layouts/Footer";
import Header from "@/pages/layouts/Header";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useGetProductsByIdQuery } from "@/redux/api/productAPI";
import { IProduct } from "@/utils/types";
import RelatedProduct from "@/components/RelatedProduct";
// import { ICategories} from "@/utils/types";
const ProductDetail = () => {
  const id = useRouter().query.id;
  const [activeTab, setActiveTab] = useState("description");
  const [product, setProduct] = useState<IProduct>();
  const { data: productData, isLoading, error } = useGetProductsByIdQuery(id);
  const [categoryId, setCategoryId] = useState<string>("");
  const [mainImage, setMainImage] = useState<string>("");

  useEffect(() => {
    if (productData?.data) {
      const currentProduct = productData.data;

      setProduct(currentProduct);
      setMainImage(currentProduct.products_images.images[0]);
      setCategoryId(currentProduct.categories.id); // Cập nhật categoryId ngay lập tức
    }
  }, [productData]);

  useEffect(() => {
    console.log("Product:", product);
    console.log("Category ID:", categoryId);
  }, [product, categoryId]);
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
                  src={product?.products_images.images[1]}
                  width={83}
                  height={55}
                  alt=""
                  quality={100}
                  unoptimized
                  className="w-full h-auto mx-auto object-cover rounded-lg cursor-pointer border"
                  onClick={() =>
                    setMainImage(product?.products_images.images[1])
                  }
                />
                <Image
                  src={product?.products_images.images[2]}
                  width={83}
                  height={55}
                  alt=""
                  quality={100}
                  unoptimized
                  className="w-full h-auto mx-auto object-cover rounded-lg cursor-pointer border"
                  onClick={() =>
                    setMainImage(product?.products_images.images[2])
                  }
                />
                <Image
                  src={product?.products_images.images[3]}
                  width={83}
                  height={55}
                  alt=""
                  quality={100}
                  unoptimized
                  className="w-full h-auto mx-auto object-cover rounded-lg cursor-pointer border"
                  onClick={() =>
                    setMainImage(product?.products_images.images[3])
                  }
                />
                <Image
                  src={product?.products_images.images[4]}
                  width={83}
                  height={55}
                  alt=""
                  quality={100}
                  unoptimized
                  className="w-full h-auto mx-auto object-cover rounded-lg cursor-pointer border"
                  onClick={() =>
                    setMainImage(product?.products_images.images[4])
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
                    src={product?.products_images.images[1]}
                    width={83}
                    height={55}
                    alt=""
                    quality={100}
                    unoptimized
                    className="w-full h-auto mx-auto object-cover rounded-lg cursor-pointer border"
                    onClick={() =>
                      setMainImage(product?.products_images.images[1])
                    }
                  />
                  <Image
                    src={product?.products_images.images[2]}
                    width={83}
                    height={55}
                    alt=""
                    quality={100}
                    unoptimized
                    className="w-full h-auto mx-auto object-cover rounded-lg cursor-pointer border"
                    onClick={() =>
                      setMainImage(product?.products_images.images[2])
                    }
                  />
                  <Image
                    src={product?.products_images.images[3]}
                    width={83}
                    height={55}
                    alt=""
                    quality={100}
                    unoptimized
                    className="w-full h-auto mx-auto object-cover rounded-lg cursor-pointer border"
                    onClick={() =>
                      setMainImage(product?.products_images.images[3])
                    }
                  />
                  <Image
                    src={product?.products_images.images[4]}
                    width={83}
                    height={55}
                    alt=""
                    quality={100}
                    unoptimized
                    className="w-full h-auto mx-auto object-cover rounded-lg cursor-pointer border"
                    onClick={() =>
                      setMainImage(product?.products_images.images[4])
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
            <p className="text-[#9F9F9F] text-[24px]">
              {product?.price?.price}
            </p>
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
                <p className="text-[#9F9F9F]">{product?.categories.name}</p>
              </div>
              <div className="flex items-center space-x-2">
                <p>Tags</p>
                <p>:</p>
                <p className="text-[#9F9F9F]">
                  {product?.tags.map((value) => value + " ")}
                </p>
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
                src={product?.products_images.images[1]}
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
              <p>Dimensions:</p>
              <p>
                Height:&nbsp;
                <strong>
                  {product?.products_details?.dimensions.height ?? " Null "}
                  cm
                </strong>
              </p>
              <p>
                width:&nbsp;
                <strong>
                  {product?.products_details?.dimensions.width ?? " Null "}
                  cm
                </strong>
              </p>
              <p>
                weight:&nbsp;
                <strong>
                  {product?.products_details?.dimensions.weight ?? " Null "}
                  cm
                </strong>
              </p>
              <p>
                Depth:&nbsp;
                <strong>
                  {product?.products_details?.dimensions.depth ?? " Null "}
                  cm
                </strong>
              </p>
              <p>
                Seat height:&nbsp;
                <strong>
                  {product?.products_details?.dimensions.seat_height ??
                    " Null "}
                  cm
                </strong>
              </p>
              <p>
                Leg height:&nbsp;
                <strong>
                  {product?.products_details?.dimensions.leg_height ?? " Null "}
                  cm
                </strong>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Products with same category */}
      <RelatedProduct categoryId={categoryId} productId={product?.id} />
      <ShowMore />
      <Footer />
    </>
  );
};

export default ProductDetail;
