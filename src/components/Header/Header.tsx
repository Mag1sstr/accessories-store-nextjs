"use client";

import styles from "./Header.module.css";
import Search from "../Search/Search";
import CatalogMenu from "../CatalogMenu/CatalogMenu";
import Blur from "../Blur/Blur";
import { useModals } from "@/hooks/useModals";
import { useCart } from "@/hooks/useCart";
import HeaderNav from "../HeaderNav/HeaderNav";
import User from "../User/User";
import Link from "next/link";
import SocialLinks from "../SocialLinks/SocialLinks";
import { useAppSelector } from "@/store/store";
import NavLink from "../NavLink/NavLink";

function Header() {
  const { setOpenCart } = useModals();
  const { cart } = useCart();
  const { favorites } = useAppSelector((state) => state.favorites);
  const { compareData } = useAppSelector((state) => state.compare);

  const handleOpenCart = () => {
    setOpenCart(true);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className="container">
          <div className={styles.row}>
            <div className={styles.city}>
              Ваш город:{" "}
              <span>
                Москва
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.0001 7.2L12.0001 13.2L18.0001 7.2L20.4001 8.4L12.0001 16.8L3.6001 8.4L6.0001 7.2Z"
                    fill="#0071E4"
                  />
                </svg>
              </span>
            </div>
            <div className={styles.social}>
              <SocialLinks />
              <User />
            </div>
          </div>
        </div>
      </div>
      <HeaderNav />
      <div className={styles.filters}>
        <div className="container">
          <div className={styles.filterRow}>
            <CatalogMenu />
            <Search />
            <NavLink
              href="/favorites"
              className={(isActive) =>
                `${styles.fav} ${isActive && styles.active} `
              }
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5002 6.66667C7.43766 6.66667 3.3335 10.7708 3.3335 15.8333C3.3335 25 14.1668 33.3333 20.0002 35.2717C25.8335 33.3333 36.6668 25 36.6668 15.8333C36.6668 10.7708 32.5627 6.66667 27.5002 6.66667C24.4002 6.66667 21.6585 8.20583 20.0002 10.5617C19.1549 9.35767 18.032 8.37507 16.7264 7.69707C15.4209 7.01907 13.9712 6.66563 12.5002 6.66667Z"
                  stroke="#706E6E"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {!!favorites.length && <div>{favorites.length}</div>}
            </NavLink>
            <NavLink
              href="/compare"
              className={(isActive) =>
                `${styles.compare} ${isActive && styles.active}`
              }
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.84675 25.7333C9.79803 27.1039 12.1239 27.8406 14.5084 27.8433C15.2432 29.8442 16.5121 31.6056 18.1773 32.9361C19.8426 34.2667 21.8405 35.1156 23.9542 35.3907C26.0679 35.6658 28.2166 35.3566 30.167 34.4966C32.1173 33.6366 33.7948 32.2588 35.0173 30.5126C36.2397 28.7665 36.9605 26.7188 37.1012 24.5919C37.2419 22.465 36.7973 20.3403 35.8156 18.4483C34.8338 16.5563 33.3525 14.9694 31.5325 13.8599C29.7125 12.7504 27.6233 12.1608 25.4917 12.155C24.8604 10.4364 23.8334 8.89048 22.4938 7.64235C21.1542 6.39422 19.5397 5.47889 17.7808 4.9704C16.0219 4.46191 14.168 4.37453 12.3691 4.71533C10.5702 5.05614 8.87669 5.81556 7.42567 6.93216C5.97464 8.04877 4.80679 9.49122 4.01657 11.1428C3.22635 12.7945 2.83595 14.6089 2.87695 16.4393C2.91794 18.2698 3.38919 20.0649 4.25256 21.6795C5.11593 23.2941 6.34719 24.6828 7.84675 25.7333ZM9.75842 23C10.9556 23.8412 12.354 24.3506 13.8117 24.4767C13.6614 21.8618 14.399 19.2729 15.9051 17.13C17.404 14.9823 19.5848 13.4042 22.0934 12.6517C21.5528 11.4938 20.753 10.4757 19.7561 9.67623C18.7592 8.87675 17.5917 8.31727 16.344 8.04103C15.0963 7.76479 13.8018 7.7792 12.5606 8.08315C11.3193 8.38709 10.1646 8.97243 9.18575 9.79391C8.20685 10.6154 7.43 11.651 6.91526 12.8206C6.40051 13.9903 6.16166 15.2627 6.21718 16.5394C6.2727 17.8161 6.62109 19.0629 7.23543 20.1835C7.84976 21.304 8.71358 22.2683 9.76008 23.0017L9.75842 23ZM30.2417 16.995C29.0443 16.1545 27.646 15.6456 26.1884 15.52C26.3388 18.1349 25.6011 20.7238 24.0951 22.8667C22.5961 25.0144 20.4154 26.5925 17.9067 27.345C18.4474 28.5029 19.2471 29.521 20.2441 30.3204C21.241 31.1199 22.4084 31.6794 23.6561 31.9556C24.9038 32.2319 26.1983 32.2175 27.4396 31.9135C28.6808 31.6096 29.8355 31.0242 30.8144 30.2028C31.7933 29.3813 32.5702 28.3457 33.0849 27.176C33.5997 26.0064 33.8385 24.734 33.783 23.4573C33.7275 22.1806 33.3791 20.9338 32.7647 19.8132C32.1504 18.6927 31.2866 17.7284 30.2401 16.995H30.2417Z"
                  fill="#706E6E"
                />
              </svg>
              {!!compareData.length && <div>{compareData.length}</div>}
            </NavLink>
            <button onClick={handleOpenCart} className={styles.cartBtn}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 2H17.5C17.6552 2 17.8084 2.03614 17.9472 2.10557C18.0861 2.175 18.2069 2.2758 18.3 2.4L21 6V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V6L5.7 2.4C5.79315 2.2758 5.91393 2.175 6.05279 2.10557C6.19164 2.03614 6.34475 2 6.5 2ZM18.5 6L17 4H7L5.5 6H18.5ZM9 10H7V12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12V10H15V12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12V10Z"
                  fill="white"
                />
              </svg>
              в корзине
              <div>{cart.length}</div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
