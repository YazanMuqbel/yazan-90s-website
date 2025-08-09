// app/layout.js

import React from "react";
import "./globals.css"; // keep if you actually use it

export const metadata = {
  title: "Yazan Muqbel",
  description: "Personal website of Yazan Muqbel",
};

export default function RootLayout({ children }) {
  const bodyStyle = { margin: 0 };

  // Global wallpaper-style background (fixed), no grid here
  const pageWrapperStyle = {
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#red",
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/45-degree-fabric-light.png")',
    backgroundRepeat: "repeat",
    backgroundAttachment: "fixed",
    boxSizing: "border-box",
    // optional small horizontal breathing room so content isn’t glued to the edges
    padding: "0 5vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  // Let children (e.g., MainLayout) control the inner grid/columns
  return (
    <html lang="en">
      <body style={bodyStyle}>
        <div style={pageWrapperStyle}>
          {children}
        </div>
      </body>
    </html>
  );
}
