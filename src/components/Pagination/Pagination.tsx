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
        <button className={styles.btn}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M16.8 6.0001L10.8 12.0001L16.8 18.0001L15.6 20.4001L7.20001 12.0001L15.6 3.6001L16.8 6.0001Z"
                fill="#706E6E"
              />
            </g>
          </svg>
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <li key={index}>{index + 1}</li>
        ))}
        <button className={styles.btn}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M7.20001 18.0001L13.2 12.0001L7.20001 6.0001L8.40001 3.6001L16.8 12.0001L8.40001 20.4001L7.20001 18.0001Z"
                fill="#706E6E"
              />
            </g>
          </svg>
        </button>
      </ul>
    </div>
  );
}

export default Pagination;
