import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ShoppingCart from "@/components/ShoppingCart";
import { useRouter } from "next/router";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  // Hàm đóng navbar khi nhấn vào overlay
  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };
  const route = useRouter();
  return (
    <>
      <header className="header py-3">
        <div className="mx-[24px] p-4 flex items-center justify-between">
          <div
            className="logo flex items-center space-x-2 cursor-pointer"
            onClick={() => {
              route.push("/");
            }}
          >
            <Image
              src={"/assets/images/logo.png"}
              width={46}
              height={40}
              unoptimized
              alt="logo"
              className="h-4"
            />
            <span className="title font-bold text-[28px]">Furniro</span>
          </div>

          {/* Navbar PC */}
          <nav className="nav hidden md:flex space-x-6">
            <Link
              className="text-base font-semibold hover:text-yellow-500 duration-300"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-base font-semibold hover:text-yellow-500 duration-300"
              href="/products"
            >
              Shop
            </Link>
            <Link
              className="text-base font-semibold hover:text-yellow-500 duration-300"
              href="/blog"
            >
              Blog
            </Link>
            <Link
              className="text-base font-semibold hover:text-yellow-500 duration-300"
              href="/about"
            >
              About
            </Link>
            <Link
              className="text-base font-semibold hover:text-yellow-500 duration-300"
              href="/contact"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden sm:flex space-x-4">
            <Link href="/account">
              <Image
                src={"/assets/icons/mdi_account-alert-outline.svg"}
                width={28}
                height={28}
                unoptimized
                alt="account"
              />
            </Link>
            <Link href="">
              <Image
                src={"/assets/icons/akar-icons_search.svg"}
                width={28}
                height={28}
                unoptimized
                alt="search"
              />
            </Link>
            <Link href="/wishlist">
              <Image
                src={"/assets/icons/akar-icons_heart.svg"}
                width={28}
                height={28}
                unoptimized
                alt="wishlist"
              />
            </Link>
            <ShoppingCart />
          </div>

          {/* Navbar Mobile Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileNav} className="text-2xl mt-3">
              <Image
                src={"/assets/images/menu.png"}
                width={28}
                height={28}
                unoptimized
                alt="menu"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay và Navbar Mobile */}
      {isMobileNavOpen && (
        <>
          {/* Overlay */}
          <div
            onClick={closeMobileNav}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          ></div>

          {/* Navbar Mobile */}
          <nav className="fixed top-0 right-0 w-3/4 h-full bg-white bg-opacity-60 shadow-lg z-50">
            <button
              onClick={toggleMobileNav}
              className="text-2xl mb-5 float-right text-white p-4"
            >
              ✕
            </button>
            <div className="text-2xl font-bold bg-yellow-500 text-white w-full p-4">
              Furino
            </div>
            <div className="flex flex-col space-y-3 p-4 text-white">
              <Link
                className="text-base font-semibold hover:text-yellow-500 duration-300"
                href="/"
              >
                Home
              </Link>
              <hr />
              <Link
                className="text-base font-semibold hover:text-yellow-500 duration-300"
                href="/products"
              >
                Shop
              </Link>
              <hr />
              <Link
                className="text-base font-semibold hover:text-yellow-500 duration-300"
                href="/blog"
              >
                Blog
              </Link>
              <hr />
              <Link
                className="text-base font-semibold hover:text-yellow-500 duration-300"
                href="/about"
              >
                About
              </Link>
              <hr />
              <Link
                className="text-base font-semibold hover:text-yellow-500 duration-300"
                href="/contact"
              >
                Contact
              </Link>
              <hr className="bg-slate-400" />
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Header;
