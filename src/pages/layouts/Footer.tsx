const Footer = () => {
    return (
        <>
            <footer className="footer py-1  ">
                <div className="px-16 py-4  flex mt-6">
                    {/* Left */}
                    <div className="w-1/3">
                        <h2 className="text-[24px] font-bold" >Furino.</h2>
                        <p className="text-[16px] mt-6 font-Regular text-[#9F9F9F]"> 400 University Drive Suite 200 Coral Gables, <br />
                        FL 33134 USA</p>
                    </div>
                    
                    {/* Right */}
                    <div className="flex space-x-[180px] ">
                    {/* Link columns */}
                        <div>
                            <p className="text-[16px] font-semibold text-[#898989]">Link</p>
                            <ul className="space-y-6 mt-6">
                                <li>Home</li>
                                <li>Shop</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </div>

                    {/* Help columns */}
                        <div className="">
                            <h3 className="text-[16px] font-semibold text-[#898989]">Helps</h3>
                            <ul className="space-y-6 mt-6">
                                <li>Payment Option</li>
                                <li>Returns</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>

                    {/* News columns */}
                        <div>
                            <h3 className="font-semibold text-gray-400">Newsletter</h3>
                            <form className="mt-2 flex space-x-2">
                            <input type="email" placeholder="Enter Your Email Address" className="text-black px-4 py-2 border-b-2 border-gray-950"/>
                            <button className=" text-black px-4 py-2 border-b-2 border-gray-950 font-bold">SUBSCRIBE</button>
                            </form>
                        </div>
                    </div>
                </div>
                {/* Bottom part */}
                <div className="px-6 py-4 ml-8 mr-8 border-t-2 border-[#8b8b8b]">
                    <p className="text-[16px] font-Regular text-[#000000]">2023 funiro. All rights reserved</p>
                </div>
            </footer>
        </>);
}

export default Footer;