import Cart from "@/components/Cart";
import React, { useState } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import HeadImage from "@/components/HeadImage";
import FeatureCard from "@/components/FeatureCard";

// ví dụ 1sp
const CartPage: React.FC = () => {
  const [items, setItems] = useState([
    {
      id: "1",
      name: "Asgaard sofa",
      price: 250.0,
      quantity: 1,
      image: "/assets/images/maskgroupcart.png",
    },
  ]);
  // nhận id và quantiny sp
  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    setItems(
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };
  //  nhận id sp cần xóa
  const handleRemoveItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout...");
  };

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
