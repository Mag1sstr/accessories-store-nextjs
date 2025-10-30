"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./ModalLogin.module.css";
import { useModals } from "@/hooks/useModals";
import { useLoginUserMutation } from "@/api/api";
import { useEffect, useState } from "react";
import Image from "next/image";
import ModalSuccess from "../ModalSuccess/ModalSuccess";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { useAppDispatch } from "@/store/store";
import { setToken } from "@/store/slices/authSlice";

interface IFields {
  email: string;
  password: string;
}

function ModalLogin() {
  const dispatch = useAppDispatch();
  const [loginSuccess, setLogginSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFields>();
  const { openLoginModal, setOpenLoginModal, setOpenRegModal } = useModals();
  const [loginUser, { data, isSuccess }] = useLoginUserMutation();

  const handleCloseModal = () => {
    setOpenLoginModal(false);
  };
  const handleOpenRegModal = () => {
    setOpenLoginModal(false);
    setOpenRegModal(true);
  };
  const submit: SubmitHandler<IFields> = (data) => {
    loginUser(data);
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isSuccess && data.access_token) {
      setLogginSuccess(true);
      dispatch(setToken(data.access_token));

      timer = setTimeout(() => {
        setOpenLoginModal(false);
      }, 1500);
    }

    return () => clearTimeout(timer);
  }, [isSuccess]);

  return (
    <ModalWrapper isOpen={openLoginModal} setIsOpen={setOpenLoginModal}>
      <form
        onMouseDown={(e) => e.stopPropagation()}
        className={styles.modal}
        onSubmit={handleSubmit(submit)}
      >
        <ModalSuccess isActive={loginSuccess} text="Вы зашли в аккаунт!" />
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
        <p onClick={handleOpenRegModal}>Создать аккаунт</p>
      </form>
    </ModalWrapper>
  );
}

export default ModalLogin;
