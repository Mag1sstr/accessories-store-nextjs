import Image from "next/image";
import styles from "./Subscription.module.css";

function Subscription() {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.image}>
            <Image
              src="/assets/subscription/img.png"
              alt="phone"
              width={484}
              height={371}
            />
          </div>
          <div className={styles.content}>
            <h2>Подписка на рассылку акций!</h2>
            <p>Подпишитесь на рассылку, чтобы узнавать о всех акциях первым</p>
            <form className={styles.form}>
              <h3>Скидка 10%</h3>
              <p>на первую покупку за подписку</p>
              <div>
                <input
                  className={styles.input}
                  type="number"
                  placeholder="+ 7"
                />
                <button className={styles.btn}>подписаться</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Subscription;
