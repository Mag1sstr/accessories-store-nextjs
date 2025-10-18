"use client";
import { IProducts } from "@/types/interfaces";
import styles from "./SingleProductPage.module.css";
import Image from "next/image";
import { useState } from "react";

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
        </div>
      </div>
    </section>
  );
}

export default SingleProductPage;
