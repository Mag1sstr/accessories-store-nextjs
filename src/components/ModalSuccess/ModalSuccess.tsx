import Image from "next/image";
import styles from "./ModalSuccess.module.css";

interface IProps {
  isActive: boolean;
  text: string;
}

function ModalSuccess({ isActive, text }: IProps) {
  return (
    <div className={`${styles.success} ${isActive && styles.active}`}>
      <Image
        className={styles.image}
        src="/assets/icons/check.png"
        width={100}
        height={100}
        alt="check"
      />
      <p>{text}</p>
    </div>
  );
}

export default ModalSuccess;
