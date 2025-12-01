"use client";
import { useModals } from "@/hooks/useModals";
import InputField from "../InputField/InputField";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import styles from "./UpdateProductModal.module.css";

function UpdateProductModal() {
  const { openUpdateModal, setOpenUpdateModal } = useModals();
  return (
    <ModalWrapper isOpen={openUpdateModal} setIsOpen={setOpenUpdateModal}>
      <div onMouseDown={(e) => e.stopPropagation()} className={styles.form}>
        <h1>Редактирование</h1>
        <InputField />
        <InputField />
      </div>
    </ModalWrapper>
  );
}

export default UpdateProductModal;
