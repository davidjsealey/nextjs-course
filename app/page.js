import Link from "next/link";
import { Roboto } from "next/font/google";
import styles from "./styles/page.module.css";

const roboto = Roboto({ weight: ["400", "700"], subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Welcome To My Blog!</h1>
      <div>
        <p>
          You&apos;ve found my blog! Welcome. Make yourself at home. Please take
          a look at my{" "}
          <Link href="/blog" className={styles.link}>
            latest blog posts
          </Link>
          .
        </p>
      </div>
    </>
  );
}
