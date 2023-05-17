import Image from "next/image";

// Add this last to explain static params
export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return data.map(post => ({
    post: toString(post)
  }))
}

const BlogPost = async ({ params }) => {
  const { post } = params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post}`
  );
  const imageRes = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${post}`
  );
  const data = await res.json();
  const image = await imageRes.json();
  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
      <Image src={image.url} width={100} height={100} alt={data.title} />
    </div>
  );
};

export default BlogPost;
