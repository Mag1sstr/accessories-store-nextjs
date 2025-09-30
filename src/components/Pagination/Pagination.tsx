import styles from "./Pagination.module.css";

interface IProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (n: number) => void;
}

function Pagination({ totalPages, currentPage, setCurrentPage }: IProps) {
  return (
    <div className={styles.pagin}>
      <ul className={styles.row}>
        {[...Array(totalPages)].map((_, index) => (
          <li key={index}>{index + 1}</li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
