import styles from "./NotFound.module.css";
import imageTel from "../../../public/assets/notfound/404.png";
import Image from "next/image";
import Button from "../Button/Button";
function NotFound() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.not}>
        <h1>Ошибка 404</h1>
        <p>Кажется, такой страницы больше не существует.</p>
        <Button title="вернуться на главную" fontWeight={500} />
        <div className={styles.image}>
          <Image src={imageTel} alt="404" width={456} height={456} />
        </div>
      </div>
    </section>
  );
}

export default NotFound;
