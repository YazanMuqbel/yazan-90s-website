/*import matter from "gray-matter";

// Fetch all posts
export async function getAllPosts() {
  const files = require.context("../posts", false, /\.md$/);
  return files.keys().map((fileName) => {
    const slug = fileName.replace(".md", "");
    const fileContents = files(fileName).default;
    const { data } = matter(fileContents);
    return { slug, ...data };
  });
} */



import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: `/blog/${slug}`,
      title: data.title || slug,
      image: data.image || "/default.jpg",
    };
  });
}
