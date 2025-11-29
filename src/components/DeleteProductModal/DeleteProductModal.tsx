import styles from "./DeleteProductModal.module.css";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

function DeleteProductModal() {
  return (
    <ModalWrapper>
      <form>
        <p>Вы уверены что хотите удалить</p>

        <div className={styles.row}>
          <button>Удалить</button>
          <button>Отмена</button>
        </div>
      </form>
    </ModalWrapper>
  );
}

export default DeleteProductModal;
