// components/layout/MainLayout.jsx
"use client";

import React, { useState } from "react";
import Header from "./Header";
import { Analytics } from "@vercel/analytics/next"

export default function MainLayout({ sidebar, content, blog }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const wrapperStyle = {
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#c3c3c3",
    backgroundImage:
      'url("https://www.transparenttextures.com/patterns/45-degree-fabric-light.png")',
    backgroundRepeat: "repeat",
    backgroundAttachment: "fixed",
    fontFamily: "'Tahoma', 'MS Sans Serif', sans-serif",
    padding: "0 5vw",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const layoutBoxStyle = {
    width: "100%",
    maxWidth: "1440px",
    backgroundColor: "#f0eae0",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  };

  return (
    <div style={wrapperStyle}>
      <div style={layoutBoxStyle}>
        <Header />

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? "Close Menu" : "Menu"}
        </button>

        <div className={`main-layout ${isSidebarOpen ? "sidebar-open" : ""}`}>
          <aside className="sidebar-col">{sidebar}</aside>
          <main className="main-center">{content}</main>
          {blog ? <aside className="right-col">{blog}</aside> : null}
        </div>

        {/* Styles */}
        <style jsx global>{`
          /* Layout grid */
          .main-layout {
            display: grid;
            grid-template-columns: ${blog
              ? "250px 1fr 250px" // ✅ fixed blog width
              : "250px 1fr"};
            flex: 1;
            overflow: hidden;
            align-items: stretch; /* ✅ ensures all columns match height */
          }

          .sidebar-col {
            background: #f4f4f4;
            height: 100%;
          }

          .right-col {
            background: #f4f4f4;
            height: 100%;
            box-sizing: border-box;
          }

          .main-center {
            background: #ffffff;
            padding: 40px 20px;
            border-left: 2px solid #999;
            border-right: 2px solid #999;
          }

          /* Retro menu button */
          .mobile-menu-btn {
            display: none;
            background: #c0c0c0;
            border: 2px outset #ffffff;
            padding: 8px 16px;
            font-family: "MS Sans Serif", sans-serif;
            cursor: pointer;
            margin: 10px;
          }

          /* Typography scaling */
          h1 {
            font-size: clamp(28px, 5vw, 42px);
            margin: 0;
          }
          h2,
          h3 {
            font-size: clamp(20px, 4vw, 28px);
          }
          p,
          li,
          a,
          span {
            font-size: clamp(14px, 2.8vw, 16px);
          }
          .tagline {
            font-size: clamp(14px, 3.2vw, 20px);
          }

          /* Tablet view */
          @media (max-width: 1199px) {
            .main-layout {
              grid-template-columns: 220px 1fr;
            }
            .right-col {
              display: none;
            }
          }

          /* Mobile view */
          @media (max-width: 899px) {
            .main-layout {
              grid-template-columns: 1fr;
            }
            .sidebar-col {
              display: none;
            }
            .mobile-menu-btn {
              display: block;
            }
            .main-layout.sidebar-open .sidebar-col {
              display: block;
              background: #190069;
              padding: 20px;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
