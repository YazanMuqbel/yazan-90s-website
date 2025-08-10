// lib/getPosts.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

export function getAllPosts() {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(postsDir, filename), "utf8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title || slug,
      image: data.image || null,
      date: data.date || null,
    };
  });

  posts.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  return posts;
}

export function getRandomPosts(n = 3) {
  const all = getAllPosts();
  return all.sort(() => Math.random() - 0.5).slice(0, n);
}
