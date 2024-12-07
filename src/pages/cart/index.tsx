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
      <Header />
      <HeadImage />
      <div className="min-h-screen bg-white">
        <div className="container mx-auto py-8">
          <Cart
            items={items}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onCheckout={handleCheckout}
          />
        </div>
      </div>
      <FeatureCard />
      <Footer />
    </>
  );
};

export default CartPage;
