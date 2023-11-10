import getPostMetadata from "@/lib/getPostMetadata";

getPostMetadata("/posts");

export default function Home() {
  const metaData = getPostMetadata();
  const posts = metaData.map((slug) => {
    return (
      <li>
        <a href={`/posts/${slug}`}>{slug}</a>
      </li>
    );
  });
  return (
    <>
      <h1>Latest Blog Posts</h1>
      <ul>{posts}</ul>
    </>
  );
}
