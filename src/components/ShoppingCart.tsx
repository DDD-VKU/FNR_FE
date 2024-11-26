import { useState } from "react";
import Image from "next/image";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Asgaard sofa",
      price: 250000,
      image: "/assets/images/asgaard_sofa.png", // Đường dẫn ảnh
      quantity: 1,
    },
    {
      id: 1,
      name: "Asgaard sofa",
      price: 250000,
      image: "/assets/images/asgaard_sofa.png", // Đường dẫn ảnh
      quantity: 1,
    },
    {
      id: 1,
      name: "Asgaard sofa",
      price: 250000,
      image: "/assets/images/asgaard_sofa.png", // Đường dẫn ảnh
      quantity: 1,
    },
    {
      id: 1,
      name: "Asgaard sofa",
      price: 250000,
      image: "/assets/images/asgaard_sofa.png", // Đường dẫn ảnh
      quantity: 1,
    },
    {
      id: 1,
      name: "Asgaard sofa",
      price: 250000,
      image: "/assets/images/asgaard_sofa.png", // Đường dẫn ảnh
      quantity: 1,
    },
    {
      id: 1,
      name: "Asgaard sofa",
      price: 250000,
      image: "/assets/images/asgaard_sofa.png", // Đường dẫn ảnh
      quantity: 1,
    },
    {
      id: 2,
      name: "Casaliving Wood",
      price: 270000,
      image: "/assets/images/double_sofa.png",
      quantity: 1,
    },
  ]);

  const toggleCart = () => setIsOpen(!isOpen);

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Icon mở giỏ hàng */}
      <Image
        src={"/assets/icons/ant-design_shopping-cart-outlined.svg"}
        width={28}
        height={28}
        unoptimized
        alt="cart"
        onClick={toggleCart}
      />
      <div
        className={`fixed top-0 right-0 h-auto max-h-[90vh] w-80 bg-white shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 flex flex-col`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button onClick={toggleCart} className="text-gray-600 text-2xl">
            &times;
          </button>
        </div>

        {/* Danh sách sản phẩm */}
        <div className="flex-1 overflow-y-auto max-h-[60vh] p-4 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-gray-50 p-2 rounded-lg shadow-sm"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-md object-cover"
              />
              <div className="flex-1 px-3">
                <h3 className="font-semibold text-gray-700">{item.name}</h3>
                <p className="text-gray-500">
                  {item.quantity} x Rs. {item.price.toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                &times;
              </button>
            </div>
          ))}
        </div>

        {/* Subtotal và nút chức năng */}
        <div className="p-4 border-t">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Subtotal:</span>
            <span className="font-semibold text-lg">
              Rs. {subtotal.toLocaleString()}
            </span>
          </div>
          <div className="flex space-x-2">
            <button className="flex-1 border border-gray-500 text-gray-700 py-2 rounded-lg hover:bg-gray-100">
              Cart
            </button>
            <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
