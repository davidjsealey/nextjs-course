import Footer from "./Footer";
import "./styles/globals.css";
import Header from "./Header";
import { Montserrat } from "next/font/google";
import styles from "./styles/layout.module.css";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
  subsets: ["latin"], // Required!
  // fallback: ['system-ui', 'arial'] The fallback font to use if the font cannot be loaded
});

export const metadata = {
  title: "My Blog",
  description: "My daily blog talking about stuff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
