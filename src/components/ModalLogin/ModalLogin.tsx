import { createPortal } from "react-dom";
import styles from "./ModalLogin.module.css";

function ModalLogin() {
  return (
    <section className={styles.wrapper}>
      <form className={styles.modal}>
        <h2>Войти в аккаунт</h2>
        <input className={styles.field} type="text" placeholder="Почта" />
        <input className={styles.field} type="password" placeholder="Пароль" />
        <button type="submit">войти</button>
      </form>
    </section>
  );
}

export default ModalLogin;
