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
import InputField from "../InputField/InputField";

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
    getValues,
  } = useForm<IFields>({ mode: "onChange" });
  const { openLoginModal, setOpenLoginModal, setOpenRegModal } = useModals();
  const [loginUser, { data, isSuccess }] = useLoginUserMutation();

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
        setLogginSuccess(false);
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

        <InputField
          placeholder="Почта"
          type="email"
          register={register("email", {
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "",
            },
          })}
          errors={!!errors.email}
          // getValues={!!getValues("email")}
        />
        <InputField
          placeholder="Пароль"
          type="password"
          register={register("password", {
            required: true,
            minLength: 5,
          })}
          errors={!!errors.password}
          // getValues={!!getValues("password")}
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
