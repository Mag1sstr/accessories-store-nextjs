import Image from "next/image";
import styles from "./CreditPage.module.css";
import bannerImg from "../../../public/assets/credit/ban.png";
import personImg from "../../../public/assets/credit/person.png";

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
        <div className={styles.form}>
          <ul className={styles.formInfo}>
            <li className={styles.formItem}>
              <h3>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 8H14.388L15.511 4.633C15.713 4.025 15.611 3.351 15.236 2.831C14.861 2.311 14.253 2 13.612 2H12C11.703 2 11.422 2.132 11.231 2.36L6.531 8H4C2.897 8 2 8.897 2 10V19C2 20.103 2.897 21 4 21H17.307C17.7139 20.9986 18.1108 20.8738 18.4452 20.6421C18.7797 20.4103 19.0359 20.0825 19.18 19.702L21.937 12.351C21.9789 12.2387 22.0002 12.1198 22 12V10C22 8.897 21.103 8 20 8ZM4 10H6V19H4V10ZM20 11.819L17.307 19H8V9.362L12.468 4H13.614L12.052 8.683C12.0013 8.83331 11.9871 8.99355 12.0107 9.15043C12.0343 9.3073 12.095 9.45629 12.1877 9.58504C12.2803 9.71379 12.4024 9.8186 12.5436 9.89076C12.6849 9.96293 12.8414 10.0004 13 10H20V11.819Z"
                    fill="#0071E4"
                  />
                </svg>
                80% заявок одобряют
              </h3>
              <p>Максимально высокая вероятность одобрения</p>
            </li>
            <li className={styles.formItem}>
              <h3>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 12V22H8.00003V14H6.00003V12H10ZM18 14V20C18 21.11 17.11 22 16 22H14C13.4696 22 12.9609 21.7893 12.5858 21.4142C12.2107 21.0391 12 20.5304 12 20V14C12 13.4696 12.2107 12.9609 12.5858 12.5858C12.9609 12.2107 13.4696 12 14 12H16C16.5305 12 17.0392 12.2107 17.4142 12.5858C17.7893 12.9609 18 13.4696 18 14ZM14 14V20H16V14H14ZM11.5 3C14.15 3 16.55 4 18.4 5.6L21 3V10H14L16.62 7.38C15.23 6.22 13.46 5.5 11.5 5.5C7.96003 5.5 4.95003 7.81 3.90003 11L1.53003 10.22C2.92003 6.03 6.85003 3 11.5 3Z"
                    fill="#0071E4"
                  />
                </svg>
                10 минут на заполнение
              </h3>
              <p>1 анкета для всех банков сразу</p>
            </li>
            <li className={styles.formItem}>
              <h3>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.257 10.962C21.731 11.582 21.731 12.419 21.257 13.038C19.764 14.987 16.182 19 12 19C7.81801 19 4.23601 14.987 2.74301 13.038C2.51239 12.7411 2.38721 12.3759 2.38721 12C2.38721 11.6241 2.51239 11.2589 2.74301 10.962C4.23601 9.013 7.81801 5 12 5C16.182 5 19.764 9.013 21.257 10.962V10.962Z"
                    stroke="#0071E4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="#0071E4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Без скрытых платежей
              </h3>
              <p>плата за рассрочку заранее включена в стоимость товаров </p>
            </li>
          </ul>
          <div className={styles.contact}>
            <div className={styles.contactRow}>
              <Image src={personImg} alt="person" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreditPage;
