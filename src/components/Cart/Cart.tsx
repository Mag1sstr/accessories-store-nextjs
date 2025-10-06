"use client";
import Image from "next/image";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import styles from "./Cart.module.css";
import { useModals } from "@/hooks/useModals";

function Cart() {
  const { openCart, setOpenCart } = useModals();
  return (
    <ModalWrapper isOpen={openCart} setIsOpen={setOpenCart}>
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
