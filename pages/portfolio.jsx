// pages/apps.jsx
"use client"; // not strictly required in Pages Router, but keeps consistency if using client components

import MainLayout from "@/components/layout/MainLayout";
import Sidebar from "@/components/Sidebar";

export default function AppsPage() {
  return (
    <MainLayout
      sidebar={<Sidebar />}
      content={
        <div style={{ padding: "40px", background: "#fff", borderLeft: "2px solid #999", borderRight: "2px solid #999" }}>
          <h1 style={{ marginTop: 0 }}>My Apps</h1>
          <p>Here is a showcase of apps I’ve built or am currently building.</p>
          <ul>
            <li>Hijri ↔ Gregorian Date Converter</li>
            <li>Expense Tracker with Receipt Scanner</li>
            <li>AI Portrait Generator</li>
          </ul>
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
