// app/newsletter/welcome/page.jsx
"use client";

import Link from "next/link";

export default function WelcomePage() {
  const wrap = {
    minHeight: "70vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f0eae0",
    padding: "40px 20px",
    fontFamily: "'MS Sans Serif', Tahoma, sans-serif",
  };

  const card = {
    background: "#fff",
    border: "2px dashed #000",
    padding: "28px 24px",
    maxWidth: "520px",
    width: "100%",
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
  };

  const title = { margin: 0, fontSize: "clamp(22px, 4.5vw, 32px)", fontWeight: 900 };
  const p = { marginTop: "10px", fontSize: "clamp(14px, 2.8vw, 16px)" };

  const btn = {
    display: "inline-block",
    marginTop: "18px",
    padding: "10px 16px",
    background: "#c0c0c0",
    border: "2px outset #ffffff",
    color: "#000",
    textDecoration: "none",
    fontFamily: "'MS Sans Serif', sans-serif",
  };

  return (
    <div style={wrap}>
      <div style={card}>
        <h1 style={title}>Welcome! Glad you’ve joined the newsletter</h1>
        <p style={p}>You’ll get new posts and small-bet updates straight to your inbox.</p>
        <Link href="/" style={btn}>Go Back to Website</Link>
      </div>
    </div>
  );
}
