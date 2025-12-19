"use client";
import { useAppSelector } from "@/store/store";
import styles from "./Compare.module.css";
import { Fragment, useState } from "react";
import Image from "next/image";
import ProductCard from "../ProductCard/ProductCard";
import { IProducts } from "@/types/interfaces";

function Compare() {
  const [selectedProducts, setSelectedProducts] = useState<IProducts[]>([]);
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
            <div
              key={el.id}
              onClick={() => {
                if (selectedProducts.length < 4) {
                  setSelectedProducts((prev) => [...prev, el]);
                }
              }}
            >
              <ProductCard product={el} className={styles.card} />
            </div>
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

              <p>Цена</p>
              <p>{product.price} $</p>
              <p>Категория</p>
              <p>{product.category.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Compare;
