import styles from "./ModalWrapper.module.css";

interface IProps {
  isOpen: boolean;
  children: React.ReactNode;
  setIsOpen: (v: boolean) => void;
  className?: string;
}

function ModalWrapper({ isOpen, children, setIsOpen, className }: IProps) {
  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <section
      onMouseDown={handleClick}
      className={`${styles.wrapper} ${isOpen && styles.open}`}
    >
      <div className={`${styles.modal} ${className}`}>{children}</div>
    </section>
  );
}

export default ModalWrapper;
