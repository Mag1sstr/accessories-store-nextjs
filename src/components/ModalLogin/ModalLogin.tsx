"use client";
import styles from "./ModalLogin.module.css";
import { useModals } from "@/hooks/useModals";

function ModalLogin() {
  const { openLoginModal, setOpenLoginModal } = useModals();

  const handleCloseModal = () => {
    setOpenLoginModal(false);
  };

  console.log(openLoginModal);

  return (
    <section
      onMouseDown={handleCloseModal}
      className={`${styles.wrapper} ${openLoginModal && styles.open}`}
    >
      <form onMouseDown={(e) => e.stopPropagation()} className={styles.modal}>
        <h2>Войти в аккаунт</h2>
        <input className={styles.field} type="text" placeholder="Почта" />
        <input className={styles.field} type="password" placeholder="Пароль" />
        <button type="submit" className={styles.btn}>
          войти
        </button>
        <p>Создать аккаунт</p>
      </form>
    </section>
  );
}

export default ModalLogin;
