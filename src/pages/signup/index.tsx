import Footer from "@/pages/layouts/Footer";
import Header from "@/pages/layouts/Header";
import Button from '@mui/material/Button';
import Image from "next/image";

const SignupPage = () => {
    return (
        <>
            <Header />
            <section>
                <div className="p-8">
                    <div className="min-h-screen flex items-center justify-center ">
                        <div className="bg-white rounded-lg flex space-x-10">
                            {/* Left Section with Image */}
                            <div className="hidden md:flex items-center justify-center w-full">
                                <div className="">
                                    {/* Replace with your image */}
                                    <Image
                                        src={'/assets/images/sideimage.png'}
                                        width={805}
                                        height={781}
                                        unoptimized
                                        alt="Facebook"
                                        className="w-full h-full rounded-lg object-contain"/>
                                </div>
                            </div>
                            
                            {/* Right Section with Form */}
                            <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                                <h2 className="text-2xl font-semibold mb-6">Create an account </h2>
                                <p className="text-gray-600 mb-4">Enter your details below</p>
                                <form className="space-y-4">
                                     <div>
                                        <label htmlFor="namne" className="text-sm font-medium text-gray-700">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Phone</label>
                                        <input
                                            type="text"
                                            id="email"
                                            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                        <input
                                            type="text"
                                            id="email"
                                            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-red-500 text-white py-2 rounded-md mt-4 hover:bg-red-600 transition"
                                        >
                                        Create
                                    </button>
                                    <button
                                        type="submit"
                                        className="w-full bg-white text-black py-2 border border-gray-300 rounded-md mt-4 hover:bg-red-600 transition"
                                        >
                                        Sign up with Google
                                    </button>
                                </form>
                                <div className="mt-4 text-center">
                                    <p>Already have an account ? <a href="#" className="text-sm text-red-500 hover:underline">Login</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default SignupPage;