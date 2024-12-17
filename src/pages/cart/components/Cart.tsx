"use client";

import React from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { useSelector } from "react-redux";
import { AppState, ICartItem } from "@/utils/types";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

interface CartItemRowProps {
  item: ICartItem;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

const CartItemRow: React.FC<CartItemRowProps> = ({
  item,
  onUpdateQuantity,
  onRemoveItem,
}) => {
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
      <div>Rs. {formatPrice(item.price)}</div>
      <div>
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => {
            const value = parseInt(e.target.value);
            if (!isNaN(value) && value >= 1) {
              onUpdateQuantity(item.id!, value);
            }
          }}
          className="w-16 border border-gray-200 rounded px-2 py-1 text-center"
          min="1"
        />
      </div>
      <div className="font-medium">
        Rs. {formatPrice(item.price * item.quantity)}
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

interface CartTotalsProps {
  subtotal: number;
  onCheckout: () => void;
}

const CartTotals: React.FC<CartTotalsProps> = ({ subtotal, onCheckout }) => {
  return (
    <div className="bg-[#FAF4F4] p-8 rounded-lg space-y-6">
      <h2 className="text-2xl font-semibold">Cart Totals</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="text-gray-600">Rs. {formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between font-medium">
          <span>Total</span>
          <span className="text-[#B88E2F]">Rs. {formatPrice(subtotal)}</span>
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
};

interface CartProps {
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  const items = useSelector((state: AppState) => state.cart.items);

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
          <div>
            <CartTotals
              subtotal={items.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
              onCheckout={onCheckout}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
