"use client";
import Image from "next/image";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import styles from "./Cart.module.css";
import { useModals } from "@/hooks/useModals";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import CloseBtn from "../CloseBtn/CloseBtn";
import { useAppDispatch } from "@/store/store";
import {
  decreaseCartItem,
  deleteCartItem,
  increaseCartItem,
} from "@/store/slices/cartSlice";

function Cart() {
  const dispatch = useAppDispatch();
  const { openCart, setOpenCart } = useModals();
  const { cart } = useCart();
  const router = useRouter();

  const totalPrice = cart.reduce((acc, el) => acc + el.price * el.count, 0);

  const handleOpenProducts = () => {
    router.push("/products");
    setOpenCart(false);
  };
  const handleDeleteCartItem = (id: number) => {
    dispatch(deleteCartItem(id));
  };
  const handleCloseCart = () => {
    setOpenCart(false);
  };

  return (
    <ModalWrapper isOpen={openCart} setIsOpen={setOpenCart}>
      <div onMouseDown={(e) => e.stopPropagation()} className={styles.cart}>
        <CloseBtn onClick={handleCloseCart} />
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
                      <CloseBtn
                        onClick={() => handleDeleteCartItem(product.id)}
                        className={styles.close}
                      />
                      <Image
                        src={product.images[0]}
                        alt={product.title}
                        width={64}
                        height={64}
                        className={styles.image}
                      />
                      <div className={styles.details}>
                        <h3 className={styles.name}>{product.title}</h3>
                        <div className={styles.itemRow}>
                          <p className={styles.price}>
                            {product.price * product.count}$
                          </p>
                          <div className={styles.counter}>
                            <button
                              onClick={() =>
                                dispatch(decreaseCartItem(product.id))
                              }
                            >
                              -
                            </button>
                            <span>{product.count}</span>
                            <button
                              onClick={() =>
                                dispatch(increaseCartItem(product.id))
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.line}></div>
              <div className={styles.right}>
                <div className={styles.sum}>
                  <p>
                    Доставка: <span>0$</span>
                  </p>
                  <p>
                    Сумма заказа: <span>{totalPrice}$</span>
                  </p>
                  <p>
                    Итого: <span>{totalPrice}$</span>
                  </p>
                </div>
                <div className={styles.option}>
                  <p>Выберите способ доставки</p>
                  <input type="radio" />
                </div>
              </div>
              <div className={styles.line}></div>
            </div>
          </>
        )}
      </div>
    </ModalWrapper>
  );
}

export default Cart;
