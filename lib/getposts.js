// lib/getPosts.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getAllPosts() {
  const postsDir = path.join(process.cwd(), "posts");
  const files = fs.readdirSync(postsDir);

  return files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const file = fs.readFileSync(path.join(postsDir, filename), "utf-8");
    const { data } = matter(file);
    return {
      slug,                           // e.g. "pool"
      title: data.title || slug,
      image: data.image || null,
      date: data.date || null,
    };
  });
}
