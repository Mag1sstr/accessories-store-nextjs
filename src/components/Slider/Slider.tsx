import Image from "next/image";
import styles from "./Slider.module.css";
import Blur from "../Blur/Blur";

function Slider() {
  return (
    <div className={styles.wrapper}>
      <button className={styles.btn}>
        <svg
          width="16"
          height="28"
          viewBox="0 0 16 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 4L6 14L16 24L14 28L0 14L14 0L16 4Z" fill="#100E0E" />
        </svg>
      </button>
      <div className={styles.content}>
        <Image
          src="/assets/slider/tel.png"
          alt="iphone"
          width={398}
          height={479}
        />
        <div className={styles.info}>
          <p>
            Iph<span></span>ne 14
          </p>
          <button></button>
        </div>
      </div>
      <button className={styles.btn}>
        <svg
          width="16"
          height="28"
          viewBox="0 0 16 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 4L6 14L16 24L14 28L0 14L14 0L16 4Z" fill="#100E0E" />
        </svg>
      </button>
    </div>
  );
}

export default Slider;
