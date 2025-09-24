import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
export default function Products() {
  return (
    <>
      <Header />
      <div className="container">
        <div className={styles.info}>
          <div className={styles.item}>
            <Image
              src="/assets/icons/apple-logo.png"
              alt="apple-icon"
              width={80}
              height={80}
            />
            <div>
              <p>
                Только оригинальная продукция Apple с гарантией и бесплатной
                доставкой
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <Image
              src="/assets/icons/help.png"
              alt="apple-icon"
              width={80}
              height={80}
            />
            <div>
              <p>Мы работаем с 10:00 до 22:00</p>
              <p>
                В это время доступна доставка, самовывоз и клиентский отдел.
                Создать заказ на сайте можно в любое время суток
              </p>
            </div>
          </div>
        </div>
      </div>
      <Breadcrumbs />
    </>
  );
}
