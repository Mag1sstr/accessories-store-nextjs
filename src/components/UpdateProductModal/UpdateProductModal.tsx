import InputField from "../InputField/InputField";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import styles from "./UpdateProductModal.module.css";

function UpdateProductModal() {
  return (
    <ModalWrapper>
      <div className={styles.form}>
        <h1>Редактирование</h1>
        <InputField />
        <InputField />
      </div>
    </ModalWrapper>
  );
}

export default UpdateProductModal;
