import Image from "next/image";
import styles from "./OrderIsCreate.module.css";
import icon from "../../../public/assets/order/icon.png";
interface IProps {
  isActive: boolean;
}

function OrderIsCreate({ isActive }: IProps) {
  return (
    <div className={`${styles.wrapper} ${isActive && styles.active}`}>
      <div className={styles.row}>
        <Image className={styles.icon} src={icon} alt="icon" />
        <div className={styles.info}>
          <h2 className={styles.title}>Ваш заказ создан!</h2>
          <p className={styles.subTitle}>но все менеджеры уже спят{"("}</p>
          <p className={styles.text}>
            Мы позвоним вам, чтобы подтвердить заказ в 9 часов утра по Москве
          </p>

          <button>продолжить покупки</button>
        </div>
      </div>
    </div>
  );
}

export default OrderIsCreate;
