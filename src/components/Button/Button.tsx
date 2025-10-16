import styles from "./Button.module.css";

interface IProps {
  title: string;
  type?: "submit" | "button" | "reset";
  className?: string;
}
function Button({ title, className, type = "button" }: IProps) {
  return (
    <button type={type} className={`${styles.btn} ${className}`}>
      {title}
    </button>
  );
}

export default Button;
