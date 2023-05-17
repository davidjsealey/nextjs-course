import Link from "next/link";
import styles from "./styles/nav.module.css";

const Nav = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} href="/">Home</Link>
        </li>
        <li>
          <Link className={styles.link} href="/blog">Blog</Link>
        </li>
        <li>
          <Link className={styles.link} href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
