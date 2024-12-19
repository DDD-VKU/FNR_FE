import React from "react";
import Image from "next/image";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import HeadImage from "@/components/HeadImage";
import FeatureCard from "@/components/FeatureCard";

const ContactPage: React.FC = () => {
  return (
    <>
      <Header />
      <HeadImage title="Contact" link="Contact" />
      <div className=" flex flex-col items-center justify-center p-6">
        <div className="max-w-4xl w-full bg-white rounded-lg  p-8">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Get In Touch With Us
          </h2>
          <p className="text-center text-gray-500 mb-8">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>

          <div className="flex flex-col md:flex-row mb-8">
            <div className="flex-1 space-y-4 mb-8 md:mb-0">
              <div className="flex items-center">
                <Image
                  src="/assets/icons/adress.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p className="text-gray-500 ">
                    236 5th SE Avenue , New York NY10000, United States
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Image
                  src="/assets/icons/phone.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-500">Mobile: +(84) 546-6789</p>
                  <p className="text-gray-500">Hotline: +(84) 456-6789</p>
                </div>
              </div>
              <div className="flex items-center">
                <Image
                  src="/assets/icons/clock.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Working Time</h3>
                  <p className="text-gray-500">Monday–Friday: 9:00 - 22:00</p>
                  <p className="text-gray-500">Saturday–Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <form className="space-y-4">
                <div>
                  <InputField label="Your name" placeholder="Abc" />
                </div>
                <div>
                  <InputField label="Email address" placeholder="Abc@def.com" />
                </div>
                <div>
                  <InputField
                    label="Suject"
                    placeholder="This is an optional"
                  />
                </div>
                <div>
                  <InputField label="Massage" />
                </div>
                <div className="flex justify-left items-center p-4">
                  <Button text="Sumit" onClick={() => alert("Sumited")} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <FeatureCard />
      <Footer />
    </>
  );
};

export default ContactPage;
