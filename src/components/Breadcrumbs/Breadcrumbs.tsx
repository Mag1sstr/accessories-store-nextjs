"use client";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Breadcrumbs.module.css";

function Breadcrumbs() {
  const pathname = usePathname();
  const router = useRouter();

  const pathnames = ["Главная", ...pathname.split("/").filter(Boolean)];

  console.log(pathname);

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <ol className={styles.row}>
          {pathnames.map((el) => (
            <li key={el}>
              {el[0].toUpperCase() + el.slice(1)}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18L13 12L7 6.00001L8.2 3.60001L16.6 12L8.2 20.4L7 18Z"
                  fill="#B7B7B7"
                />
              </svg>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Breadcrumbs;
