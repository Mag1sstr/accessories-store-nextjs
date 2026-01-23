import { ICart } from "@/types/interfaces";
import styles from "./OrderCard.module.css";
import { IOrder } from "@/store/slices/ordersSlice";
import { formatDate } from "@/utils/formatDate";
import { motion } from "motion/react";
interface IProps extends IOrder {
  i: number;
  totalPrice: number;
}
function OrderCard({ i, totalPrice, ...order }: IProps) {
  return (
    <motion.li
      initial={{ transform: "scale(0.8)", opacity: 0 }}
      animate={{ transform: "scale(1)", opacity: 1 }}
      transition={{ delay: i > 0 ? i - 0.9 : 0, duration: 0.2 }}
      key={order.orderNumber}
      className={styles.order}
    >
      <div className={styles.top}>
        <div className={styles.topRow}>
          <h2>Заказ #{order.orderNumber}</h2>
          <p className={styles.date}>{formatDate(order.createdAt)}</p>
        </div>
        <div className={styles.topRow}>
          <p className={styles.status}>Оплачено</p>
          <button className={styles.btn}>
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9999 1.54878C16.0005 1.74801 15.9628 1.94485 15.8897 2.12486C15.8165 2.30486 15.7097 2.46345 15.5771 2.58896L8.72061 9.03012C8.51613 9.22627 8.25965 9.3335 7.99496 9.3335C7.73027 9.3335 7.47379 9.22627 7.26932 9.03012L0.412821 2.36226C0.179452 2.1359 0.0326951 1.81063 0.0048352 1.45799C-0.0230247 1.10536 0.0702944 0.754257 0.264263 0.481919C0.458232 0.209581 0.736961 0.0383186 1.03913 0.00580592C1.34131 -0.0267058 1.64217 0.0821952 1.87554 0.308555L8.00068 6.26963L14.1258 0.508591C14.2936 0.345517 14.4978 0.241929 14.7144 0.210084C14.931 0.178239 15.1509 0.219468 15.3481 0.328896C15.5452 0.438323 15.7114 0.611368 15.8269 0.827554C15.9424 1.04374 16.0025 1.29402 15.9999 1.54878Z"
                fill="#AEAEAE"
              />
            </svg>
          </button>
        </div>
      </div>
      {order.items.map((item) => (
        <div key={item.id} className={styles.item}>
          <div className={styles.itemRow}>
            <img
              className={styles.img}
              src={item.images[0] || ""}
              alt={item.title}
            />
            <div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDesc}>{item.category.name}</p>
            </div>
          </div>
          <div className={styles.right}>
            <p className={styles.price}>{item.price * item.count} $</p>
            <p className={styles.count}>{item.count} шт.</p>
          </div>
        </div>
      ))}

      <div className={styles.footer}>
        <p className={styles.total}>
          Итого: <strong>{totalPrice} ₽</strong>
        </p>
      </div>
    </motion.li>
  );
}

export default OrderCard;
