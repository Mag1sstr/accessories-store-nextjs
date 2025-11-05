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
        <div className={styles.steps}>
          <h3>Получите кредит в 4 шага</h3>
          <div className={styles.stepsRow}>
            <div className={styles.step}>
              <div className={styles.stepNum}>1</div>
              <p>Выберите товар и оформите заказ с оплатой в кредит</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>2</div>
              <p>Согласуйте условия кредитования с нашим менеджером</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>3</div>
              <p>Получите решение от банков и выберите лучшие условия</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>4</div>
              <p>Ожидайте доставку вашего заказа (или самовывоз)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreditPage;
