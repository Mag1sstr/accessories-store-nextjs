import styles from "./Earphones.module.css";
import img1 from "../../../public/assets/ear/1.png";
import img2 from "../../../public/assets/ear/2.png";
import img3 from "../../../public/assets/ear/3.png";
import img4 from "../../../public/assets/ear/4.png";
import img5 from "../../../public/assets/ear/5.png";
import img6 from "../../../public/assets/ear/6.png";
import Image from "next/image";

const data = [
  {
    title: "Подзаголовок",
    text: "Design that goes beyond the surface. Dual-side Gorilla® Glass gives toughness. Advanced vibration motors make touch responses life-like. The symmetrical bezels and aluminium frame adds elegance, lightness and durability.",
    img: img2,
  },
  {
    title: "Текст про OS",
    text: "Design that goes beyond the surface. Dual-side Gorilla® Glass gives toughness. Advanced vibration motors make touch responses life-like. The symmetrical bezels and aluminium frame adds elegance, lightness and durability.",
    img: img3,
  },
  {
    title: "Текст про OS",
    text: "Design that goes beyond the surface. Dual-side Gorilla® Glass gives toughness. Advanced vibration motors make touch responses life-like. The symmetrical bezels and aluminium frame adds elegance, lightness and durability.",
    img: img4,
  },
  {
    title: "Подзаголовок",
    text: "Design that goes beyond the surface. Dual-side Gorilla® Glass gives toughness. Advanced vibration motors make touch responses life-like. The symmetrical bezels and aluminium frame adds elegance, lightness and durability.",
    img: img5,
  },
  {
    title: "Подзаголовок",
    text: "Design that goes beyond the surface. Dual-side Gorilla® Glass gives toughness. Advanced vibration motors make touch responses life-like. The symmetrical bezels and aluminium frame adds elegance, lightness and durability.",
    img: img6,
  },
];

function Earphones() {
  return (
    <section>
      <div className="container">
        <ul className={styles.col}>
          {data.map((item, i) => (
            <li key={i} className={styles.item}>
              <div className={styles.imageWrapper}>
                <Image src={item.img} alt={item.title} />
              </div>
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Earphones;
