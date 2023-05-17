import BlogList from "./BlogList";

export default async function Blog() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return (
    <>
      <h1>Blog page</h1>
      <BlogList posts={data} />
    </>
  );
}
