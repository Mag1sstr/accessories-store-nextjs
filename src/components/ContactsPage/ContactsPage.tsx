"use client";
import { useModals } from "@/hooks/useModals";
import styles from "./ContactsPage.module.css";

function ContactsPage() {
  const { setOpenCallModal } = useModals();

  const handleOpenCallModal = () => {
    setOpenCallModal(true);
  };
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.contacts}>
            <h1 className={styles.title}>Контакты</h1>
            <div className={styles.call}>
              <h2>Можно позвонить</h2>
              <p className={styles.tel}>{"+7 (812) 704-86-97"}</p>
              <p>на связи с 10:00 до 22:00</p>
            </div>
            <div className={styles.wecall}>
              <h2>Можем позвонить мы</h2>
              <button onClick={handleOpenCallModal}>заказать звонок</button>
            </div>
            <div className={styles.social}>
              <h2>Можно написать</h2>
              <div className={styles.socialRow}>info@AppleShops.ru</div>
            </div>
          </div>
          <div className={styles.location}>
            <div className={styles.locationLeft}>
              <h2>Можно приехать</h2>
              <ul className={styles.locationList}>
                <li>г. Санкт-Петербург, Лиговский проспект 10/118</li>
                <li>г. Санкт-Петербург, Лиговский проспект 10/118</li>
                <li>г. Санкт-Петербург, Лиговский проспект 10/118</li>
                <li>г. Санкт-Петербург, Лиговский проспект 10/118</li>
              </ul>
            </div>
            <div className={styles.locationRight}>
              <a
                href="https://yandex.kz/maps/ru/213/moscow/?utm_medium=mapframe&utm_source=maps"
                style={{
                  color: "#eee",
                  fontSize: 12,
                  position: "absolute",
                  top: 0,
                }}
              >
                Москва
              </a>
              <a
                href="https://yandex.kz/maps/ru/213/moscow/?feedback=map%2Fedit&feedback-context=map.controls&ll=37.512113%2C55.742739&utm_medium=mapframe&utm_source=maps&z=13.69"
                style={{
                  color: "#eee",
                  fontSize: 12,
                  position: "absolute",
                  top: 14,
                }}
              >
                Яндекс Карты
              </a>
              <iframe
                src="https://yandex.kz/map-widget/v1/?feedback=map%2Fedit&feedback-context=map.controls&ll=37.512113%2C55.742739&z=13.69"
                width="100%"
                height="100%"
                frameBorder="transparent"
                style={{ position: "absolute" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactsPage;
