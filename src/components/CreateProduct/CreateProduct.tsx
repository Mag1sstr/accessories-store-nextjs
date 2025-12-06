"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import styles from "./CreateProduct.module.css";
import { useState } from "react";
import { useCreateProductMutation } from "@/api/api";
import SelectCategory from "../SelectCategory/SelectCategory";
import { isAdmin } from "@/utils/isAdmin";

interface IInputs {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}
function CreateProduct() {
  const { register, handleSubmit } = useForm<IInputs>();
  const [file, setFile] = useState<FileList | null>(null);
  const [categoryId, setCategoryId] = useState<null | number>(0);

  const [createProduct, { data }] = useCreateProductMutation();

  const submit: SubmitHandler<IInputs> = ({ title, description, price }) => {
    createProduct({
      title,
      price,
      categoryId: categoryId!,
      description,
      images: ["https://placeimg.com/640/480/any"],
    });
  };

  console.log(data);

  return (
    isAdmin() && (
      <section className={styles.wrapper}>
        <div className="container">
          <form onSubmit={handleSubmit(submit)} className={styles.form}>
            <h2 className={styles.title}>Добавить новый продукт</h2>
            <InputField
              placeholder="Название"
              register={register("title", { required: true })}
            />
            <InputField
              placeholder="Цена"
              type="number"
              register={register("price", { required: true })}
            />
            <InputField
              placeholder="Описание"
              register={register("description", { required: true })}
            />
            <SelectCategory setCategoryId={setCategoryId} />
            <label htmlFor="input__file" className={styles.labelFile}>
              Выберите изображение
            </label>
            <input
              type="file"
              id="input__file"
              onChange={(e) => setFile(e.target.files)}
              className={styles.inputFile}
            />
            <button className={styles.btn}>Добавить</button>
          </form>
        </div>
      </section>
    )
  );
}

export default CreateProduct;
