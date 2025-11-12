"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./RegModal.module.css";
import { useModals } from "@/hooks/useModals";
import { useEffect, useState } from "react";
import { useLoginUserMutation, useRegUserMutation } from "@/api/api";
import ModalSuccess from "../ModalSuccess/ModalSuccess";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import InputField from "../InputField/InputField";
import { useAppDispatch } from "@/store/store";
import { setToken } from "@/store/slices/authSlice";

export interface IFields {
  name: string;
  email: string;
  password: string;
}

function RegModal() {
  const dispatch = useAppDispatch();
  const [regSuccess, setRegSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<IFields>({ mode: "onChange" });
  const { openRegModal, setOpenRegModal, setOpenLoginModal } = useModals();
  const [regUser, { data, isSuccess }] = useRegUserMutation();
  const [loginUser, { data: loginData, isSuccess: isLoginSuccess }] =
    useLoginUserMutation();

  const submit: SubmitHandler<IFields> = (data) => {
    regUser({ ...data, avatar: "https://picsum.photos/800" });
  };
  const handleOpenLogin = () => {
    setOpenRegModal(false);
    setOpenLoginModal(true);
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isSuccess && data) {
      setRegSuccess(true);
      loginUser({ email: data.email, password: data.password });

      timer = setTimeout(() => {
        setOpenRegModal(false);
      }, 1500);
    }

    return () => clearTimeout(timer);
  }, [isSuccess]);

  useEffect(() => {
    if (isLoginSuccess && loginData.access_token) {
      dispatch(setToken(loginData.access_token));
    }
  }, [isLoginSuccess]);

  return (
    <ModalWrapper isOpen={openRegModal} setIsOpen={setOpenRegModal}>
      <form
        onMouseDown={(e) => e.stopPropagation()}
        className={styles.modal}
        onSubmit={handleSubmit(submit)}
      >
        <ModalSuccess isActive={regSuccess} text="Вы зарегистрировались!" />
        <h2>Создание аккаунта</h2>
        {/* <div className={styles.inputBlock}>
          <input
            className={`${styles.field} ${errors.name && styles.err}`}
            type="text"
            placeholder="Ваше имя"
            {...register("name", {
              required: true,
            })}
          />
          <img
            className={`${styles.checkIcon} ${
              !errors.name && !!getValues("name") && styles.not
            }`}
            src={checkImg.src}
            alt="check"
          />
        </div> */}
        <InputField
          placeholder="Ваше имя"
          register={register("name", {
            required: true,
          })}
          errors={!!errors.name}
          getValues={!!getValues("name")}
        />
        <InputField
          placeholder="Почта"
          register={register("email", {
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Неверный email",
            },
          })}
          errors={!!errors.email}
          getValues={!!getValues("email")}
        />
        <InputField
          placeholder="Пароль"
          register={register("password", {
            required: true,
            minLength: 5,
          })}
          errors={!!errors.password}
          getValues={!!getValues("password")}
        />
        {/* <div className={styles.inputBlock}>
          <input
            className={`${styles.field} ${errors.email && styles.err}`}
            type="text"
            placeholder="Почта"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Неверный email",
              },
            })}
          />
          <img
            className={`${styles.checkIcon} ${
              !errors.email && !!getValues("email") && styles.not
            }`}
            src={checkImg.src}
            alt="check"
          />
        </div> */}
        {/* <input
          className={`${styles.field} ${errors.password && styles.err}`}
          type="password"
          placeholder="Пароль"
          {...register("password", {
            required: true,
            minLength: 5,
          })}
        /> */}
        <button type="submit" className={styles.btn}>
          войти
        </button>
        <p onClick={handleOpenLogin}>Создать аккаунт</p>
      </form>
    </ModalWrapper>
  );
}

export default RegModal;
