"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./ModalLogin.module.css";
import { useModals } from "@/hooks/useModals";
import { useLoginUserMutation } from "@/api/api";
import { useEffect, useState } from "react";
import Image from "next/image";

interface IFields {
  email: string;
  password: string;
}

function ModalLogin() {
  const [loginSuccess, setLogginSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFields>();
  const { openLoginModal, setOpenLoginModal } = useModals();
  const [loginUser, { data, isSuccess }] = useLoginUserMutation();

  const handleCloseModal = () => {
    setOpenLoginModal(false);
  };
  const submit: SubmitHandler<IFields> = (data) => {
    loginUser(data);
  };

  useEffect(() => {
    if (isSuccess && data.access_token) {
      setLogginSuccess(true);
      console.log("Успех! " + data.access_token);
    }
  }, [isSuccess]);

  return (
    <section
      onMouseDown={handleCloseModal}
      className={`${styles.wrapper} ${openLoginModal && styles.open}`}
    >
      <form
        onMouseDown={(e) => e.stopPropagation()}
        className={styles.modal}
        onSubmit={handleSubmit(submit)}
      >
        <div className={`${styles.success} ${loginSuccess && styles.active}`}>
          <Image
            src="/assets/icons/check.png"
            width={100}
            height={100}
            alt="check"
          />
          <p>Вы зашли в аккаунт!</p>
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

export default ModalLogin;
