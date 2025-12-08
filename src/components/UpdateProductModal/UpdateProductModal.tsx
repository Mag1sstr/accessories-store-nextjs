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
import { useEffect, useState } from "react";
import { title } from "node:process";

interface IInputs {
  title: string;
  price: number;
  description: string;
}

function UpdateProductModal() {
  const [selectCategory, setSelectCategory] = useState<number | null>(null);

  const { openUpdateModal, setOpenUpdateModal } = useModals();
  const { addedProduct } = useCart();

  const { data: categories } = useGetCategoriesQuery(null);
  const [updateProduct] = useUpdateProductMutation();

  const { register, handleSubmit, reset } = useForm<IInputs>({
    mode: "onChange",
  });

  const submit: SubmitHandler<IInputs> = (data) => {
    updateProduct({
      id: addedProduct?.id,
      category: { id: selectCategory ?? addedProduct?.id },
      ...data,
    });
  };

  useEffect(() => {
    if (addedProduct) {
      reset({
        title: addedProduct.title,
        price: addedProduct.price,
      });
    }
  }, [addedProduct, reset]);

  return (
    <ModalWrapper isOpen={openUpdateModal} setIsOpen={setOpenUpdateModal}>
      <form
        onMouseDown={(e) => e.stopPropagation()}
        className={styles.form}
        onSubmit={handleSubmit(submit)}
      >
        <h1 className={styles.title}>Редактирование</h1>
        <InputField register={register("title")} />
        <InputField register={register("price")} />

        <select
          onChange={(e) => setSelectCategory(+e.target.value)}
          className={styles.select}
        >
          <option>Выберите категорию</option>
          {categories?.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <Button
          type="button"
          onClick={() => {
            fetch(
              `https://api.escuelajs.co/api/v1/products/${addedProduct?.id}`,
              {
                method: "put",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  price: 228,
                }),
              }
            )
              .then((res) => console.log(res))
              .catch((err) => console.log(err));
          }}
          title="Изменить"
        />
      </form>
    </ModalWrapper>
  );
}

export default UpdateProductModal;
