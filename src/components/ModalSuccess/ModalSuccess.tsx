import Image from "next/image";
import styles from "./ModalSuccess.module.css";

interface IProps {
  isActive: boolean;
  text: string;
  className?: string;
}

function ModalSuccess({ isActive, text, className }: IProps) {
  return (
    <div
      className={`${styles.success} ${className}  ${
        isActive && styles.active
      } `}
    >
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
