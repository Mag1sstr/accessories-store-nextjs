"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./RegModal.module.css";
import { useModals } from "@/hooks/useModals";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRegUserMutation } from "@/api/api";
import ModalSuccess from "../ModalSuccess/ModalSuccess";

interface IFields {
  name: string;
  email: string;
  password: string;
}

function RegModal() {
  const [regSuccess, setRegSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFields>();
  const { openRegModal, setOpenRegModal } = useModals();
  const [regUser, { data, isSuccess }] = useRegUserMutation();

  const handleCloseModal = () => {
    setOpenRegModal(false);
  };
  const submit: SubmitHandler<IFields> = (data) => {
    regUser({ ...data, avatar: "https://picsum.photos/800" });
  };

  useEffect(() => {
    if (isSuccess && data) {
      setRegSuccess(true);
    }
  }, [isSuccess]);

  return (
    <section
      onMouseDown={handleCloseModal}
      className={`${styles.wrapper} ${openRegModal && styles.open}`}
    >
      <form
        onMouseDown={(e) => e.stopPropagation()}
        className={styles.modal}
        onSubmit={handleSubmit(submit)}
      >
        <ModalSuccess isActive={regSuccess} text="Вы зарегистрировались!" />
        <h2>Создание аккаунта</h2>
        <input
          className={`${styles.field} ${errors.name && styles.err}`}
          type="text"
          placeholder="Ваше имя"
          {...register("name", {
            required: true,
          })}
        />
        <input
          className={`${styles.field} ${errors.email && styles.err}`}
          type="text"
          placeholder="Почта"
          {...register("email", {
            required: true,
          })}
        />
        <input
          className={`${styles.field} ${errors.password && styles.err}`}
          type="password"
          placeholder="Пароль"
          {...register("password", {
            required: true,
          })}
        />
        <button type="submit" className={styles.btn}>
          войти
        </button>
        <p>Создать аккаунт</p>
      </form>
    </section>
  );
}

export default RegModal;
