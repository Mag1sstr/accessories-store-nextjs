import styles from "./ModalWrapper.module.css";

interface IProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClick: (v: boolean) => void;
}

function ModalWrapper({ isOpen, children, onClick }: IProps) {
  const handleClick = () => {
    onClick(false);
  };

  return (
    <section
      onMouseDown={handleClick}
      className={`${styles.wrapper} ${isOpen && styles.open}`}
    >
      {children}
    </section>
  );
}

export default ModalWrapper;
