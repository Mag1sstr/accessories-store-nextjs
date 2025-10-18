import styles from "./SingleProductPage.module.css";

function SingleProductPage() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.productInfo}>
          <div className={styles.productImages}>
            <div className={styles.mainImage}>111</div>
            <div className={styles.rowImages}>ffffff</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProductPage;
