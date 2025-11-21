import InputField from "../InputField/InputField";
import styles from "./CreateProduct.module.css";

interface IInputs {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}
function CreateProduct() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <form className={styles.form}>
          <h2 className={styles.title}>Добавить новый продукт</h2>
          <InputField placeholder="Название" />
          <InputField placeholder="Цена" type="number" />
          <InputField placeholder="Описание" />
          <InputField placeholder="ID" type="number" />
          <label htmlFor="input__file" className={styles.labelFile}>
            Выберите изображение
          </label>
          <input type="file" id="input__file" className={styles.inputFile} />
          <button className={styles.btn}>Добавить</button>
        </form>
      </div>
    </section>
  );
}

export default CreateProduct;
