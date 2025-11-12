import styles from "./InputField.module.css";
import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import checkImg from "../../../public/assets/icons/check.png";
import { IFields } from "../RegModal/RegModal";

interface IProps {
  type?: HTMLInputTypeAttribute;
  register?: UseFormRegisterReturn;
  errors?: boolean;
  placeholder?: string;
  getValues?: boolean;
}

function InputField({
  type = "text",
  register,
  errors,
  placeholder,
  getValues,
}: IProps) {
  return (
    <div className={styles.inputBlock}>
      <input
        className={`${styles.field} ${errors && styles.err}`}
        type={type}
        placeholder={placeholder}
        {...register}
      />
      <img
        className={`${styles.checkIcon} ${
          !errors && getValues && styles.success
        }`}
        src={checkImg.src}
        alt="check"
      />
    </div>
  );
}

export default InputField;
