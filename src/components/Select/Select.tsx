import styles from "./Select.module.css";

function Select() {
  return (
    <div className={styles.select}>
      по умолчанию{" "}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.99998 7.20001L12 13.2L18 7.20001L20.4 8.40001L12 16.8L3.59998 8.40001L5.99998 7.20001Z"
          fill="#0071E4"
        />
      </svg>
    </div>
  );
}
export default Select;
