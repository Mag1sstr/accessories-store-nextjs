import Image from "next/image";
import styles from "./SocialLinks.module.css";

function SocialLinks() {
  return (
    <div className={styles.social}>
      <a href="#!">
        <Image src="/assets/wp.png" width={32} height={32} alt="whatsapp" />
      </a>
      <a href="#!">
        <Image src="/assets/tg.png" width={32} height={32} alt="telegram" />
      </a>
      <a href="#!">
        <Image src="/assets/vk.png" width={32} height={32} alt="vk" />
      </a>
    </div>
  );
}

export default SocialLinks;
