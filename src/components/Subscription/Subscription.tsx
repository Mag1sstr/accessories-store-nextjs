import styles from "./Subscription.module.css";

function Subscription() {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.image}></div>
          <div className={styles.content}>
            <h2>Подписка на рассылку акций!</h2>
            <p>Подпишитесь на рассылку, чтобы узнавать о всех акциях первым</p>
            <form className={styles.form}>
              <h3>Скидка 10%</h3>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Subscription;
