"use client";
import { useGetProductsQuery } from "@/api/api";
import styles from "./Search.module.css";
import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

interface IProps {
  mobile?: boolean;
  className?: string;
}

function Search({ mobile, className }: IProps) {
  const [searchValue, setSearchValue] = useState("");

  const debouncedValue = useDebounce(searchValue.trim(), 1000);

  const { data } = useGetProductsQuery({
    title: debouncedValue,
  });

  return (
    <div className={`${styles.search} ${mobile && styles.mobile} ${className}`}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 21L16.514 16.506M19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z"
          stroke="#B7B7B7"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        placeholder="Поиск по каталогу товаров"
      />
      <div
        className={`${styles.searchDrop} ${
          !!debouncedValue.length && styles.drop
        }`}
      >
        {data?.map((product) => (
          <div key={product.id} className={styles.item}>
            <div className={styles.row}>
              <img src={product.images[0]} alt="image" />
              <div className={styles.name}>
                <p>{product.title}</p>
                <p>{product.price} ₽</p>
              </div>
            </div>
            <p className={styles.info}>Подробнее</p>
          </div>
        ))}
        {!data?.length && <div className={styles.not}>Не найдено</div>}
      </div>
    </div>
  );
}

export default Search;
