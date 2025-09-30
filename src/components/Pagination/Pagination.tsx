import styles from "./Pagination.module.css";

interface IProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (n: number) => void;
}

function Pagination({ totalPages, currentPage, setCurrentPage }: IProps) {
  return (
    <div className={styles.pagin}>
      <div className={styles.row}></div>
    </div>
  );
}

export default Pagination;
