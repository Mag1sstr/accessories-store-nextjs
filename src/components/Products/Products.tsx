"use client";
import { useGetProductsQuery } from "@/api/api";
import styles from "./Products.module.css";
import { useRouter } from "next/navigation";
import Blur from "../Blur/Blur";
import { IProducts } from "@/types/interfaces";
import ProductCard from "../ProductCard/ProductCard";

interface IProps {
  products: IProducts[];
}
function Products({ products }: IProps) {
  const { data = products } = useGetProductsQuery({});
  const router = useRouter();
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.row}>
          {data?.slice(0, 8).map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
        <button
          className={styles.more}
          onClick={() => router.push("/products")}
        >
          Показать ещё
        </button>
      </div>
    </section>
  );
}
export default Products;
