// components/BlogSidebar.jsx
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function BlogSidebar({ posts }) {
  return (
    <aside
      style={{
        flex: "0 0 250px", // ✅ fixed width in flex layout
        background: "#f4f4f4",
        padding: "16px",
        boxSizing: "border-box",
        height: "100%", // ✅ fills vertical space of the layout
        display: "flex",
        flexDirection: "column"
      }}
    >
      <h3 style={{ fontFamily: "'MS Sans Serif', sans-serif" }}>Latest from the Blog</h3>
      <div style={{ flex: 1 }}>
        {posts.map((post) => (
          <div key={post.slug} style={{ marginBottom: "12px" }}>
            <Link
              href={`/blog/${post.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    border: "1px solid #000",
                    marginBottom: "4px",
                  }}
                />
              )}
              <p style={{ fontSize: "14px", fontWeight: "bold" }}>{post.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
}

