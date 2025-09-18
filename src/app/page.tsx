import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Products from "@/components/Products/Products";

export default async function Home() {
  const response = await fetch("https://api.escuelajs.co/api/v1/products", {
    cache: "no-store",
  });
  const products = await response.json();
  console.log(products);

  return (
    <>
      <Header />
      <Products />
    </>
  );
}
