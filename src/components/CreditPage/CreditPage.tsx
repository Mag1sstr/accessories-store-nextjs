import Image from "next/image";
import styles from "./CreditPage.module.css";
import bannerImg from "../../../public/assets/credit/ban.png";

function CreditPage() {
  return (
    <section>
      <div className="container">
        <div className={styles.banner}>
          <div className={styles.banImg}>
            <Image src={bannerImg} alt="banner" />
          </div>
          <div>
            <h2>От 10 000 до 600 000₽</h2>
            <p>в кредит, за 30 минут без похода в банк</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreditPage;
