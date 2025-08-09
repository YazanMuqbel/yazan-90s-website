// pages/blog/index.jsx
import MainLayout from "@/components/layout/MainLayout";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function BlogPage({ posts }) {
  const centerStyle = {
    background: "#ffffff",
    padding: "32px 20px",
    borderLeft: "2px solid #999",
    borderRight: "2px solid #999",
  };

  const gridStyle = {
    display: "grid",
    gap: "24px", // no gridTemplateColumns here
  };

  const cardStyle = {
    background: "#fff",
    borderTop: "2px solid #ffffff",
    borderLeft: "2px solid #ffffff",
    borderRight: "2px solid #808080",
    borderBottom: "2px solid #808080",
    padding: "12px",
    fontFamily: "'MS Sans Serif', sans-serif",
  };

  const imgStyle = {
    width: "100%",
    height: "auto",
    display: "block",
    border: "1px solid #000",
    marginBottom: "10px",
    imageRendering: "pixelated",
    transition: "transform 0.15s ease-in-out",
  };

  const titleStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "6px 0 0 0",
    lineHeight: 1.3,
  };

  return (
    <MainLayout
      sidebar={<Sidebar />}
      content={
        <div style={centerStyle}>
          <div className="blog-grid" style={gridStyle}>
            {posts.map((post) => (
              <article key={post.slug} className="blog-card" style={cardStyle}>
                <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  {post.image && <img src={post.image} alt={post.title} style={imgStyle} className="retro-img" />}
                  <p style={titleStyle}>{post.title}</p>
                </Link>
              </article>
            ))}
          </div>

          <style jsx>{`
            /* Base: 1 column */
            .blog-grid { grid-template-columns: 1fr; }

            /* ≥900px: 2 columns */
            @media (min-width: 900px) {
              .blog-grid { grid-template-columns: repeat(2, 1fr); }
            }

            /* 90s zebra flair */
            .blog-card:nth-child(odd) {
              background-image:
                linear-gradient(0deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.03) 100%),
                repeating-linear-gradient(45deg, #e9e9e9, #e9e9e9 6px, #f4f4f4 6px, #f4f4f4 12px);
            }
            .blog-card:nth-child(even) {
              background-image:
                linear-gradient(0deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.5) 100%),
                repeating-linear-gradient(45deg, #f1f1f1, #f1f1f1 6px, #ffffff 6px, #ffffff 12px);
            }
            .blog-card:hover {
              border-top: 2px solid #808080;
              border-left: 2px solid #808080;
              border-right: 2px solid #ffffff;
              border-bottom: 2px solid #ffffff;
              background-color: #dcdcdc;
            }

            /* Retro image hover zoom */
            .retro-img:hover {
              transform: scale(1.04);
              filter: contrast(1.1) saturate(1.1);
            }
          `}</style>
        </div>
      }
    />
  );
}

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), "posts");
  const files = fs.readdirSync(postsDir);

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fileContent = fs.readFileSync(path.join(postsDir, filename), "utf-8");
    const { data } = matter(fileContent);
    return {
      slug,
      title: data.title || slug,
      image: data.image || null,
      date: data.date || null,
    };
  });

  posts.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  return { props: { posts } };
}
