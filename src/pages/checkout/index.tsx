import React, { useState } from "react";
import InputField from "@/components/InputField";
import PaymentMethod from "@/components/PaymentMethod";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import HeadImage from "@/components/HeadImage";
import FeatureCard from "@/components/FeatureCard";
import { useSelector } from "react-redux";
import { AppState, ICreateAddress } from "@/utils/types";
import { formatPrice } from "@/utils/appUtils";
import toast from "react-hot-toast";
import Router from "next/router";
import { useCreateOrderMutation } from "@/redux/api/orderApi";

const Checkout: React.FC = () => {
  const cartState = useSelector((state: AppState) => state.cart);
  // const [createOrderRespon] = useCreateOrderMutation();

  console.log(cartState);
  const InitialStateForm: ICreateAddress = {
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    city: "",
    province: "",
    zipCode: "",
    phone: "",
    email: "",
    paymentMethod: "",
  };
  const [formData, setFormData] = useState(InitialStateForm);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    formData.firstName.replace(/[^a-zA-Z0-9\s]/g, "");
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";
    formData.lastName.replace(/[^a-zA-Z0-9\s]/g, "");
    if (!formData.streetAddress.trim())
      newErrors.streetAddress = "Street address is required.";
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.zipCode.trim()) newErrors.zipCode = "Zipcode is required.";
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Valid email is required.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone Number is required.";
    } else if (!/^\d{10,13}$/.test(formData.phone)) {
      newErrors.phone = "Phone Number must be between 10 and 13 digits.";
    }
    if (!formData.paymentMethod)
      newErrors.paymentMethod = "Please select a payment method.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      toast.success("Order placed successfully");
      // createOrderRespon();
      Router.push("/");
    } else {
      toast.error("Please fill in all required fields");
    }
  };
  return (
    <>
      <Header />
      <HeadImage />
      <form action="POST" onSubmit={handleSubmit}>
        <div className="flex flex-col lg:flex-row p-6 space-y-6 lg:space-y-0 lg:space-x-8 max-w-5xl mx-auto">
          {/* Billing Details Section */}
          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold">Billing details</h2>
            <div className="grid grid-cols-2 gap-4">
              <InputField
                onChange={handleOnChange}
                name="firstName"
                label="First Name"
                error={errors.firstName}
                isRequired
              />
              <InputField
                onChange={handleOnChange}
                name="lastName"
                label="Last Name"
                error={errors.lastName}
                isRequired
              />
            </div>
            <InputField
              name="companyName"
              label="Company Name (Optional)"
              isRequired
              onChange={handleOnChange}
            />
            <InputField
              isRequired
              onChange={handleOnChange}
              name="country"
              label="Country / Region"
              type="select"
              defaultValue="Vietnam"
              options={[
                "Viet Nam",
                "United States",
                "Canada",
                "Australia",
                "United Kingdom",
                "Vietnam",
              ]}
            />
            <InputField
              name="streetAddress"
              label="Street address"
              isRequired
              onChange={handleOnChange}
            />
            <InputField
              name="city"
              label="Town / City"
              isRequired
              onChange={handleOnChange}
            />
            <InputField
              label="Province"
              name="province"
              type="select"
              onChange={handleOnChange}
              defaultValue="Western Province"
              options={[
                "Hanoi",
                "Ho Chi Minh",
                "Da Nang",
                "Can Tho",
                "Binh Duong",
                "Quang Nam",
              ]}
            />
            <InputField
              name="email"
              onChange={handleOnChange}
              label="Email Address"
              isEmail
              isRequired
            />
            <InputField
              name="zipCode"
              onChange={handleOnChange}
              label="Zip Code"
              isRequired
            />
            <InputField
              name="phone"
              onChange={handleOnChange}
              label="Phone Number"
              isRequired
              error={errors.phone}
            />
            <InputField
              name="additionalInfo"
              onChange={handleOnChange}
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
            <PaymentMethod
              selectedMethod={formData.paymentMethod}
              onChange={(method: string) =>
                setFormData({ ...formData, paymentMethod: method })
              }
              error={errors.paymentMethod}
            />

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
