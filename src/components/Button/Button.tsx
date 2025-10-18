import styles from "./Button.module.css";

interface IProps {
  title: string;
  type?: "submit" | "button" | "reset";
  className?: string;
  fontWeight?: 300 | 400 | 500 | 600 | 700;
  fontSize?: string | number;
  background?: string;
  padding?: string | number;
  onClick?: () => void;
  color?: string;
}
function Button({
  title,
  className,
  fontWeight,
  fontSize,
  background,
  padding,
  color,
  onClick,
  type = "button",
}: IProps) {
  return (
    <button
      type={type}
      style={{ fontWeight, fontSize, background, padding, color }}
      className={`${styles.btn} ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
