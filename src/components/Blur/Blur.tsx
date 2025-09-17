import { useModals } from "@/hooks/useModals";
import styles from "./Blur.module.css";

function Blur() {
  const { openMenu } = useModals();

  return (
    <div className={`${styles.blur} ${openMenu && styles.blurActive}`}></div>
  );
}

export default Blur;
