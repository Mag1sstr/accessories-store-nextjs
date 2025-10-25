import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import FiltersProducts from "@/components/FiltersProducts/FiltersProducts";
import Footer from "@/components/Footer/Footer";
import ProductBenefits from "@/components/ProductBenefits/ProductBenefits";

export default async function Products() {
  const response = await fetch("https://api.escuelajs.co/api/v1/products", {
    cache: "no-store",
  });
  const products = await response.json();
  return (
    <>
      <Header />
      <ProductBenefits />
      <Breadcrumbs />
      <FiltersProducts products={products} />
      <Footer />
    </>
  );
}
