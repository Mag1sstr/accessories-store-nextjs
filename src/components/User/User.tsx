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
      <img
        src="https://img.icons8.com/?size=100&id=ABBSjQJK83zf&format=png&color=000000"
        alt="avatar"
      />
      <p title={user.name}> {user.name}</p>

      <div className={styles.actions}></div>
    </div>
  ) : (
    <button className={styles.login} onClick={handleOpenLogin}>
      Войти
    </button>
  );
}

export default User;
