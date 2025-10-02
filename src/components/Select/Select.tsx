import { useState } from "react";
import styles from "./Select.module.css";

interface IProps {
  className?: string;
  title: string;
  onChange: (sort: string) => void;
}

const typeSorts = ["по возрастанию", "по уменьшению", "по алфавиту"];

function Select({ className, title, onChange }: IProps) {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div
      onClick={handleToggle}
      className={`${styles.select} ${open && styles.open} ${className} `}
    >
      {title}
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
      <div className={styles.items}>
        {typeSorts.map((sort) => (
          <div
            onClick={() => {
              onChange(sort);
              setOpen(false);
            }}
            key={sort}
            className={styles.item}
          >
            {sort}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Select;
