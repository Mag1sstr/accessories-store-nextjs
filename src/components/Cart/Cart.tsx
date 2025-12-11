"use client";
import Image from "next/image";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import styles from "./Cart.module.css";
import { useModals } from "@/hooks/useModals";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import CloseBtn from "../CloseBtn/CloseBtn";
import { useAppDispatch, useAppSelector } from "@/store/store";
import {
  decreaseCartItem,
  deleteCartItem,
  increaseCartItem,
  setCart,
} from "@/store/slices/cartSlice";
import { useEffect, useState } from "react";
import { isValidPhone } from "@/utils/isValidPhone";
import OrderIsCreate from "../OrderIsCreate/OrderIsCreate";
import { SubmitHandler, useForm } from "react-hook-form";

interface IForm {
  condition: boolean;
  tel: number;
}

function Cart() {
  const dispatch = useAppDispatch();
  const [tel, setTel] = useState("");
  const [isOrder, setIsOrder] = useState(false);

  const { openCart, setOpenCart } = useModals();
  const { cart } = useCart();

  const { viewedProducts } = useAppSelector((state) => state.viewed);
  const router = useRouter();

  const totalPrice = cart.reduce((acc, el) => acc + el.price * el.count, 0);
  const deliveryPrice = totalPrice * 0.03;

  const { register, handleSubmit, formState } = useForm<IForm>();

  const submit: SubmitHandler<IForm> = (data) => {
    setIsOrder(true);
  };
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

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOrder) {
      timer = setTimeout(() => {
        setOpenCart(false);
        setIsOrder(false);
        dispatch(setCart([]));
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [isOrder]);

  return (
    <ModalWrapper isOpen={openCart} setIsOpen={setOpenCart}>
      <div onMouseDown={(e) => e.stopPropagation()} className={styles.cart}>
        <CloseBtn onClick={handleCloseCart} />
        <OrderIsCreate isActive={isOrder} />
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
            {viewedProducts.length > 0 && (
              <div className={styles.viewed}>
                <h3 className={styles.viewedTitle}>Кстати, вы это смотрели</h3>
                <ul className={styles.viewedRow}>
                  {viewedProducts.map((product) => (
                    <li key={product.id}>
                      <img src={product.images[0]} alt={product.title} />
                      <p>{product.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
              <form onSubmit={handleSubmit(submit)} className={styles.right}>
                <div className={styles.sum}>
                  <p>
                    Доставка: <span>{deliveryPrice.toFixed(1)}$</span>
                  </p>
                  <p>
                    Сумма заказа: <span>{totalPrice}$</span>
                  </p>
                  <p>
                    Итого: <span>{totalPrice + deliveryPrice}$</span>
                  </p>
                </div>
                <div className={styles.option}>
                  <p>Выберите способ доставки</p>
                  <div className={styles.optionRow}>
                    <div className={styles.radio}>
                      <input type="radio" id="delivery" name="del" />
                      <label htmlFor="delivery">Доставка</label>
                    </div>
                    <div className={styles.radio}>
                      <input type="radio" id="pickup" name="del" />
                      <label htmlFor="delivery">Самовывоз</label>
                    </div>
                  </div>
                </div>
                <div className={styles.option}>
                  <p>Введите телефон</p>
                  <input
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                    className={`${styles.tel} ${
                      !isValidPhone(tel) && styles.telErr
                    }`}
                    type="tel"
                    placeholder="+7"
                  />
                </div>
                <button className={styles.btn} onClick={() => setIsOrder(true)}>
                  оформить заказ
                </button>
              </form>
              <div className={styles.line}></div>
            </div>
          </>
        )}
      </div>
    </ModalWrapper>
  );
}

export default Cart;
