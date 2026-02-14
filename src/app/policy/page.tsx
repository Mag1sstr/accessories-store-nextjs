import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Policy from "@/components/Policy/Policy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика возрата",
};

function Page() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <Policy />
      <Footer />
    </>
  );
}

export default Page;
