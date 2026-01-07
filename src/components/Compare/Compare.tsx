"use client";
import styles from "./Compare.module.css";
import { useState } from "react";
import Image from "next/image";
import { IProducts } from "@/types/interfaces";
import SmallProductCard from "../SmallProductCard/SmallProductCard";
import { useCompare } from "@/hooks/useCompare";

function Compare() {
  const [selectedProducts, setSelectedProducts] = useState<IProducts[]>([]);
  const [activeCategory, setActiveCategory] = useState("");
  const { compareData } = useCompare();
  const quantityCat = compareData.reduce<Record<string, number>>((acc, el) => {
    const key = el.category?.name;
    if (!key) return acc;
    acc[key] = (acc[key] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <h1 className={styles.title}>Список сравнения</h1>
        <ul className={styles.categories}>
          {Object.entries(quantityCat).map(([key, value], i) => (
            <li
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`${styles.categoryItem} ${
                key === activeCategory && styles.activeCategory
              }`}
            >{`${key} ${value}`}</li>
          ))}
        </ul>
        <ul className={styles.products}>
          {compareData.map((el) => (
            <SmallProductCard
              key={el.id}
              {...el}
              onClick={(product) => {
                if (!selectedProducts.some((el) => el.id === product.id)) {
                  setSelectedProducts((prev) => [...prev, product].slice(-4));
                }
              }}
            />
          ))}
        </ul>

        <ul className={styles.compareProducts}>
          {selectedProducts.map((product) => (
            <li key={product.id}>
              <Image
                src={product.images[0]}
                alt="product-image"
                width={100}
                height={100}
              />
              <h3>{product.title}</h3>
              <div className={styles.details}>
                <p>Цена</p>
                <p>{product.price} $</p>
                <p>Категория</p>
                <p>{product.category.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Compare;
