import Footer from "@/pages/layouts/Footer";
import Header from "@/pages/layouts/Header";
import Image from "next/image";
import React from "react";
import Button from "@/components/Button";

const ComparePage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="w-[90%] h-3/4 p-4 mx-auto my-auto flex flex-col">
        <div className="flex justify-between items-start mb-8 w-full">
          {/* Left Section - 25% */}
          <div className="w-1/4 px-2">
            <h2 className="text-lg font-semibold">
              Go to Product page for more Products
            </h2>
            <button className="text-yellow-600 mt-2 underline">
              View More
            </button>
          </div>

          {/* Product 1 - 25% */}
          <div className="w-1/4 px-2">
            <div className="bg-[#FAF6F3] p-4 rounded-lg shadow-sm flex flex-col items-center">
              <Image
                src="/assets/images/Group_157.png" // Replace with actual image path
                alt=""
                width={300}
                height={200}
                className="rounded-lg"
              />

              <h3 className="text-lg font-semibold mt-2">Asgaard Sofa</h3>
              <p className="text-gray-600">Rs. 250,000.00</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500 text-lg">★ 4.7</span>
                <p className="text-gray-500 ml-2">| 204 Reviews</p>
              </div>
            </div>
          </div>

          {/* Product 2 - 25% */}
          <div className="w-1/4 px-2">
            <div className="bg-[#FAF6F3] p-4 rounded-lg shadow-sm flex flex-col items-center">
              <Image
                src="/assets/images/Group_157.png" // Replace with actual image path
                alt=""
                width={300}
                height={200}
                className="rounded-lg"
              />

              <h3 className="text-lg font-semibold mt-2">Outdoor Sofa Set</h3>
              <p className="text-gray-600">Rs. 224,000.00</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500 text-lg">★ 4.2</span>
                <p className="text-gray-500 ml-2">| 145 Reviews</p>
              </div>
            </div>
          </div>

          {/* Add Product Section - 25% */}
          <div className="w-1/4 px-2">
            <h2 className="text-lg font-semibold mb-2">Add A Product</h2>
            <button className="bg-[#B88E2F] text-white px-4 py-2 rounded-md hover:bg-yellow-700">
              Choose a Product
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4  flex-grow">
          <table className=" table-auto text-left w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 w-1/4">General</th>
                <th className="p-2 w-1/4 ">Asgaard Sofa</th>
                <th className="p-2 w-1/4">Outdoor Sofa Set</th>
                <th className="p-2 w-1/4"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Sales Package</td>
                <td className="p-2 max-w-xs break-words">
                  1 sectional sofa with cushions and extra padding1 sectional
                  sofa with cushions and extra padding1 sectional sofa with
                  cushions and extra padding1 sectional sofa with cushions and
                  extra padding1 sectional sofa with cushions and extra padding
                </td>
                <td className="p-2 max-w-xs break-words">
                  1 sectional sofa with cushions and extra padding1 sectional
                  sofa with cushions and extra padding1 sectional sofa with
                  cushions and extra padding1 sectional sofa with cushions and
                  extra padding
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2">Model Number</td>
                <td className="p-2 max-w-xs break-words">
                  1 sectional sofa with cushions and extra padding1 sectional
                  sofa with cushions and extra padding1 sectional sofa with
                  cushions and extra padding
                </td>
                <td className="p-2 max-w-xs break-words">
                  1 sectional sofa with cushions and extra padding1 sectional
                  sofa with cushions and extra padding
                </td>
              </tr>
              <tr>
                <td className="p-2">Secondary Material</td>
                <td className="p-2 max-w-xs break-words">
                  1 sectional sofa with cushions and extra padding1 sectional
                  sofa with cushions and extra padding
                </td>
                <td className="p-2 max-w-xs break-words">
                  1 sectional sofa with cushions and extra padding1 sectional
                  sofa with cushions and extra padding
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2">Upholstery Material</td>
                <td className="p-2 max-w-xs break-words">
                  1 sectional sofa with cushions and extra padding1 sectional
                  sofa with cushions and extra padding
                </td>
                <td className="p-2 max-w-xs break-words">
                  1 sectional sofa with cushions and extra padding1 sectional
                  sofa with cushions and extra padding
                </td>
              </tr>
            </tbody>

            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">Product</th>
                <th className="p-2"></th>
                <th className="p-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Filling Material</td>
                <td className="p-2 max-w-xs break-words">
                  1 sectional sofa with cushions and extra padding1 sectional
                  sofa with cushions and extra padding
                </td>
                <td className="p-2 max-w-xs break-words">
                  1 sectional sofa with cushions and extra padding1 sectional
                  sofa with cushions and extra padding
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2">Adjustable Headrest</td>
                <td className="p-2 max-w-xs break-words">
                  1 sectional sofa with cushions and extra padding1 sectional
                  sofa with cushions and extra padding
                </td>
                <td className="p-2 max-w-xs break-words">
                  1 sectional sofa with cushions and extra padding1 sectional
                  sofa with cushions and extra padding
                </td>
              </tr>
            </tbody>

            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">Dimensions</th>
                <th className="p-2"></th>
                <th className="p-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Width</td>
                <td className="p-2 max-w-xs break-words">
                  1 sectional sofa with cushions and extra padding1 sectional
                  sofa with cushions and extra padding
                </td>
                <td className="p-2 max-w-xs break-words">
                  21 sectional sofa with cushions and extra padding1 sectional
                  sofa with cushions and extra padding
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2">Height</td>
                <td className="p-2 max-w-xs break-words">
                  1 sectional sofa with cushions and extra padding1 sectional
                  sofa with cushions and extra padding
                </td>
                <td className="p-2 max-w-xs break-words">
                  1 sectional sofa with cushions and extra padding1 sectional
                  sofa with cushions and extra padding
                </td>
              </tr>
            </tbody>

            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">Warranty</th>
                <th className="p-2"></th>
                <th className="p-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Warranty Summary</td>
                <td className="p-2 max-w-xs break-words">
                  1 sectional sofa with cushions and extra padding1 sectional
                  sofa with cushions and extra padding
                </td>
                <td className="p-2 max-w-xs break-words">
                  1 sectional sofa with cushions and extra padding1 sectional
                  sofa with cushions and extra padding
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2">Covered in Warranty</td>
                <td className="p-2 max-w-xs break-words">
                  1 sectional sofa with cushions and extra padding1 sectional
                  sofa with cushions and extra padding
                </td>
                <td className="p-2 max-w-xs break-words">
                  1 sectional sofa with cushions and extra padding1 sectional
                  sofa with cushions and extra padding
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2"></td>
                <td className="p-2 max-w-xs break-words">
                  <div className="flex justify-center items-center p-4">
                    <Button
                      text="Add To Cart"
                      onClick={() => alert("Added to cart")}
                    />
                  </div>
                </td>
                <td className="p-2 max-w-xs break-words">
                  <div className="flex justify-center items-center p-4">
                    <Button
                      text="Add To Cart"
                      onClick={() => alert("Added to cart")}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ComparePage;
