"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./RegModal.module.css";
import { useModals } from "@/hooks/useModals";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRegUserMutation } from "@/api/api";

interface IFields {
  name: string;
  email: string;
  password: string;
  avatar: string;
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
    regUser(data);
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
        <div className={`${styles.success} ${regSuccess && styles.active}`}>
          <Image
            src="/assets/icons/check.png"
            width={100}
            height={100}
            alt="check"
          />
          <p>Вы зарегистрировались!</p>
        </div>
        <h2>Войти в аккаунт</h2>
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
