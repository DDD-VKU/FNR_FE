import Image from "next/image";
const Footer = () => {
    return (
        <>
            <footer className="lg:text-start ">
                {/* Head */}
                <section className="flex p-4 justify-between bg-[#F5F5F5]">
                    {/* Left head */}
                    <div className="flex items-center space-x-4">
                        <span className="lg:ml-[100px] font-semibold sm:mx-auto">
                            Get connected with us on social networks:
                        </span>
                        <Image
                            src={'/assets/images/fb.png'}
                            width={16}
                            height={16}
                            unoptimized
                            alt="Facebook"
                            quality={100}
                            className="w-7 h-7 text-gray-800"/>
                        <Image
                            src={'/assets/images/github.png'}
                            width={16}
                            height={16}
                            unoptimized
                            alt="Github"
                            className="w-6 h-6 text-gray-800"/>
                        <Image
                            src={'/assets/images/twiter.png'}
                            width={16}
                            height={16}
                            unoptimized
                            alt="Twiter"
                            className="w-6 h-6 text-gray-800"/>
                        <Image
                            src={'/assets/images/ytb.png'}
                            width={16}
                            height={16}
                            unoptimized
                            alt="Youtube"
                            className="w-6 h-6 text-gray-800"/>
                        <Image
                            src={'/assets/images/whatapp.png'}
                            width={16}
                            height={16}
                            unoptimized
                            alt=""
                            className="w-6 h-6 text-gray-800"/>
                    </div>
              
                </section>

                {/* Body */}
                <section>
                    <div className="container mx-auto text-center mt-5 md:text-start">
                        {/* Grid body row */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-9 mt-3">
                            {/* Grid column 1 */}
                            <div className="container mx-auto mb-4">
                                <h2 className="text-[24px] font-bold">Furino.</h2>
                                <p className="text-[#9F9F9F]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>


                            {/* Grid column 2 */}
                            <div className="mx-auto mb-4">
                                <h2 className="text-[20px] text-[#9F9F9F] mb-3">Useful Links</h2>
                                <ul className="list-none space-y-2 font-semibold">
                                    <li><a href="" className="hover:underline">Home</a></li>
                                    <li><a href="" className="hover:underline">Shop</a></li>
                                    <li><a href="" className="hover:underline">About</a></li>
                                    <li><a href="" className="hover:underline">Contact</a></li>
                                </ul>
                            </div>

                            {/* Grid column 3 */}
                            <div className="mx-auto mb-4">
                                <h2 className="text-[20px] text-[#9F9F9F] mb-3">Helps</h2>
                                <ul className="list-none space-y-2">
                                    <li><a href="#" className="font-semibold hover:underline">Payment Options</a></li>
                                    <li><a href="#" className="font-semibold hover:underline">Shipping</a></li>
                                    <li><a href="#" className="font-semibold hover:underline">Cancellation & Returns</a></li>
                                    <li><a href="#" className="font-semibold hover:underline">FAQ</a></li>
                                </ul>
                            </div>
                            
                            {/* Grid column 4 */}
                            <div className="mx-auto mb-4">
                                <h2 className="text-[20px] text-[#9F9F9F] mb-3">Contact</h2>
                                <div className="flex items-center hover:underline">
                                    <Image
                                        src={'/assets/icons/home1.svg'}
                                        width={16}
                                        height={16}
                                        unoptimized
                                        alt=""
                                        className="w-4 h-4 text-gray-800"/>
                                        <a href="">
                                        <p className="font-semibold ml-1">
                                        428 Trần Đại Nghĩa, VKU university</p>
                                    </a>
                                </div>
                                <div className="flex items-center hover:underline">
                                <Image
                                        src={'/assets/images/phone.png'}
                                        width={16}
                                        height={16}
                                        unoptimized
                                        alt=""
                                        className="w-4 h-4 text-gray-800"/>
                                 <p className="font-semibold ml-1">Phone: 098262123</p>
                                </div>
                                <div className="flex items-center hover:underline">
                                <Image
                                        src={'/assets/images/email.png'}
                                        width={16}
                                        height={16}
                                        unoptimized
                                        alt=""
                                        className="w-4 h-4 text-gray-800"/>
                                    <p className="font-semibold ml-1"> Email:<a href=""> 3tQpV@example.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <section>
                    <div className=" p-5 lg:text-start sm:text-center">
                        <hr className="ml-10 mr-10 bg-amber-100 h-1"/>
                        <p className="text-[16px] font-bold mt-8 text-center ">© 2024 Copyright: <a href="#" className="underline">VKU.udn.vn</a></p>
                    </div>
                </section>
            </footer>
        </>
    );
};

export default Footer;
