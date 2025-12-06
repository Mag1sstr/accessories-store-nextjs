"use client";
import { useModals } from "@/hooks/useModals";
import InputField from "../InputField/InputField";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import styles from "./UpdateProductModal.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../Button/Button";
import SelectCategory from "../SelectCategory/SelectCategory";
import { useGetCategoriesQuery, useUpdateProductMutation } from "@/api/api";
import { useCart } from "@/hooks/useCart";

interface IInputs {
  title: string;
  price: number;
  description: string;
}

function UpdateProductModal() {
  const { openUpdateModal, setOpenUpdateModal } = useModals();
  const { addedProduct } = useCart();

  const { data: categories } = useGetCategoriesQuery(null);
  const [updateProduct] = useUpdateProductMutation();

  const { register, handleSubmit } = useForm<IInputs>();

  const submit: SubmitHandler<IInputs> = (data) => {
    updateProduct({ id: addedProduct?.id, ...data });
  };

  return (
    <ModalWrapper isOpen={openUpdateModal} setIsOpen={setOpenUpdateModal}>
      <form
        onMouseDown={(e) => e.stopPropagation()}
        className={styles.form}
        onSubmit={handleSubmit(submit)}
      >
        <h1 className={styles.title}>Редактирование</h1>
        <InputField />
        <InputField />

        <select
          onChange={(e) => console.log(e.target.value)}
          className={styles.select}
        >
          <option>Выберите категорию</option>
          {categories?.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>

        <Button type="submit" title="Изменить" />
      </form>
    </ModalWrapper>
  );
}

export default UpdateProductModal;
