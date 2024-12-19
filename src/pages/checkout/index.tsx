import React from "react";
import InputField from "@/components/InputField";
import PaymentMethod from "@/components/PaymentMethod";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import HeadImage from "@/components/HeadImage";
import FeatureCard from "@/components/FeatureCard";
import { useSelector } from "react-redux";
import { AppState } from "@/utils/types";
import { formatPrice } from "@/utils/appUtils";

const Checkout: React.FC = () => {
  const cartState = useSelector((state: AppState) => state.cart);
  console.log(cartState);
  return (
    <>
      <Header />
      <HeadImage title="Checkout" link="Checkout" />
      <form action="POST">
        <div className="flex flex-col lg:flex-row p-6 space-y-6 lg:space-y-0 lg:space-x-8 max-w-5xl mx-auto">
          {/* Billing Details Section */}
          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold">Billing details</h2>
            <div className="grid grid-cols-2 gap-4">
              <InputField label="First Name" isRequired />
              <InputField label="Last Name" isRequired />
            </div>
            <InputField label="Company Name (Optional)" isRequired />
            <InputField
              isRequired
              label="Country / Region"
              type="select"
              defaultValue="Sri Lanka"
              options={[
                "Sri Lanka",
                "United States",
                "Canada",
                "Australia",
                "United Kingdom",
              ]}
            />
            <InputField label="Street address" isRequired />
            <InputField label="Town / City" isRequired />
            <InputField
              label="Province"
              type="select"
              defaultValue="Western Province"
              options={[
                "Western Province",
                "Central Province",
                "Southern Province",
                "Northern Province",
                "Eastern Province",
              ]}
            />
            <InputField label="Email Address" isEmail />
            <InputField
              label=" "
              placeholder="Additional information"
              className="mt-10"
            />
          </div>

          {/* Order Summary Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-2xl font-semibold">Product</h2>
            <div className="border-t border-b py-4">
              {cartState.items.map((item) => (
                <>
                  <div className="flex justify-between">
                    <span>
                      {item.name}&ensp;X&ensp;{item.quantity}
                    </span>
                    <span>${formatPrice(item.price * item.quantity)}</span>
                  </div>
                </>
              ))}
              {/* <hr /> */}
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-orange-500">
                  ${formatPrice(cartState.subTotal)}
                </span>
              </div>
            </div>

            {/* Payment Methods */}
            <h2 className="text-lg font-semibold">Payment Method</h2>
            <PaymentMethod />

            <p className="text-sm text-gray-600">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <span className="underline">privacy policy</span>.
            </p>

            <button
              className="mt-4 w-full py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800"
              type="submit"
            >
              Place order
            </button>
          </div>
        </div>
      </form>
      <FeatureCard />
      <Footer />
    </>
  );
};

export default Checkout;
