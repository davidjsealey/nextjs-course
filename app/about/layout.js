import { Roboto } from "next/font/google";

export const metadata = {
  title: "About | My Blog",
  description: "The about page of the blog",
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'] // Required for variable fonts!
})

export default function AboutLayout({ children }) {
  return (
    <section className={roboto.className}>
      {children}
    </section>
  );
}
