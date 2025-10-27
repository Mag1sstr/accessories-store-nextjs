"use client";
import { IProducts } from "@/types/interfaces";
import styles from "./SingleProductPage.module.css";
import Image from "next/image";
import { useState } from "react";
import Button from "../Button/Button";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { addToCart, setAddedProduct } from "@/store/slices/cartSlice";
import { useModals } from "@/hooks/useModals";
import { useCart } from "@/hooks/useCart";
import a_icon1 from "../../../public/assets/singleProduct/01.png";
import a_icon2 from "../../../public/assets/singleProduct/02.png";
import a_icon3 from "../../../public/assets/singleProduct/03.png";
import a_icon4 from "../../../public/assets/singleProduct/04.png";
import a_icon5 from "../../../public/assets/singleProduct/05.png";
import ProductCard from "../ProductCard/ProductCard";

const PRODUCT_ADVANTAGES = [
  { title: "Только оригинальная продукция", subTitle: "", img: a_icon1 },
  {
    title: "Доставка за 2 часа",
    subTitle: "Быстро и бесплатно доставляем все заказы по Москве",
    img: a_icon2,
  },
  {
    title: "Удобная оплата",
    subTitle: "Все виды наличного и безналичного расчета",
    img: a_icon3,
  },
  {
    title: "Кредит",
    subTitle: "Выгодные кредитные предложения от самых популярных банков",
    img: a_icon4,
  },
  {
    title: "Гарантия",
    subTitle: "Предоставляем целый год сервисного обслуживания",
    img: a_icon5,
  },
];

interface IProps {
  product: IProducts;
}

function SingleProductPage(product: IProducts) {
  const dispatch = useAppDispatch();
  const [mainImage, setMainImage] = useState(0);

  const { setOpenAddedModal } = useModals();
  const { cart } = useCart();
  const { viewedProducts } = useAppSelector((state) => state.viewed);

  const isInCart = cart.some((el) => el.id === product.id);

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
                <Button
                  className={`${styles.add} ${isInCart && styles.added}`}
                  title={isInCart ? "Добавлено" : "Добавить в корзину"}
                  onClick={() => {
                    if (!isInCart) {
                      dispatch(addToCart({ ...product, count: 1 }));
                      dispatch(setAddedProduct(product));
                      setOpenAddedModal(true);
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <ul className={styles.advan}>
          {PRODUCT_ADVANTAGES.map((el) => (
            <li key={el.title} className={styles.advanItem}>
              <Image src={el.img} alt="icon" />
              <h3>{el.title}</h3>
              <p>{el.subTitle}</p>
            </li>
          ))}
        </ul>
        <div className={styles.viewed}>
          <h2>Вы смотрели</h2>
          <div className={styles.viewedRow}>
            {viewedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProductPage;
