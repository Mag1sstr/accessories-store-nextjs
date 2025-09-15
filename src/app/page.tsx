import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Products from "@/components/Products/Products";

export default function Home() {
  return (
    <>
      <Header />
      <Products />
    </>
  );
}
