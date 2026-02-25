"use client";
import { useAuth } from "@/hooks/useAuth";
import styles from "./User.module.css";
import { useModals } from "@/hooks/useModals";
import { useAppDispatch } from "@/store/store";
import { logoutUser } from "@/store/slices/authSlice";
import { useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useRouter } from "next/navigation";
function User() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const { setOpenLoginModal } = useModals();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const ref = useRef<HTMLDivElement>(null);

  const handleOpenLogin = () => {
    setOpenLoginModal(true);
  };
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  useClickOutside(setOpen, ref!);

  return user ? (
    <div
      ref={ref}
      onClick={() => setOpen((prev) => !prev)}
      className={styles.user}
    >
      <svg
        width="13"
        height="14"
        viewBox="0 0 13 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.3206 13.2502V11.8613C11.3206 11.1246 11.0421 10.418 10.5466 9.89709C10.051 9.37615 9.3788 9.0835 8.67793 9.0835H3.39264C2.69177 9.0835 2.0196 9.37615 1.52401 9.89709C1.02842 10.418 0.75 11.1246 0.75 11.8613V13.2502"
          stroke="#0071e4"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.03522 6.30556C7.49471 6.30556 8.67787 5.0619 8.67787 3.52778C8.67787 1.99365 7.49471 0.75 6.03522 0.75C4.57573 0.75 3.39258 1.99365 3.39258 3.52778C3.39258 5.0619 4.57573 6.30556 6.03522 6.30556Z"
          stroke="#0071e4"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <p title={user.name}> {user.name}</p>

      <div className={`${styles.drop} ${open && styles.open}`}>
        <ul className={styles.actions}>
          <li onClick={() => router.push("/orders")}>Заказы</li>
          <li onClick={handleLogout}>Выйти</li>
        </ul>
      </div>
    </div>
  ) : (
    <button className={styles.login} onClick={handleOpenLogin}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.9998 20.1667C9.61382 20.1706 8.24539 19.8571 6.99943 19.25C6.54344 19.0282 6.10653 18.7692 5.69318 18.4755L5.5676 18.3838C4.43077 17.5447 3.50132 16.4563 2.8506 15.202C2.17752 13.9039 1.82843 12.4623 1.83305 11C1.83305 5.93743 5.93716 1.83337 10.9998 1.83337C16.0624 1.83337 20.1665 5.93743 20.1665 11C20.1711 12.4616 19.8223 13.9025 19.1499 15.2002C18.5 16.4537 17.5719 17.5418 16.4365 18.381C16.0082 18.6945 15.5537 18.9706 15.078 19.206L15.0047 19.2427C13.7579 19.8529 12.3878 20.169 10.9998 20.1667ZM10.9998 15.5834C9.62612 15.5807 8.36679 16.3479 7.73918 17.5698C9.7938 18.5875 12.2057 18.5875 14.2604 17.5698V17.5652C13.632 16.3446 12.3726 15.5792 10.9998 15.5834ZM10.9998 13.75C12.9854 13.7526 14.8162 14.8226 15.793 16.5514L15.8068 16.5395L15.8196 16.5285L15.804 16.5422L15.7949 16.5495C18.1131 14.5467 18.942 11.3138 17.8735 8.44264C16.805 5.57143 14.0643 3.667 11.0007 3.667C7.9371 3.667 5.19634 5.57143 4.12784 8.44264C3.05933 11.3138 3.88827 14.5467 6.20652 16.5495C7.18392 14.8217 9.0146 13.7524 10.9998 13.75ZM10.9998 12.8334C8.97472 12.8334 7.3331 11.1918 7.3331 9.16671C7.3331 7.14166 8.97472 5.50004 10.9998 5.50004C13.0248 5.50004 14.6664 7.14166 14.6664 9.16671C14.6664 10.1392 14.2801 11.0718 13.5925 11.7594C12.9049 12.4471 11.9722 12.8334 10.9998 12.8334ZM10.9998 7.33337C9.98724 7.33337 9.16643 8.15419 9.16643 9.16671C9.16643 10.1792 9.98724 11 10.9998 11C12.0123 11 12.8331 10.1792 12.8331 9.16671C12.8331 8.15419 12.0123 7.33337 10.9998 7.33337Z"
          fill="#8C98B7"
        />
      </svg>
      <p>Войти</p>
    </button>
  );
}

export default User;
