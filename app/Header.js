import Nav from "./Nav";
import Image from "next/image";
import styles from "./styles/header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <Image className={styles.image} alt="My Blog" src='/logo.png' width="100" height="50" />
      <Nav />
    </header>
  );
};

export default Header;
