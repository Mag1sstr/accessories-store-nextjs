import { useRef, useState } from "react";
import styles from "./SelectCategory.module.css";
import { useGetCategoriesQuery } from "@/api/api";
import { ICategories } from "@/types/interfaces";
import { useClickOutside } from "@/hooks/useClickOutside";

interface IProps {
  setCategoryId: (id: number | null) => void;
}

function SelectCategory({ setCategoryId }: IProps) {
  const [open, setOpen] = useState(false);
  const { data: categories } = useGetCategoriesQuery(null);
  const [catName, setCatName] = useState("Выберите категорию");
  const ref = useRef<HTMLDivElement | null>(null);

  const handleSelectCategory = (item: ICategories) => {
    setCatName(item.name);
    setCategoryId(item.id);
  };

  useClickOutside(setOpen, ref);

  return (
    <div
      onClick={() => setOpen((prev) => !prev)}
      className={`${styles.select} ${open && styles.open}`}
      ref={ref}
    >
      {catName}
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
      <ul className={styles.list}>
        {categories?.map((category) => (
          <li onClick={() => handleSelectCategory(category)} key={category.id}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectCategory;
