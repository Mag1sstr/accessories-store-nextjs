import Header from "@/components/Header/Header";
import Orders from "@/components/Orders/Orders";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Заказы",
  description: "An online store with products of various categories",
};
function OrdersPage() {
  return (
    <>
      <Header />
      <Orders />
    </>
  );
}

export default OrdersPage;
