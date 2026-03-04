import Image from "next/image";
import styles from "./OrderIsCreate.module.css";
import icon from "../../../public/assets/order/icon.png";
import CloseBtn from "../CloseBtn/CloseBtn";
interface IProps {
  isActive: boolean;
  onClose: () => void;
}

function OrderIsCreate({ isActive, onClose }: IProps) {
  return (
    <div className={`${styles.wrapper} ${isActive && styles.active}`}>
      <CloseBtn onClick={onClose} />
      <div className={styles.row}>
        <div className={styles.icon}>
          <Image src={icon} alt="icon" />
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>Ваш заказ создан!</h2>
          <p className={styles.subTitle}>но все менеджеры уже спят{"("}</p>
          <p className={styles.text}>
            Мы позвоним вам, чтобы подтвердить заказ в 9 часов утра по Москве
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderIsCreate;
