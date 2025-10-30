"use client";
import { useCart } from "@/hooks/useCart";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import styles from "./ModalAddedProduct.module.css";
import Image from "next/image";

import icon1 from "../../../public/assets/wp.png";
import icon2 from "../../../public/assets/tg.png";
import icon3 from "../../../public/assets/vk.png";
import { useModals } from "@/hooks/useModals";
import CloseBtn from "../CloseBtn/CloseBtn";
import Button from "../Button/Button";

function ModalAddedProduct() {
  const { addedProduct } = useCart();
  const { openAddedModal, setOpenAddedModal, setOpenCart } = useModals();

  const handleOrder = () => {
    setOpenAddedModal(false);
    setOpenCart(true);
  };

  return (
    <ModalWrapper isOpen={openAddedModal} setIsOpen={setOpenAddedModal}>
      <div onMouseDown={(e) => e.stopPropagation()} className={styles.inner}>
        <CloseBtn onClick={() => setOpenAddedModal(false)} />
        <div className={styles.row}>
          {addedProduct && (
            <Image
              src={addedProduct.images[0]}
              alt={addedProduct.title}
              width={150}
              height={162}
            />
          )}

          <div className={styles.info}>
            <p>Добавлен в корзину</p>
            <h3>{addedProduct?.title}</h3>
            <div className={styles.btnRow}>
              <Button title="оформить заказ" onClick={handleOrder} />
              <Button
                background="white"
                className={styles.btn}
                title="продолжить покупки"
                onClick={() => setOpenAddedModal(false)}
              />
            </div>
          </div>
        </div>
        <div className={styles.help}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" rx="16" fill="#C0E6FF" />
            <path
              d="M10.5371 12.6875H12.5586C12.6465 11.3984 13.5156 10.5879 14.8633 10.5879C16.2012 10.5879 17.0703 11.3984 17.0703 12.502C17.0703 13.5078 16.6504 14.0742 15.4688 14.7871C14.1309 15.5879 13.5352 16.4668 13.584 17.8438L13.5938 18.625H15.6152V18.0293C15.6152 17.0234 15.9766 16.5059 17.2363 15.7637C18.5254 14.9922 19.2871 13.9277 19.2871 12.4141C19.2871 10.3242 17.5488 8.79102 14.9707 8.79102C12.1387 8.79102 10.625 10.4707 10.5371 12.6875ZM14.6191 23.1465C15.3516 23.1465 15.9082 22.5996 15.9082 21.8867C15.9082 21.1738 15.3516 20.627 14.6191 20.627C13.9062 20.627 13.3398 21.1738 13.3398 21.8867C13.3398 22.5996 13.9062 23.1465 14.6191 23.1465Z"
              fill="#0071E4"
            />
          </svg>
          <p className={styles.helpTitle}>Нужна помощь с заказом?</p>
          <p className={styles.subtitle}>Звоните, пишите мы на связи</p>
          <div className={styles.contacts}>
            <p>+7 812 561 96 62</p>
            <Image src={icon1} alt="icon" width={32} height={32} />
            <Image src={icon2} alt="icon" width={32} height={32} />
            <Image src={icon3} alt="icon" width={32} height={32} />
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default ModalAddedProduct;
