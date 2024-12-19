/* eslint-disable @typescript-eslint/no-unused-vars */
import { useUpdateCartMutation } from "@/redux/api/cartApi";
import { ADD_TO_CART } from "@/redux/slices/cartSlice";
import { formatPrice } from "@/utils/appUtils";
import { AppState, ICartItem, ICartItemResquest } from "@/utils/types";
import Image from "next/image";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

interface ProductCardProps {
  id: number;
  name: string;
  type: string;
  image: string;
  price: number;
  discount_percent: number;
  price_before_discount: number;
  is_new_product?: boolean;
  onClick?: () => void;
}
const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  type,
  image,
  price,
  discount_percent,
  price_before_discount,
  is_new_product = false,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [updateCart] = useUpdateCartMutation();
  const authState = useSelector((state: AppState) => state.auth);

  const handleAddToCart = async (product: ICartItemResquest) => {
    try {
      if (!authState.isAuthenticated) {
        toast.error("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng");
        return;
      }
      const res = await updateCart(product);
      if (res.data) {
        dispatch(
          ADD_TO_CART({
            price: product.price,
            quantity: product.quantity,
            product: {
              id: product.product_id,
              name: name,
              products_images: { images: [image] },
              price: product.price,
            },
          })
        );
        toast.success("Thêm sản phẩm vào giỏ hàng thành công");
      }
    } catch (error) {
      console.log(error);
      toast.error("Thêm sản phẩm vào giỏ hàng không thành công");
    }
  };
  return (
    <div className="flex justify-center">
      <div className="mt-5 w-[285px] realative group">
        <div className="relative ">
          {/* Main Image */}
          <Image
            src={image}
            width={285} // Chiều rộng cố định
            height={300} // Chiều cao cố định
            unoptimized
            alt={name}
            className="block w-[285px] h-[300px] object-cover"
          />
          {is_new_product == false ? (
            <div className="text-sm p-4 absolute top-5 right-2 bg-red-500 text-white rounded-full w-[40px] h-[40px] flex items-center justify-center font-semibold">
              {discount_percent}%
            </div>
          ) : (
            <div className="text-sm p-4 absolute top-5 right-2 bg-green-500 text-white rounded-full w-[40px] h-[40px] flex items-center justify-center font-semibold">
              New
            </div>
          )}
          {/* Hover Image */}
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transiton-opacity duration-500">
            <button
              className="bg-white text-[#B88E2F] py-2 px-4 font-semibold"
              onClick={() =>
                handleAddToCart({
                  product_id: id,
                  action: "add",
                  quantity: 1,
                  price: price - price * (discount_percent / 100),
                })
              }
            >
              Add To Cart
            </button>
            <div className="flex space-x-2 text-white">
              <button className="flex items-center space-x-2 mt-8 hover:text-[#e9bf5b]">
                <Image
                  src={"/assets/icons/gridicons_share.svg"}
                  width={16}
                  height={16}
                  alt=""
                />
                <p>Share</p>
              </button>
              <button className="flex items-center space-x-2 mt-8 hover:text-[#e9bf5b]">
                <Image
                  src={"/assets/icons/compare-svgrepo-com 1.svg"}
                  width={16}
                  height={16}
                  alt=""
                />
                <p>Compare</p>
              </button>
              <button className="flex items-center space-x-2 mt-8 hover:text-[#e9bf5b]">
                <Image
                  src={"/assets/icons/Heart.svg"}
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
            <p
              className="text-[24px] font-semibold mt-2 cursor-pointer hover:text-[#B88E2F] duration-300"
              onClick={() => router.push(`/products/${id}`)}
            >
              {name}
            </p>
            <p className="text-[16px] text-[#898989]">{type}</p>
            <div className="flex items-center">
              <p className="text-[20px] font-semibold text-[#3A3A3A]">
                ${formatPrice(price)}
              </p>
              <p className="ml-2 text-[16px] text-[#898989] line-through">
                ${formatPrice(price_before_discount)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
