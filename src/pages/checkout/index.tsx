import React, { useState } from "react";
import InputField from "@/components/InputField";
import PaymentMethod from "@/components/PaymentMethod";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import HeadImage from "@/components/HeadImage";
import FeatureCard from "@/components/FeatureCard";
import { useSelector } from "react-redux";
import {
  AppState,
  ICreateAddress,
  InputChange,
  TypePayment,
} from "@/utils/types";
import { formatPrice } from "@/utils/appUtils";
import toast from "react-hot-toast";
import Router from "next/router";
// import { useCreateOrderMutation } from "@/redux/api/orderApi";
import { useCreateAddressMutation } from "@/redux/api/customerApi";

const Checkout: React.FC = () => {
  const cartState = useSelector((state: AppState) => state.cart);

  console.log(cartState);
  const InitialStateForm: ICreateAddress = {
    first_name: "",
    last_name: "",
    // companyName: "",
    country: "",
    // streetAddress: "",
    city: "",
    province: "",
    zipcode: "",
    phone: "",
    email: "",
    // paymentMethod: TypePayment.BANK_TRANSFER,
  };
  const [formData, setFormData] = useState<ICreateAddress>(InitialStateForm);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  // const [createOrderRespon] = useCreateOrderMutation();
  const [createAddressRespon] = useCreateAddressMutation();

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.first_name.trim())
      newErrors.firstName = "First name is required.";
    formData.first_name.replace(/[^a-zA-Z0-9\s]/g, "");
    if (!formData.last_name.trim())
      newErrors.last_name = "Last name is required.";
    formData.last_name.replace(/[^a-zA-Z0-9\s]/g, "");
    // if (!formData.streetAddress.trim())
    //   newErrors.streetAddress = "Street address is required.";
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.zipcode.trim()) newErrors.zipCode = "Zipcode is required.";
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

  const handleOnChange = (e: InputChange) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    if (validateForm()) {
      const addressBody: ICreateAddress = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        // companyName: "",
        country: formData.country,
        // streetAddress: "",
        city: formData.city,
        province: formData.province,
        zipcode: formData.zipcode,
        phone: formData.phone,
        email: formData.email,
      };
      createAddressRespon(addressBody)
        .unwrap()
        .then((res) => {
          if (res.status == 201) {
            toast.success("Order placed successfully");
            console.log(res);
            Router.push("/");
          } else {
            toast.error("Cannot create order");
          }
        })
        .catch((error) => {
          toast.error("An error occurred. Please try again.");
          console.error(error);
        });
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
                name="first_name"
                label="First Name"
                error={errors.first_name}
                isRequired
              />
              <InputField
                onChange={handleOnChange}
                name="last_name"
                label="Last Name"
                error={errors.last_name}
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
              defaultValue="Sri Lanka"
              options={[
                "Viet Nam",
                "United States",
                "Canada",
                "Australia",
                "United Kingdom",
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
                "Western Province",
                "Central Province",
                "Southern Province",
                "Northern Province",
                "Eastern Province",
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
              name="zipcode"
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
              onChange={(method: TypePayment) =>
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
