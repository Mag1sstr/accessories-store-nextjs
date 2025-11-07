"use client";
import { useModals } from "@/hooks/useModals";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import styles from "./CallModal.module.css";
import CloseBtn from "../CloseBtn/CloseBtn";
import Button from "../Button/Button";

function CallModal() {
  const { openCallModal, setOpenCallModal } = useModals();
  return (
    <ModalWrapper isOpen={openCallModal} setIsOpen={setOpenCallModal}>
      <div onMouseDown={(e) => e.stopPropagation()} className={styles.modal}>
        <CloseBtn onClick={() => setOpenCallModal(false)} />
        <h2 className={styles.title}>Закажите обратный звонок</h2>
        <p className={styles.subtitle}>Менеджер позвонит вам через 3 минуты</p>
        <input className={styles.input} type="tel" placeholder="+ 7" />
        <Button title="заказать звонок" />
      </div>
    </ModalWrapper>
  );
}

export default CallModal;
