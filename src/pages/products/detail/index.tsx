
import Footer from "@/pages/layouts/Footer";
import Header from "@/pages/layouts/Header";
import Image from "next/image";


const App = () => {
  return (
    <>
      <Header />
      <section>
        <div className="bg-[#F9F1E7] p-6">
            <p>Link</p>
        </div>
        {/* Main Container */}
        <div className="flex flex-col items-center gap-6">
          {/* Image part */}
          <div className="flex-1">
            <div className="">
              <Image
                src={'/assets/images/asgaard_sofa.png'}
                width={481}
                height={391}
                alt=""
                quality={100}
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div  className="flex space-x-4">
              <Image
                  src={'/assets/images/group95.png'}
                  width={83}
                  height={55}
                  alt=""
                  quality={100}
                  // onClick={(e) => changeImage(e.target)}
                  className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
                />
                <Image
                  src={'/assets/images/group96.png'}
                  width={83}
                  height={55}
                  alt=""
                  quality={100}
                  // onClick={(e) => changeImage(e.target)}
                  className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
                />
                <Image
                  src={'/assets/group97.png.'}
                  width={83}
                  height={55}
                  alt=""
                  quality={100}
                  // onClick={(e) => changeImage(e.target)}
                  className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
                />
                <Image
                  src={'/assets/images/group98.png'}
                  width={83}
                  height={55}
                  alt=""
                  quality={100}
                  // onClick={(e) => changeImage(e.target)}
                  className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
                />
            </div>
          </div>

          {/* Detail part */}
          <div className="flex-1">
            <h1 className="font-bold text-3xl">Asgaard Sofa</h1>
            <p className="text-[#9F9F9F]">Rs. 1,00,000</p>

            <div className="flex text-yellow-500 items-center">
              <div className="flex">
               <span>★ ★ ★ ★ ★</span>
              </div>
              <p className="text-[#9F9F9F]">5 Customer Reviews</p>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            {/* Size */}
            <div className="">
              <p>Size:</p>
              <div className="flex space-x-2">
                <button className="px-4 py-2 border rounded-lg">S</button>
                <button className="px-4 py-2 border rounded-lg">L</button>
                <button className="px-4 py-2 border rounded-lg">XL</button>
              </div>
            </div>

            {/* Color */}
            <div className="">
              <p>Color:</p>
              <div className="flex space-x-2">
                <button className="w-8 h-8 bg-black rounded-full border"></button>
                <button className="w-8 h-8 bg-blue-500 rounded-full border"></button>
                <button className="w-8 h-8 bg-yellow-500 rounded-full border"></button>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <Footer />
    </>);
}

export default App;