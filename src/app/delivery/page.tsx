import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import DeliveryPage from "@/components/DeliveryPage/DeliveryPage";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Доставка и оплата",
};

function Page() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <DeliveryPage />
      <Footer />
    </>
  );
}

export default Page;
