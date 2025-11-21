import InputField from "../InputField/InputField";
import styles from "./CreateProduct.module.css";

function CreateProduct() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <form className={styles.form}>
          <h2 className={styles.title}>Добавить новый продукт</h2>
          <InputField placeholder="Название" />
          <InputField placeholder="Цена" />
          <InputField placeholder="Описание" />
          <InputField placeholder="ID" />
          <input type="file" />
        </form>
      </div>
    </section>
  );
}

export default CreateProduct;
