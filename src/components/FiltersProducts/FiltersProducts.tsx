"use client";
import { useGetCategoriesQuery, useGetProductsQuery } from "@/api/api";
import styles from "./FiltersProducts.module.css";
import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { IProducts } from "@/types/interfaces";

interface IProps {
  products: IProducts[];
}

function FiltersProducts({ products }: IProps) {
  const [selectCategory, setSelectCategory] = useState<number | null>(0);
  const { data: categories } = useGetCategoriesQuery(null);
  const { data: productsData = products } = useGetProductsQuery({
    categoryId: selectCategory!,
  });
  console.log(products);

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.top}>
          <ol className={styles.categories}>
            {categories?.map((el) => (
              <li
                onClick={() =>
                  setSelectCategory(el.id === selectCategory ? 0 : el.id)
                }
                key={el.id}
                className={`${styles.categoryItem} ${
                  selectCategory === el.id && styles.active
                }`}
              >
                {el.name}
              </li>
            ))}
          </ol>
          <div className={styles.sort}>
            Сортировать{" "}
            <div className={styles.select}>
              по умолчанию{" "}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.99998 7.20001L12 13.2L18 7.20001L20.4 8.40001L12 16.8L3.59998 8.40001L5.99998 7.20001Z"
                  fill="#0071E4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.filters}>
          <div className={styles.filtersContent}></div>
        </div>
        <div className={styles.products}>
          {productsData?.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FiltersProducts;
