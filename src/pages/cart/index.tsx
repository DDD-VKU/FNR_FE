import React, { useEffect, useState } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import HeadImage from "@/components/HeadImage";
import FeatureCard from "@/components/FeatureCard";
import { useSelector } from "react-redux";
import { AppState, ICart, ICartItem } from "@/utils/types";
import Router from "next/router";
import Cart from "./components/Cart";
import { useGetCartQuery } from "@/redux/api/cartApi";

const CartPage: React.FC = () => {
  const { data, isLoading, isError } = useGetCartQuery({});
  const [items, setItems] = useState<ICartItem[]>([]);
  const handleUpdateQuantity = (id: number, quantity: number) => {};
  const handleRemoveItem = (id: number) => {};

  const handleCheckout = () => {
    console.log("Proceeding to checkout...");
  };
  const auth = useSelector((state: AppState) => state.auth);

  useEffect(() => {
    console.log(auth);
    if (!auth.isAuthenticated) {
      Router.push("/auth/login");
    }
  }, [auth.isAuthenticated]);

  return (
    <>
      {/* Icon mở giỏ hàng */}
      <button
        onClick={toggleCart}
        className="fixed top-4 right-4 bg-gray-800 text-white p-2 rounded"
      >
        🛒 Open Cart
      </button>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button onClick={toggleCart} className="text-gray-600 text-xl">
            &times;
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 space-y-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-2"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1 px-4">
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <p className="text-gray-500 text-sm">
                    {item.quantity} x Rs. {item.price.toLocaleString("en-US")}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  &times;
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">Your cart is empty</p>
          )}
        </div>

        {/* Subtotal & Actions */}
        <div className="p-4 border-t">
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Subtotal:</span>
            <span className="font-semibold">
              Rs. {subtotal.toLocaleString("en-US")}
            </span>
          </div>
          <div className="space-y-2">
            <button className="w-full bg-gray-800 text-white py-2 rounded">
              Go to Cart
            </button>
            <button className="w-full bg-blue-600 text-white py-2 rounded">
              Checkout
            </button>
            <button className="w-full bg-gray-300 text-gray-700 py-2 rounded">
              Comparison
            </button>
          </div>
        </div>
      </div>
      <FeatureCard />
      <Footer />
    </>
  );
};

export default CartPage;
