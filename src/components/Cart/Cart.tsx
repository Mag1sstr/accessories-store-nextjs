"use client";
import Image from "next/image";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import styles from "./Cart.module.css";
import { useModals } from "@/hooks/useModals";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import CloseBtn from "../CloseBtn/CloseBtn";

function Cart() {
  const { openCart, setOpenCart } = useModals();
  const { cart } = useCart();
  const router = useRouter();

  const handleOpenProducts = () => {
    router.push("/products");
    setOpenCart(false);
  };
  return (
    <ModalWrapper isOpen={openCart} setIsOpen={setOpenCart}>
      <div onMouseDown={(e) => e.stopPropagation()} className={styles.cart}>
        {!cart.length ? (
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
        ) : (
          <>
            <h2 className={styles.title}>Оформление заказа</h2>
            <div className={styles.row}>
              <div className={styles.left}>
                <ul className={styles.col}>
                  {cart.map((product) => (
                    <li key={product.id} className={styles.item}>
                      <CloseBtn className={styles.close} />
                      <Image
                        src={product.images[0]}
                        alt={product.title}
                        width={64}
                        height={64}
                        className={styles.image}
                      />
                      <div>
                        <h3 className={styles.name}>{product.title}</h3>
                        <div className={styles.itemRow}>
                          <p className={styles.price}>{product.price}$</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.line}></div>
              <div className={styles.right}></div>
              <div className={styles.line}></div>
            </div>
          </>
        )}
      </div>
    </ModalWrapper>
  );
}

export default Cart;
