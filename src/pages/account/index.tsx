import { notFound } from "next/navigation";
import CustomerProfile from "./components/CustomerProfile";
import OrderHistory from "./components/OrderHistory";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { useEffect } from "react";
import { useCheckTokenQuery } from "@/redux/api/authApi";
import Cookies from "js-cookie";
import Loading from "@/components/Loading";
import { useGetOrdersQuery } from "@/redux/api/orderApi";

const AccountPage = () => {
  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      window.location.href = "/auth/login";
    }
  });
  const { data: userData, isLoading, isError } = useCheckTokenQuery({});
  const { data: orderData, isLoading: orderLoading } = useGetOrdersQuery({});
  if (isLoading || orderLoading) return <Loading />;

  const orderHistory = orderData.data;
  return (
    <>
      <Header />
      <CustomerProfile customer={userData.customer} />
      <OrderHistory orders={orderHistory} />
      <Footer />
    </>
  );
};

export default AccountPage;
