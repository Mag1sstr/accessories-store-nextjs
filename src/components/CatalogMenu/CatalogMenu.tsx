"use client";

import { useGetCategoriesQuery, useGetProductsQuery } from "@/api/api";
import styles from "./CatalogMenu.module.css";
import { useModals } from "@/hooks/useModals";
import { MouseEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function CatalogMenu() {
  const [selectCategory, setSelectCategory] = useState<null | number>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { openMenu, setOpenMenu } = useModals();
  const router = useRouter();
  const { data } = useGetCategoriesQuery(null);
  const { data: productsData } = useGetProductsQuery(
    {
      categoryId: selectCategory!,
    },
    { skip: !selectCategory }
  );

  const handleOpen = () => {
    setOpenMenu((prev) => !prev);
  };
  const handleSelectCategory = (id: number) => {
    setSelectCategory(id === selectCategory ? null : id);
  };

  useEffect(() => {
    function handleOutsideClick(event: PointerEvent) {
      if (
        menuRef.current &&
        event.target instanceof Node &&
        !menuRef.current.contains(event.target)
      ) {
        setOpenMenu(false);
      }
    }
    document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick);
  }, [menuRef]);

  return (
    <div className={`${styles.menu} ${openMenu && styles.open}`} ref={menuRef}>
      <button className={styles.catalog} onClick={handleOpen}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 10C17.1046 10 18 9.10457 18 8C18 6.89543 17.1046 6 16 6C14.8954 6 14 6.89543 14 8C14 9.10457 14.8954 10 16 10Z"
            fill="white"
          />
          <path
            d="M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z"
            fill="white"
          />
          <path
            d="M16 26C17.1046 26 18 25.1046 18 24C18 22.8954 17.1046 22 16 22C14.8954 22 14 22.8954 14 24C14 25.1046 14.8954 26 16 26Z"
            fill="white"
          />
        </svg>
        Каталог товаров
      </button>
      <ul
        className={`${styles.catalogDrop} ${selectCategory && styles.select}`}
      >
        {data?.map((el) => (
          <li
            className={`${selectCategory === el.id && styles.active}`}
            key={el.id}
            onClick={() => handleSelectCategory(el.id)}
          >
            {el.name}
          </li>
        ))}
      </ul>
      {selectCategory && (
        <div className={styles.categoryProducts}>
          <div className={styles.inner}>
            {productsData?.map((product) => (
              <div
                onClick={() => router.push(`/products/${product.id}`)}
                key={product.id}
                className={styles.card}
              >
                <img src={product.images[0]} alt="" />
                <div>
                  <p>{product.title}</p>
                  <p>{product.price}$</p>
                </div>
              </div>
            ))}
          </div>
          <Link href={""}>Смотреть все товары</Link>
        </div>
      )}
    </div>
  );
}

export default CatalogMenu;
