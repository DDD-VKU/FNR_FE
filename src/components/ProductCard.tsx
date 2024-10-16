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
        <div className="mt-5 w-[285px]">
            <div className="relative">
                <Image
                    src={image}
                    width={285}
                    height={300}
                    alt=""
                    className="block"
                />
                <div className="absolute top-3 right-2 bg-red-500 text-white rounded-full w-[40px] h-[0px] flex items-center justify-center font-semibold">
                    {discount_percent}%
                </div>

            </div>
            <div className="bg-[#F4F5F7] mt-[-10px]">
                <div className="ml-5 p-2 mb-2">
                    <p className="text-[24px] font-semibold mt-2">{name}</p>
                    <p className="text-[16px] text-[#898989]">{type}</p>
                    <div className="flex items-end">
                        <p className="text-[20px] font-semibold text-[#898989]">${price}</p>
                        <p className="ml-2 text-[16px] text-[#898989] line-through">{price_before_discount}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default ProductCard;