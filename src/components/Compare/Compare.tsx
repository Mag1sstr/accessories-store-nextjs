"use client";
import { useAppSelector } from "@/store/store";
import styles from "./Compare.module.css";
import { useState } from "react";

function Compare() {
  const [activeCategory, setActiveCategory] = useState(0);
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
              onClick={() => setActiveCategory(i)}
              className={`${styles.categoryItem} ${
                i === activeCategory && styles.activeCategory
              }`}
            >{`${key} ${value}`}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Compare;
