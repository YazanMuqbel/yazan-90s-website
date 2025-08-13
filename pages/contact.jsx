// pages/apps.jsx
"use client";

import MainLayout from "@/components/layout/MainLayout";
import Sidebar from "@/components/Sidebar";

export default function AppsPage() {
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
          <h1 style={{ marginTop: 0, textAlign: "center" }}>Contact Me</h1>
          <p style={{ textAlign: "center" }}>Feel free to contact me at muqbel.yazan@gmail.com</p>
        </div>
      }
    />
  );
}
