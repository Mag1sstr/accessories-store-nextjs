"use client";
import { useGetProductsQuery } from "@/api/api";
import styles from "./Products.module.css";
function Products() {
  const { data: products } = useGetProductsQuery({});
  return (
    <section>
      <div className="container">
        <div className={styles.row}>
          {products?.map((product) => (
            <div key={product.id} className={styles.card}>
              <button className={styles.like}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 4C4.4625 4 2 6.4625 2 9.5C2 15 8.5 20 12 21.163C15.5 20 22 15 22 9.5C22 6.4625 19.5375 4 16.5 4C14.64 4 12.995 4.9235 12 6.337C11.4928 5.6146 10.8191 5.02505 10.0358 4.61824C9.25245 4.21144 8.38265 3.99938 7.5 4Z"
                    stroke="#585656"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <h3 className={styles.title}>{product.title}</h3>
              <div className={styles.image}>
                <img src={product.images[0]} alt="product-image" />
              </div>
              <div className={styles.details}>
                <p>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="8" cy="8" r="8" fill="#52D116" />
                  </svg>
                  Есть в наличии
                </p>
                <p>Гарантия 1 год</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Products;
