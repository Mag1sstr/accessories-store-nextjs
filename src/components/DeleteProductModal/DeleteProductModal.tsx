"use client";
import styles from "./DeleteProductModal.module.css";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { useModals } from "@/hooks/useModals";
import { useAppSelector } from "@/store/store";
import { useDeleteProductMutation } from "@/api/api";
import { useEffect, useState } from "react";
import ModalSuccess from "../ModalSuccess/ModalSuccess";

function DeleteProductModal() {
  const [success, setSuccess] = useState(false);
  const { openDeleteModal, setOpenDeleteModal } = useModals();
  const { addedProduct } = useAppSelector((state) => state.cart);

  const [deleteProduct, { isSuccess }] = useDeleteProductMutation();

  const handleDelete = () => {
    deleteProduct(addedProduct?.id!);
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isSuccess) {
      setSuccess(true);
      timer = setTimeout(() => {
        setOpenDeleteModal(false);
        setSuccess(false);
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [isSuccess]);

  return (
    <ModalWrapper isOpen={openDeleteModal} setIsOpen={setOpenDeleteModal}>
      <div onMouseDown={(e) => e.stopPropagation()} className={styles.form}>
        <ModalSuccess isActive={success} text="Продукт удален" />
        <p>
          Удалить <span>{addedProduct?.title}?</span>
        </p>

        <div className={styles.row}>
          <button onClick={handleDelete}>Удалить</button>
          <button onClick={() => setOpenDeleteModal(false)}>Отмена</button>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default DeleteProductModal;
