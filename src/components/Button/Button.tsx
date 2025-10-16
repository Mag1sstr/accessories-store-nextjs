import styles from "./Button.module.css";

interface IProps {
  title: string;
  type?: "submit" | "button" | "reset";
  className?: string;
  fontWeight?: 300 | 400 | 500 | 600 | 700;
  fontSize?: string | number;
  background?: string;
  padding?: string | number;
}
function Button({
  title,
  className,
  fontWeight,
  fontSize,
  background,
  padding,
  type = "button",
}: IProps) {
  return (
    <button
      type={type}
      style={{ fontWeight, fontSize, background, padding }}
      className={`${styles.btn} ${className}`}
    >
      {title}
    </button>
  );
}

export default Button;
