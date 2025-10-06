import Image from "next/image";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import styles from "./Cart.module.css";

function Cart() {
  return (
    <ModalWrapper>
      <div className={styles.cart}>
        <div className={styles.not}>
          <Image
            src="/assets/icons/box.png"
            alt="box"
            width={108}
            height={100}
          />
        </div>
      </div>
    </ModalWrapper>
  );
}

export default Cart;
