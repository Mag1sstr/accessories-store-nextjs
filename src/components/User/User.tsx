import { useAuth } from "@/hooks/useAuth";
import styles from "./User.module.css";
import { useModals } from "@/hooks/useModals";
function User() {
  const { user } = useAuth();
  const { setOpenLoginModal } = useModals();

  const handleOpenLogin = () => {
    setOpenLoginModal(true);
  };
  return user ? (
    <div className={styles.user}>
      <img src={user.avatar} alt="avatar" />
      {user.name}
    </div>
  ) : (
    <button className={styles.login} onClick={handleOpenLogin}>
      Войти
    </button>
  );
}

export default User;
