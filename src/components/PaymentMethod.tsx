import { TypePayment } from "@/utils/types";
import React from "react";

interface PaymentMethodProps {
  selectedMethod: TypePayment;
  onChange: (method: TypePayment) => void;
  error?: string;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({
  selectedMethod,
  onChange,
  error,
}) => (
  <div className="space-y-4">
    <div className="flex items-center space-x-2">
      <input
        type="radio"
        id="bank"
        name="payment"
        value={TypePayment.BANK_TRANSFER}
        checked={selectedMethod === TypePayment.BANK_TRANSFER}
        onChange={() => onChange(TypePayment.BANK_TRANSFER)}
      />
      <label htmlFor="bank" className="text-sm font-medium">
        Direct Bank Transfer
      </label>
    </div>
    <p className="text-gray-600 text-sm">
      Make your payment directly into our bank account. Please use your Order ID
      as the payment reference. Your order will not be shipped until the funds
      have cleared in our account.
    </p>

    <div className="flex items-center space-x-2">
      <input
        type="radio"
        id="creditCard"
        name="payment"
        value={TypePayment.CREDIT_CARD}
        checked={selectedMethod === TypePayment.CREDIT_CARD}
        onChange={() => onChange(TypePayment.CREDIT_CARD)}
      />
      <label htmlFor="creditCard" className="text-sm font-medium">
        Credit Card
      </label>
    </div>

    <div className="flex items-center space-x-2">
      <input
        type="radio"
        id="cod"
        name="payment"
        value={TypePayment.COD}
        checked={selectedMethod === TypePayment.COD}
        onChange={() => onChange(TypePayment.COD)}
      />
      <label htmlFor="cod" className="text-sm font-medium">
        Cash On Delivery
      </label>
    </div>
    <div className="flex items-center space-x-2">
      <input
        type="radio"
        id="pp"
        name="payment"
        value={TypePayment.PAYPAL}
        checked={selectedMethod === TypePayment.PAYPAL}
        onChange={() => onChange(TypePayment.PAYPAL)}
      />
      <label htmlFor="cod" className="text-sm font-medium">
        PayPal
      </label>
    </div>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default PaymentMethod;
