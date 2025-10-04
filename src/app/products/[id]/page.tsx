"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { useParams } from "next/navigation";

export default function SingleProduct() {
  const { id } = useParams();
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
