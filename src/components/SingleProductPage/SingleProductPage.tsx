"use client";
import { IProducts } from "@/types/interfaces";
import styles from "./SingleProductPage.module.css";
import Image from "next/image";
import { useState } from "react";
import Button from "../Button/Button";

interface IProps {
  product: IProducts;
}

function SingleProductPage(product: IProducts) {
  const [mainImage, setMainImage] = useState(0);
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.productInfo}>
          <div className={styles.productImages}>
            <div className={styles.mainImage}>
              <Image
                src={product.images[mainImage]}
                alt={product.title}
                width={400}
                height={400}
              />
            </div>
            <ul className={styles.rowImages}>
              {product.images.map((image, index) => (
                <li
                  key={index}
                  className={`${index === mainImage && styles.active}`}
                  onClick={() => setMainImage(index)}
                >
                  {" "}
                  <img src={image} alt="image" />
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.details}>
            <h1 className={styles.productTitle}>{product.title}</h1>
            <div className={styles.productDetails}>
              <div className={styles.left}>
                <p>Было продано: 242 шт</p>
                <p>Характеристики</p>
              </div>
              <div className={styles.right}>
                <div className={styles.rightTop}>
                  <p className={styles.price}>{product.price} $</p>
                  <p className={styles.available}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="16" height="16" rx="8" fill="#33BE02" />
                    </svg>
                    в наличии
                  </p>
                </div>
                <Button className={styles.add} title="Добавить в корзину" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProductPage;
