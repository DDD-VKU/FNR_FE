/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";


interface ProductCardProps {
    name: string;
    type: string;
    image: string;
    price: number;
    discount_percent: number;
    price_before_discount: number;
    onClick?: () => void;
}
const ProductCard: React.FC<ProductCardProps> = ({ name, type, image, price, discount_percent, price_before_discount, onClick }) => {
    return (<div className="flex justify-center">
        <div className="mt-5 w-[285px] realative group">
            <div className="relative ">
                {/* Main Image */}
                <Image
                    src={image}
                    width={285}
                    height={300}
                    unoptimized
                    alt=""
                    className="block object-cover"
                />
                <div className="absolute top-3 right-2 bg-red-500 text-white rounded-full w-[40px] h-[0px] flex items-center justify-center font-semibold">
                    {discount_percent}%
                </div>
                {/* Hover Image */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transiton-opacity duration-500">
                    <button
                    className="bg-white text-[#B88E2F] py-2 px-4 font-semibold"
                    onClick={onClick}
                    >
                        Add To Cart
                    </button>
                    <div className="flex space-x-2 text-white">
                        <button className="flex items-center space-x-2 mt-8 hover:text-[#e9bf5b]">
                            <Image
                                src={'/assets/icons/gridicons_share.svg'}
                                width={16}
                                height={16}
                                alt=""
                            />
                            <p>Share</p>
                        </button>
                        <button className="flex items-center space-x-2 mt-8 hover:text-[#e9bf5b]">
                            <Image
                                src={'/assets/icons/compare-svgrepo-com 1.svg'}
                                width={16}
                                height={16}
                                alt=""
                            />
                            <p>Compare</p>
                        </button>
                        <button className="flex items-center space-x-2 mt-8 hover:text-[#e9bf5b]">
                            <Image
                                src={'/assets/icons/Heart.svg'}
                                width={16}
                                height={16}
                                alt=""
                            />
                            <p>Like</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-[#F4F5F7] mt-[-10px]">
                <div className="ml-5 p-2 mb-2">
                    <p className="text-[24px] font-semibold mt-2">{name}</p>
                    <p className="text-[16px] text-[#898989]">{type}</p>
                    <div className="flex items-end">
                        <p className="text-[20px] font-semibold text-[#3A3A3A]">${price}</p>
                        <p className="ml-2 text-[16px] text-[#898989] line-through">{price_before_discount}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default ProductCard;