import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US").format(price); // Sử dụng 'en-US' hoặc 'vi-VN'
};

interface CartItemRowProps {
  item: CartItem;
  onUpdateQuantity: (id: string, quantity: number) => void; // Hàm cập nhật số lượng nút tăng/giảm
  onRemoveItem: (id: string) => void; // Hàm xóa item
}

const CartItemRow: React.FC<CartItemRowProps> = ({
  item,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  return (
    <tr className="border-b border-gray-100">
      {/* Phần hiển thị hình ảnh và tên sản phẩm */}
      <td className="py-4">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-gray-50 rounded">
            <Image
              src={item.image}
              alt={item.name}
              width={500}
              height={300}
              className="rounded"
            />
          </div>
          <span className="font-medium">{item.name}</span>
        </div>
      </td>
      {/* Phần hiển thị giá */}
      <td className="py-4">Rs. {formatPrice(item.price)}</td>
      <td className="py-4">
        <div className="flex items-center gap-2">
          {/* Phần điều chỉnh số lượng */}
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
            className="p-1 hover:bg-gray-100 rounded disabled:opacity-50"
          >
            <Minus size={16} />
          </button>
          {/* Input số lượng */}
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (!isNaN(value) && value >= 1) {
                onUpdateQuantity(item.id, value);
              }
            }}
            className="w-16 p-1 border border-gray-200 rounded text-center"
            min="1"
          />
          {/* Nút tăng số lượng */}
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <Plus size={16} />
          </button>
        </div>
      </td>
      {/* Phần hiển thị tổng tiền của item */}
      <td className="py-4">Rs. {formatPrice(item.price * item.quantity)}</td>
      <td className="py-4">
        {/* Nút xóa item */}
        <button
          onClick={() => onRemoveItem(item.id)}
          className="p-1 hover:bg-gray-100 rounded text-red-500"
        >
          <Trash2 size={16} />
        </button>
      </td>
    </tr>
  );
};

interface CartTotalsProps {
  subtotal: number;
  onCheckout: () => void; // Hàm xử lý checkout, nút checkout sẽ gọi khi bấm vào, chuyển sang quy trình thanh toán.
}

const CartTotals: React.FC<CartTotalsProps> = ({ subtotal, onCheckout }) => {
  return (
    <div className="w-full md:w-80 bg-[#F9F1E7] ">
      <div className="bg-gray- rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-6">Cart Total</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Subtotl</span>
            <span>Rs. {formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>Rs. {formatPrice(subtotal)}</span>
          </div>
          <button
            onClick={onCheckout}
            className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 max-w-6xl mx-auto">
      <div className="flex-grow">
        <table className="w-full ">
          {/* Phần đầu  */}
          <thead>
            <tr className="border-b border-gray-200 bg-[#F9F1E7]">
              <th className="text-left py-4">Product</th>
              <th className="text-left py-4">Price</th>
              <th className="text-left py-4">Quantity</th>
              <th className="text-left py-4">Subtotal</th>
              <th className="py-4"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <CartItemRow
                key={item.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemoveItem={onRemoveItem}
              />
            ))}
          </tbody>
        </table>
      </div>
      <CartTotals subtotal={subtotal} onCheckout={onCheckout} />
    </div>
  );
};

export default Cart;
