"use client";
import { useAuth } from "@/hooks/useAuth";
import styles from "./User.module.css";
import { useModals } from "@/hooks/useModals";
import { useAppDispatch } from "@/store/store";
import { logoutUser } from "@/store/slices/authSlice";
import { useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import Link from "next/link";
function User() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const { setOpenLoginModal } = useModals();
  const dispatch = useAppDispatch();

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
      <img
        src="https://img.icons8.com/?size=100&id=ABBSjQJK83zf&format=png&color=000000"
        alt="avatar"
      />
      <p title={user.name}> {user.name}</p>

      <div className={`${styles.drop} ${open && styles.open}`}>
        <ul className={styles.actions}>
          <Link href="/orders">
            <li>Заказы</li>
          </Link>
          <li onClick={handleLogout}>Выйти</li>
        </ul>
      </div>
    </div>
  ) : (
    <button className={styles.login} onClick={handleOpenLogin}>
      Войти
    </button>
  );
}

export default User;
