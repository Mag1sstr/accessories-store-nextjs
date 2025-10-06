"use client";
import Image from "next/image";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import styles from "./Cart.module.css";
import { useModals } from "@/hooks/useModals";
import { useRouter } from "next/navigation";

function Cart() {
  const { openCart, setOpenCart } = useModals();
  const router = useRouter();

  const handleOpenProducts = () => {
    router.push("/products");
    setOpenCart(false);
  };
  return (
    <ModalWrapper isOpen={openCart} setIsOpen={setOpenCart}>
      <div onMouseDown={(e) => e.stopPropagation()} className={styles.cart}>
        <div className={styles.not}>
          <Image
            src="/assets/icons/box.png"
            alt="box"
            width={108}
            height={100}
          />
          <h2>В корзине пока ничего нет</h2>
          <p>Но вы можете легко это исправить</p>
          <button onClick={handleOpenProducts}>Начать покупки</button>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default Cart;
