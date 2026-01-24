"use client";
import styles from "./Orders.module.css";
import { useAppSelector } from "@/store/store";
import OrderCard from "../OrderCard/OrderCard";

function Orders() {
  const { orders } = useAppSelector((state) => state.orders);

  return (
    <section className={styles.wrapper}>
      <div className="container">
        {!orders.length ? (
          <h1 className={styles.title}>У вас нет заказов</h1>
        ) : (
          <>
            <h1 className={styles.title}>Мои заказы</h1>
            <ul className={styles.ordersList}>
              {orders.map((order, i) => {
                const totalPrice = order.items.reduce(
                  (acc, el) => acc + el.price * el.count,
                  0,
                );
                return (
                  <OrderCard
                    key={order.orderNumber}
                    {...order}
                    i={i}
                    totalPrice={totalPrice}
                  />
                );
              })}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}

export default Orders;
