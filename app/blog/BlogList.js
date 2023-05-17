import Link from "next/link";
import styles from "./blog.module.css";

const BlogList = ({ posts }) => {
  return (
    <ul>
      {posts &&
        posts.map((post) => (
          <li key={post.id}>
            <Link className={styles.blogLink} href={`/blog/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default BlogList;
