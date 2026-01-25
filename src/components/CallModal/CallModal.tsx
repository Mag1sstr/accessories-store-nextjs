"use client";
import { useModals } from "@/hooks/useModals";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import styles from "./CallModal.module.css";
import CloseBtn from "../CloseBtn/CloseBtn";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { regexPhoneNumber } from "@/utils/constants";

interface IFormValues {
  tel: string;
}

function CallModal() {
  const { openCallModal, setOpenCallModal } = useModals();
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IFormValues>();

  const submit = () => {
    setSuccess(true);
  };

  return (
    <ModalWrapper isOpen={openCallModal} setIsOpen={setOpenCallModal}>
      <form
        onSubmit={handleSubmit(submit)}
        onMouseDown={(e) => e.stopPropagation()}
        className={styles.modal}
      >
        {success ? (
          <>
            <h2 className={styles.title}>Заявка отправлена!</h2>
            <p className={styles.subtitle}>
              Менеджер позвонит вам через 3 минуты
            </p>
            <Button
              title="Хорошо"
              onClick={() => {
                setSuccess(false);
                setOpenCallModal(false);
                setValue("tel", "");
              }}
            />
          </>
        ) : (
          <>
            <CloseBtn onClick={() => setOpenCallModal(false)} />
            <h2 className={styles.title}>Закажите обратный звонок</h2>
            <p className={styles.subtitle}>
              Менеджер позвонит вам через 3 минуты
            </p>
            {errors.tel?.message?.length && (
              <p className={styles.err}>{errors.tel.message}</p>
            )}
            <input
              {...register("tel", {
                pattern: {
                  value: regexPhoneNumber,
                  message: "Неккоректный номер",
                },
              })}
              className={styles.input}
              type="tel"
              placeholder="+ 7"
            />
            <Button type="submit" title="заказать звонок" />
          </>
        )}
      </form>
    </ModalWrapper>
  );
}

export default CallModal;
