
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Image from "next/image";
import ShowMore from "@/components/ShowMore";
import BlogCard from "./components/BlogCard";
import HeadImage from "@/components/HeadImage";
import FeatureCard from "@/components/FeatureCard";


const Blogs = () => {
  const blogs = Array.from({ length: 3 }, (_, i) => ({
    id: i,
    title: `Product ${i + 1}`,
    tag: "Sample Type",
    image: `/assets/images/blog1.png`,
    days: "Feb 4, 2022",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}));
  return (
    <>
      <Header />
      <HeadImage/>
      {/* Main Container */}
      <section className="container flex p-4 mx-auto">
        <div className="grid grid-cols-1 gap-6 mt-8 space-y-10 mx-auto">
          {blogs.map((blog) => (
              <BlogCard
                  key={blog.id}
                  title={blog.title}
                  tag={blog.tag}
                  image={blog.image}
                  days={blog.days}
                  content={blog.content}
              />
          ))}
          <ShowMore />
        </div>
        {/* Right Part */}
        <div className="mt-8 hidden sm:grid grid-cols-1 sticky top-0 h-max ">

          {/* Search Bar */}
          <div className="">
            <input className="w-[311px] h-[48px] border border-gray-300 rounded-lg pl-4" type="text" name="" id="" placeholder="Search"/>
            <div className="">
              <ul className="space-y-8 mt-8 m-8">
                <li ><h2 className="font-bold mt-3 text-[24px]">Categories</h2></li>
                <li className="flex justify-between font-bold text-[#9F9F9F]">
                  <span>Crafts</span>
                  <span className="">2</span>
                </li>
                <li className="flex justify-between font-bold text-[#9F9F9F]">
                  <span>Design</span>
                  <span className="">3</span>
                </li>
                <li className="flex justify-between font-bold text-[#9F9F9F]">
                  <span>HandMade</span>
                  <span className="">7</span>
                </li>
                <li className="flex justify-between font-bold text-[#9F9F9F]">
                  <span>Enterior</span>
                  <span className="">1</span>
                </li>
                <li className="flex justify-between font-bold text-[#9F9F9F]">
                  <span>Wood</span>
                  <span className="">5</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="m-6 space-y-8">
            <h2 className="font-bold mt-3 text-[24px]">Recent Posts</h2>
            {/* Card List*/}
            <div className="flex mt-4 space-x-3 ">
              <div>
                <Image
                    src={'/assets/images/post1.png'}
                    width={80}
                    height={80}
                    unoptimized
                    alt="logo"
                    className=""
                  />
              </div>
              <div>
                <h1 className="font-bold text-sm w-[119px]">Going all-in with millennial design</h1>
                <p className="text-[#9F9F9F] text-sm">Feb 4, 2022</p>
              </div>
            </div>
            <div className="flex mt-4 space-x-3">
              <div>
                <Image
                    src={'/assets/images/post2.png'}
                    width={80}
                    height={80}
                    unoptimized
                    alt="logo"
                    className=""
                  />
              </div>
              <div>
                <h1 className="font-bold text-sm w-[139px]">Exploring new ways of decorating</h1>
                <p className="text-[#9F9F9F] text-sm">Feb 4, 2022</p>
              </div>
            </div>
            <div className="flex mt-4 space-x-3">
                <div>
                <Image
                    src={'/assets/images/post3.png'}
                    width={80}
                    height={80}
                    unoptimized
                    alt="logo"
                    className=""
                  />
                </div>
                <div>
                  <h1 className="font-bold text-sm w-[119px]">Colorful office redesign</h1>
                  <p className="text-[#9F9F9F] text-sm">Feb 4, 2022</p>
                </div>
            </div>
            <div className="flex mt-4 space-x-3">
              <div>
               <Image
                  src={'/assets/images/post4.png'}
                  width={80}
                  height={80}
                  unoptimized
                  alt="logo"
                  className=""
                />
              </div>
              <div>
                <h1 className="font-bold text-sm w-[119px]">Handmade pieces that took time to make</h1>
                <p className="text-[#9F9F9F] text-sm">Feb 4, 2022</p>
              </div>
            </div>
            <div className="flex mt-4 space-x-3">
              <div>
               <Image
                  src={'/assets/images/post5.png'}
                  width={80}
                  height={80}
                  unoptimized
                  alt="logo"
                  className=""
                />
              </div>
              <div>
                <h1 className="font-bold text-sm w-[119px]">Modern home in Milan</h1>
                <p className="text-[#9F9F9F] text-sm">Feb 4, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FeatureCard />
      <Footer />
    </>);
}

export default Blogs;