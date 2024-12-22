"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { useSelector } from "react-redux";
import { AppState, ICartItem, UpdateQuantityType } from "@/utils/types";

// Helper: Format price
const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);

// Cart Item Row Component
const CartItemRow: React.FC<{
  item: ICartItem;
  onUpdateQuantity: (id: number, type: UpdateQuantityType) => void;
  onRemoveItem: (id: number) => void;
}> = ({ item, onUpdateQuantity, onRemoveItem }) => {
  const isDecrementDisabled = item.quantity <= 1;

  return (
    <div className="grid grid-cols-[2fr,1fr,1fr,1fr,auto] items-center gap-4 py-4 text-sm">
      <div className="flex items-center gap-4">
        <div className="w-24 h-24 bg-[#FAF4F4] rounded-lg overflow-hidden">
          <Image
            src={item.image ?? ""}
            alt={item.name ?? ""}
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </div>
        <span className="font-medium">{item.name}</span>
      </div>
      <div>$ {formatPrice(item.price)}</div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() =>
            onUpdateQuantity(item.id!, UpdateQuantityType.DECREMENT)
          }
          disabled={isDecrementDisabled}
          className={`w-6 h-6 flex items-center justify-center border rounded-full hover:bg-gray-100 ${
            isDecrementDisabled ? "cursor-not-allowed text-gray-300" : ""
          }`}
        >
          <span className="sr-only">Decrease quantity</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15"
            />
          </svg>
        </button>
        <input
          type="text"
          value={item.quantity}
          readOnly
          className="w-12 border border-gray-200 rounded px-2 py-1 text-center"
        />
        <button
          onClick={() =>
            onUpdateQuantity(item.id!, UpdateQuantityType.INCREMENT)
          }
          className="w-6 h-6 flex items-center justify-center border rounded-full hover:bg-gray-100"
        >
          <span className="sr-only">Increase quantity</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
      <div className="font-medium">
        $ {formatPrice(item.price * item.quantity)}
      </div>
      <button
        onClick={() => onRemoveItem(item.id!)}
        className="p-2 hover:text-red-500 transition-colors"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};

// Cart Totals Component
const CartTotals: React.FC<{ subtotal: number; onCheckout: () => void }> = ({
  subtotal,
  onCheckout,
}) => (
  <div className="bg-[#FAF4F4] p-8 rounded-lg space-y-6">
    <h2 className="text-2xl font-semibold">Cart Totals</h2>
    <div className="space-y-4">
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span className="text-gray-600">$ {formatPrice(subtotal)}</span>
      </div>
      <div className="flex justify-between font-medium">
        <span>Total</span>
        <span className="text-[#B88E2F]">$ {formatPrice(subtotal)}</span>
      </div>
    </div>
    <button
      onClick={onCheckout}
      className="w-full border-2 border-black rounded-lg py-3 px-6 hover:bg-black hover:text-white transition-colors"
    >
      Check Out
    </button>
  </div>
);

// Cart Component
const Cart: React.FC<{
  onUpdateQuantity: (id: number, type: UpdateQuantityType) => void;
  onRemoveItem: (id: number) => void;
  onCheckout: () => void;
}> = ({ onUpdateQuantity, onRemoveItem, onCheckout }) => {
  const items = useSelector((state: AppState) => state.cart.items);

  // Calculate subtotal using useMemo
  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items]
  );

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="grid md:grid-cols-[2fr,1fr] gap-8">
        {/* Cart Items Section */}
        <div className="space-y-6">
          <div className="grid grid-cols-[2fr,1fr,1fr,1fr,auto] gap-4 bg-[#FAF4F4] py-4 px-6 rounded-lg text-sm font-medium">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
            <div></div>
          </div>
          {items.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {items.map((item) => (
                <CartItemRow
                  key={item.id}
                  item={item}
                  onUpdateQuantity={onUpdateQuantity}
                  onRemoveItem={onRemoveItem}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-10">
              Your cart is empty. Add some products!
            </p>
          )}
        </div>

        {/* Totals Section */}
        {items.length > 0 && (
          <CartTotals subtotal={subtotal} onCheckout={onCheckout} />
        )}
      </div>
    </div>
  );
};

export default Cart;
