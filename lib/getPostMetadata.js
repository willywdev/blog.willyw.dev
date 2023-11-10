import fs from "fs";

export default function getPostMetadata(folder) {
  console.log(folder);
  const files = fs.readdirSync(folder);
  const markdownFiles = files.filter((file) => file.endsWith(".mdx"));
  const slug = markdownFiles.map((file) => file.replace(".mdx", ""));
  return slug;
}
