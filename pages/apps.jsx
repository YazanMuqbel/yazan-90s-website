// pages/apps.jsx
"use client";

import MainLayout from "@/components/layout/MainLayout";
import Sidebar from "@/components/Sidebar";

export default function AppsPage() {
  const apps = [
    {
      name: "Hijri to Gregorian Date Converter -(Built with React and Next.js)",
      image: "/images/apps/gregorian-to-hijri-converter.jpeg",
      link: "https://hijriconverter.com",
    },
    { name: "Coming Soon", image: "/images/apps/coming-soon.png", link: "" },
    { name: "Coming Soon", image: "/images/apps/coming-soon.png", link: "" },
    { name: "Coming Soon", image: "/images/apps/coming-soon.png", link: "" },
  ];

  return (
    <MainLayout
      sidebar={<Sidebar />}
      content={
        <div
          style={{
            padding: "40px",
            background: "#fff",
            borderLeft: "2px solid #999",
            borderRight: "2px solid #999",
          }}
        >
          <h1 style={{ marginTop: 0, textAlign: "center" }}>My Apps</h1>
          <p style={{ textAlign: "center" }}>
            A showcase of apps I’ve built or am currently building.
          </p>

          <div
            className="apps-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "30px",
              marginTop: "30px",
            }}
          >
            {apps.map((app, index) => (
              <div
                key={index}
                className="app-card"
                style={{
                  textAlign: "center",
                  background: "#f9f9f9",
                  padding: "20px",
                  // Win95 raised bevel (matches blog cards)
                  borderTop: "2px solid #ffffff",
                  borderLeft: "2px solid #ffffff",
                  borderRight: "2px solid #808080",
                  borderBottom: "2px solid #808080",
                  boxShadow: "2px 2px 0px #999",
                  transition: "background-color 120ms ease, transform 80ms ease",
                }}
              >
                <a
                  href={app.link || "#"}
                  target={app.link ? "_blank" : "_self"}
                  rel={app.link ? "noopener noreferrer" : undefined}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <img
                    src={app.image}
                    alt={app.name}
                    style={{
                      maxWidth: "100%",
                      height: "120px",
                      objectFit: "contain",
                      marginBottom: "10px",
                      border: "1px solid #000",
                      background: "#fff",
                      padding: "5px",
                      display: "block",
                      marginInline: "auto",
                    }}
                  />
                  <p style={{ fontWeight: "bold", margin: 0 }}>{app.name}</p>
                </a>
              </div>
            ))}
          </div>

          {/* 90s hover effect to match blog thumbnails */}
          <style jsx>{`
            .app-card:hover {
              border-top: 2px solid #808080;
              border-left: 2px solid #808080;
              border-right: 2px solid #ffffff;
              border-bottom: 2px solid #ffffff;
              background-color: #dcdcdc;
            }
            .app-card:active {
              transform: translate(1px, 1px);
            }
          `}</style>
        </div>
      }
      blog={
        <div style={{ background: "#e0e0e0", padding: "20px" }}>
          <p>These are all the apps that I built in my life</p>
        </div>
      }
    />
  );
}
