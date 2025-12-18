"use client";
import { useAppSelector } from "@/store/store";
import styles from "./Compare.module.css";
import { useState } from "react";
import Image from "next/image";
import ProductCard from "../ProductCard/ProductCard";

function Compare() {
  const [activeCategory, setActiveCategory] = useState("");
  const { favorites } = useAppSelector((state) => state.favorites);

  const quantityCat = favorites.reduce<Record<string, number>>((acc, el) => {
    const key = el.category.name;
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
          {favorites.map((el) => (
            <ProductCard product={el} key={el.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Compare;
