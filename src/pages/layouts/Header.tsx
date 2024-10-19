import Image from "next/image";

const Header = () => {
    return (
        <>
            <header className="header py-3">
                <div className="mx-[24px] p-4 flex items-center justify-between ">

                    <div className="logo flex items-center space-x-2">
                        {/* <img src="logo.png" alt="logo" className="h-4" /> */}
                        <Image
                            src={'/assets/images/logo.png'}
                            width={46}
                            height={40}
                            alt="logo"
                            className="h-4"
                        />
                        <span className="title font-bold text-[28px]">Furniro</span>
                    </div>

                    <nav className="nav hidden md:flex space-x-6">
                        <a className="text-base font-semibold">Home</a>
                        <a className="text-base font-semibold">Shop</a>
                        <a className="text-base font-semibold">About</a>
                        <a className="text-base font-semibold">Contact</a>
                    </nav>

                    <div className="flex space-x-6">
                        <a href="">
                            <Image
                                src={'/assets/icons/mdi_account-alert-outline.svg'}
                                width={28}
                                height={28}
                                alt="logo"
                            />
                        </a>
                        <a href="">
                            <Image
                                src={'/assets/icons/akar-icons_search.svg'}
                                width={28}
                                height={28}
                                alt="logo"
                            />
                        </a>
                        <a href="">
                            <Image
                                src={'/assets/icons/akar-icons_heart.svg'}
                                width={28}
                                height={28}
                                alt="logo"
                            />
                        </a>
                        <a href="">
                            <Image
                                src={'/assets/icons/ant-design_shopping-cart-outlined.svg'}
                                width={28}
                                height={28}
                                alt="logo"
                            />
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button className="text-2xl">
                        <Image
                                src={'/assets/images/menu.png'}
                                width={28}
                                height={28}
                                alt="logo"
                            />
                        </button>
                    </div>
                </div>
            </header>
        </>);
}

export default Header;