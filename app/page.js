// app/page.js (server component)
import MainLayout from "@/components/layout/MainLayout";
import Sidebar from "@/components/Sidebar";
import BlogSidebar from "@/components/BlogSidebar";
import { getAllPosts } from "@/lib/getPosts";

export default function Page() {
  const posts = getAllPosts().sort((a, b) => new Date(b.date) - new Date(a.date));

  const contentStyle = {
    background: "#ffffff",
    padding: "40px 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    borderLeft: "2px solid #999",
    borderRight: "2px solid #999",
  };

  const imageStyle = {
    maxWidth: "240px",
    border: "10px ridge #d4af37",
  };

  const paragraphStyle = {
    maxWidth: "500px",
    fontSize: "14px",
    lineHeight: "1.4",
    color: "#000000",
    fontFamily: "'MS Sans Serif', sans-serif",
    textAlign: "center",
  };

  const iconButtonStyle = {
    display: "inline-block",
    background: "#c0c0c0",
    border: "2px outset #fff",
    padding: "4px",
    boxShadow: "inset -1px -1px #808080, inset 1px 1px #ffffff",
    cursor: "pointer",
  };

  return (
    <MainLayout
      sidebar={<Sidebar />}
      content={
        <div style={contentStyle}>
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQHNa-hKCOX4tA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726869999342?e=2147483647&v=beta&t=4ZAUbAw47CmYJDs0Nhm_suhBv9De8NpMCErL5SFdYQc"
            alt="Yazan's Photo"
            style={imageStyle}
          />

          <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "4px" }}>
            <a href="https://x.com/muqbel_yazan" target="_blank" rel="noopener noreferrer" style={iconButtonStyle}>
              <img src="/icons/twitter-icon.png" alt="Twitter" width={32} height={32} />
            </a>
            <a href="https://www.linkedin.com/in/yazanmuqbel/" target="_blank" rel="noopener noreferrer" style={iconButtonStyle}>
              <img src="/icons/linkedin-icon.png" alt="LinkedIn" width={32} height={32} />
            </a>
            <a href="https://www.youtube.com/@yazanmuqbel" target="_blank" rel="noopener noreferrer" style={iconButtonStyle}>
              <img src="/icons/youtube-icon.png" alt="YouTube" width={32} height={32} />
            </a>
          </div>

          <p style={paragraphStyle}>
            Engineer by degree, strategist by instinct, builder by obsession.
            <br />
            <br />
            Everything on this site is a small bet — designed to increase my
            surface area of luck by attracting curious, like-minded people.
            <br />
            <br />
            If you’ve read this far, odds are we’d get along. Explore my
            website.
          </p>
        </div>
      }
      blog={<BlogSidebar posts={posts} />}
    />
  );
}
