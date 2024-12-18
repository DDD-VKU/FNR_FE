import React, { useEffect, useState } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import FeatureCard from "@/components/FeatureCard";
import { useDispatch, useSelector } from "react-redux";
import { AppState, ICart, ICartItem, UpdateQuantityType } from "@/utils/types";
import Router from "next/router";
import { useGetCartQuery } from "@/redux/api/cartApi";
import Cart from "./components/Cart";
import { DECREMENT_CART, INCREMENT_CART } from "@/redux/slices/cartSlice";

const CartPage: React.FC = () => {
  const { data, isLoading, isError } = useGetCartQuery({});
  const [items, setItems] = useState<ICartItem[]>([]);
  const dispatch = useDispatch();
  const handleUpdateQuantity = (id: number, type: UpdateQuantityType) => {
    if (type === UpdateQuantityType.INCREMENT) {
      dispatch(INCREMENT_CART(id));
    } else if (type === UpdateQuantityType.DECREMENT) {
      dispatch(DECREMENT_CART(id));
    }
  };
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
      <Cart
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
      <FeatureCard />
      <Footer />
    </>
  );
};

export default CartPage;
