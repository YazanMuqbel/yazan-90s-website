// components/Sidebar.jsx or components/layout/Sidebar.jsx
"use client";

import React from "react";
import Link from "next/link";

export default function Sidebar() {
  const sidebarStyle = {
    backgroundColor: "#190069",
    backgroundImage: 'url("https://transparenttextures.com/patterns/basketball.png")',
    color: "#ffffff",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    gap: "16px",
    height: "100%",
    boxSizing: "border-box",
    fontFamily: "'MS Sans Serif', Tahoma, sans-serif",
  };

  const identityStyle = {
    backgroundColor: "#000080",
    padding: "12px",
    textAlign: "center",
  };

  const identityH1 = {
    margin: 0,
    fontSize: "20px",
    fontWeight: "bold",
  };

  const identityP = {
    margin: "6px 0 0 0",
    fontSize: "13px",
  };

  // Inline base; hover/active handled in <style jsx>
  const buttonStyle = {
    background: "#c0c0c0",
    borderWidth: "2px",
    borderStyle: "solid",
    borderTopColor: "#ffffff",
    borderLeftColor: "#ffffff",
    borderRightColor: "#808080",
    borderBottomColor: "#808080",
    color: "black",
    padding: "10px",
    fontSize: "14px",
    cursor: "pointer",
    width: "100%",
    fontFamily: "'MS Sans Serif', sans-serif",
    textAlign: "center",
    lineHeight: 1.2,
  };

  const linkStyle = {
    textDecoration: "none",
    color: "black",
    display: "block",
    width: "100%",
    height: "100%",
  };

  const items = [
    { label: "Home", href: "/" },
    { label: "My Products", href: "https://yazanmuqbel.gumroad.com/" },
    { label: "Work with me", href: "/work-with-me" },
    { label: "Blog", href: "/blog" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
    
    { label: "My Apps", href: "/apps" },
    
  ];

  return (
    <aside style={sidebarStyle}>
      <div style={identityStyle}>
        <h1> Ad Space</h1>
      </div>

      {items.map((item) => (
        <button key={item.href} className="sidebar-btn" style={buttonStyle}>
          <Link href={item.href} style={linkStyle}>
            {item.label}
          </Link>
        </button>
      ))}

      {/* Beveled -> sunken hover like Win95/98 */}
      <style jsx>{`
        .sidebar-btn {
          appearance: none;
          background-clip: padding-box;
        }
        .sidebar-btn:hover {
          /* Sunken look by inverting the bevel */
          border-top-color: #808080;
          border-left-color: #808080;
          border-right-color: #ffffff;
          border-bottom-color: #ffffff;
          background: #bdbdbd;
        }
        .sidebar-btn:active {
          border-top-color: #808080;
          border-left-color: #808080;
          border-right-color: #ffffff;
          border-bottom-color: #ffffff;
          background: #b5b5b5;
          outline: 1px dotted #000;
          outline-offset: -4px; /* retro dotted focus inside the button */
        }
        .sidebar-btn:focus-visible {
          outline: 1px dotted #000;
          outline-offset: -4px;
        }
      `}</style>
    </aside>
  );
}
