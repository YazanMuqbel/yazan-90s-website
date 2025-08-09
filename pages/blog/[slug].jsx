// pages/blog/[slug].jsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import MainLayout from "@/components/layout/MainLayout";
import Sidebar from "@/components/Sidebar";

export default function BlogPost({ frontmatter, htmlContent }) {
  return (
    <MainLayout
      sidebar={<Sidebar />}
      content={
        <div style={{ padding: "20px" }}>
          <h1>{frontmatter.title}</h1>
          {frontmatter.date && (
            <p style={{ fontSize: 12, color: "#555" }}>{frontmatter.date}</p>
          )}

          {/* Wrap markdown in a known class so we can style it */}
          <div
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Center images within markdown content */}
          <style jsx global>{`
            .markdown-body img {
              display: block;
              margin-left: auto;
              margin-right: auto;
              margin-top: 12px;
              margin-bottom: 12px;
              max-width: 100%;
              height: auto;
            }
          `}</style>
        </div>
      }
    />
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), "posts"));
  const paths = files.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, "") },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const file = fs.readFileSync(
    path.join(process.cwd(), "posts", `${slug}.md`),
    "utf8"
  );
  const { data: frontmatter, content } = matter(file);
  const processed = await remark().use(html).process(content);

  return {
    props: {
      frontmatter,
      htmlContent: processed.toString(),
    },
  };
}
