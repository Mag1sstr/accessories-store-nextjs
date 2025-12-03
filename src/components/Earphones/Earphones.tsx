import styles from "./Earphones.module.css";
import img1 from "../../../public/assets/ear/1.png";
import img2 from "../../../public/assets/ear/2.png";
import img3 from "../../../public/assets/ear/3.png";
import img4 from "../../../public/assets/ear/4.png";
import img5 from "../../../public/assets/ear/5.png";
import img6 from "../../../public/assets/ear/6.png";

const data = [
  {
    title: "Подзаголовок",
    text: "Design that goes beyond the surface. Dual-side Gorilla® Glass gives toughness. Advanced vibration motors make touch responses life-like. The symmetrical bezels and aluminium frame adds elegance, lightness and durability.",
    img: img1,
  },
  {
    title: "Текст про OS",
    text: "Design that goes beyond the surface. Dual-side Gorilla® Glass gives toughness. Advanced vibration motors make touch responses life-like. The symmetrical bezels and aluminium frame adds elegance, lightness and durability.",
    img: img2,
  },
  {
    title: "Текст про OS",
    text: "Design that goes beyond the surface. Dual-side Gorilla® Glass gives toughness. Advanced vibration motors make touch responses life-like. The symmetrical bezels and aluminium frame adds elegance, lightness and durability.",
    img: img3,
  },
  {
    title: "Подзаголовок",
    text: "Design that goes beyond the surface. Dual-side Gorilla® Glass gives toughness. Advanced vibration motors make touch responses life-like. The symmetrical bezels and aluminium frame adds elegance, lightness and durability.",
    img: img4,
  },
  {
    title: "Подзаголовок",
    text: "Design that goes beyond the surface. Dual-side Gorilla® Glass gives toughness. Advanced vibration motors make touch responses life-like. The symmetrical bezels and aluminium frame adds elegance, lightness and durability.",
    img: img5,
  },
];

function Earphones() {
  return (
    <section>
      <div className="container">
        <ul className={styles.col}>
          <li>
            <div className={styles.imageWrapper}>
              <img src="" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Earphones;
