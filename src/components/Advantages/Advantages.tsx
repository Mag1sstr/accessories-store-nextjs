"use client";
import Image from "next/image";
import styles from "./Advantages.module.css";
import icon1 from "../../../public/assets/advantages/01.png";
import icon2 from "../../../public/assets/advantages/02.png";
import icon3 from "../../../public/assets/advantages/03.png";
import icon4 from "../../../public/assets/advantages/04.png";
import icon5 from "../../../public/assets/advantages/05.png";

const ADVANTAGES_DATA = [
  {
    title: "Акции и подарки",
    text: "Постоянные акции, бонусы и скидки. Покупайте технику Apple посамым выгодным ценам",
    img: icon1,
  },
  {
    title: "Доставим за 3 часа",
    text: "Быстрая и бесплатная доставка по Москве. Доставим за 3 часа в день заказа. Также доступна быстрая доставка по всей России или самовывоз",
    img: icon2,
  },
  {
    title: "Удобные способы оплаты",
    text: "Наличными или картой при получении, оплата на сайте или в кредит",
    img: icon3,
  },
  {
    title: "Покупка в кредит",
    text: "Получите самое выгодное кредитное предложение от более чем 30 ведущих банков страны",
    img: icon4,
  },
  {
    title: "Гарантия",
    text: "Все товары, представленные в нашем сайте, имеют гарантию от нашего магазина или компании Apple",
    img: icon5,
  },
];
function Advantages() {
  return (
    <section className={styles.advantages}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.advantagesCard}>
            <Image src={icon1} width={160} height={160} alt="icon" />
            <h3>Акции и подарки</h3>
            <p>
              Постоянные акции, бонусы и скидки. Покупайте технику Apple по
              самым выгодным ценам
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
