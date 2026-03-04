"use client";
import styles from "./Slider.module.css";
import { useEffect, useState } from "react";

const banners = [
  "/assets/slider/2.webp",
  "/assets/slider/3.webp",
  "/assets/slider/1.webp",
];

function Slider() {
  const [curr, setCurr] = useState(0);

  const handleNext = () =>
    setCurr((prev) => (prev < banners.length - 1 ? prev + 1 : 0));
  const handlePrev = () =>
    setCurr((prev) => (prev > 0 ? prev - 1 : banners.length - 1));

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurr((prev) => (prev < banners.length - 1 ? prev + 1 : 0));
    }, 10000);

    return () => clearTimeout(timer);
  }, [curr]);
  return (
    <div className={styles.wrapper}>
      <button onClick={handlePrev} className={styles.btn}>
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
      <div
        className={styles.slider}
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {banners.map((b, index) => (
          <div
            key={index}
            className={styles.slide}
            style={{ backgroundImage: `url(${b})` }}
          ></div>
        ))}
      </div>
      {/* <div className={styles.content}>
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
      </div> */}
      <button onClick={handleNext} className={styles.btn}>
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
