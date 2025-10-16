import styles from "./NotFound.module.css";
function NotFound() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.not}>
        <h1>Ошибка 404</h1>
        <p>Кажется, такой страницы больше не существует.</p>
        <button></button>
      </div>
    </section>
  );
}

export default NotFound;
