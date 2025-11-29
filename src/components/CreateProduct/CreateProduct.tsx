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
  const [categoryId, setCategoryId] = useState<number | null>(null);

  const [createProduct] = useCreateProductMutation();

  const submit: SubmitHandler<IInputs> = () => {
    fetch("https://api.escuelajs.co/api/v1/products/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "New Productddd",
        price: 10,
        description: "A description",
        categoryId: 36,
        images: ["https://placeimg.com/640/480/any"],
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("RESPONSE:", data))
      .catch((err) => console.error("ERROR:", err));
  };

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
