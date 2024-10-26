import React from "react";

const PaymentMethod: React.FC = () => (
  <div className="space-y-4">
    <div className="flex items-center space-x-2">
      <input type="radio" id="bank" name="payment" defaultChecked />
      <label htmlFor="bank" className="text-sm font-medium">Direct Bank Transfer</label>
    </div>
    <p className="text-gray-600 text-sm">
      Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
    </p>
    <div className="flex items-center space-x-2">
      <input type="radio" id="direct" name="payment" />
      <label htmlFor="direct" className="text-sm font-medium">Direct Bank Transfer</label>
    </div>
    <div className="flex items-center space-x-2">
      <input type="radio" id="cod" name="payment" />
      <label htmlFor="cod" className="text-sm font-medium">Cash On Delivery</label>
    </div>
  </div>
);

export default PaymentMethod;