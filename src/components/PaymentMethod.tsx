import React from "react";

interface PaymentMethodProps {
  selectedMethod: string;
  onChange: (method: string) => void;
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
        value="bank"
        checked={selectedMethod === "bank"}
        onChange={() => onChange("bank")}
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
        value="creditCard"
        checked={selectedMethod === "creditCard"}
        onChange={() => onChange("creditCard")}
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
        value="cod"
        checked={selectedMethod === "cod"}
        onChange={() => onChange("cod")}
      />
      <label htmlFor="cod" className="text-sm font-medium">
        Cash On Delivery
      </label>
    </div>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default PaymentMethod;
