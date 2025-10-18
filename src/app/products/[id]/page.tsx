"use client";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SingleProductPage from "@/components/SingleProductPage/SingleProductPage";
import { useParams } from "next/navigation";

export default function SingleProduct() {
  const { id } = useParams();
  return (
    <>
      <Header />
      <Breadcrumbs />
      <SingleProductPage />
      <Footer />
    </>
  );
}
