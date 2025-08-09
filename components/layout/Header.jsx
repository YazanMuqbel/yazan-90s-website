// components/layout/Header.jsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  function handleSubmit(e) {
    e.preventDefault();
    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    // TODO: store email via API
    router.push("/newsletter/welcome");
  }

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 24px",
    backgroundColor: "#f0eae0",
    flexWrap: "wrap",
    gap: "16px",
  };

  // Branding (logo + tagline clickable)
  const brandingLinkStyle = {
    flex: "1 1 250px",
    textAlign: "center",
    textDecoration: "none",
    color: "inherit",
    cursor: "pointer",
  };
  const nameStyle = { margin: 0, fontWeight: 900 };
  const taglineStyle = { margin: "6px 0 0 0", fontWeight: "bold" };

  // Newsletter panel
  const newsletterBoxStyle = {
    flex: "1 1 360px",
    backgroundColor: "#fff",
    padding: "14px 16px",
    border: "2px groove #c0c0c0", // more Win95 than dashed
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    flexWrap: "wrap",
    margin: "0 auto",
    maxWidth: "520px",
  };

  const textBoxStyle = { flex: "1 1 200px", textAlign: "center" };

  // Input row (Win95: compact controls)
  const inputRowStyle = {
    display: "flex",
    flex: "1 1 240px",
    gap: "8px",
    alignItems: "center",
  };

  // Win95 input: sunken/inset look
  const inputStyle = {
    height: "28px",
    padding: "0 8px",
    fontSize: "14px",
    backgroundColor: "#f2f2f2",
    color: "#000",
    border: "2px inset #ffffff",
    boxShadow: "inset -1px -1px #808080, inset 1px 1px #ffffff",
    fontFamily: "'MS Sans Serif', Tahoma, sans-serif",
    flex: 1,
    minWidth: 0,
    outline: "none",
  };

  // Win95 button: raised/outset; pressed becomes inset via :active
  const buttonStyle = {
    height: "30px",
    padding: "0 12px",
    background: "#c0c0c0",
    border: "2px outset #fff",
    boxShadow: "inset -1px -1px #808080, inset 1px 1px #ffffff",
    color: "#000",
    fontSize: "14px",
    fontFamily: "'MS Sans Serif', Tahoma, sans-serif",
    cursor: "pointer",
    whiteSpace: "nowrap",
    flexShrink: 0,
  };

  // Win95 message panel for errors
  const errorBoxStyle = {
    marginTop: "6px",
    width: "100%",
    background: "#fff",
    color: "#b00020",
    border: "2px inset #fff",
    boxShadow: "inset -1px -1px #808080, inset 1px 1px #ffffff",
    fontSize: "12px",
    padding: "6px 8px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    lineHeight: 1.2,
  };

  return (
    <header style={headerStyle}>
      {/* Branding - clickable */}
      <Link href="/" style={brandingLinkStyle}>
        <h1 style={nameStyle}>Yazan Muqbel</h1>
        <p className="tagline" style={taglineStyle}>
          Engineer | Copywriter | <em>Small Better*</em>
        </p>
      </Link>

      {/* Newsletter */}
      <div style={newsletterBoxStyle} className="newsletter">
        <div style={textBoxStyle}>
          <h3 style={{ margin: 0 }}>Join other 350 Readers</h3>
          <p style={{ margin: "4px 0 0 0", fontSize: "12px" }}>
            Zero Spam – Unsubscribe Anytime
          </p>
        </div>

        {/* Form so Enter works */}
        <form style={{ flex: "1 1 240px" }} onSubmit={handleSubmit} noValidate>
          <div style={inputRowStyle} className="newsletter-input">
            <input
              type="email"
              placeholder="Your email"
              aria-label="Email address"
              aria-invalid={Boolean(error)}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              required
            />
            <button type="submit" style={buttonStyle}>Sign Up</button>
          </div>
          {error ? (
            <div style={errorBoxStyle}>
              <span role="img" aria-label="warning">⚠️</span>
              <span>{error}</span>
            </div>
          ) : null}
        </form>
      </div>

      {/* Type, focus & mobile tweaks */}
      <style jsx global>{`
        h1 { font-size: clamp(28px, 5vw, 42px); }
        .tagline { font-size: clamp(14px, 3.2vw, 20px); }

        /* Inputs: subtle focus ring like old apps */
        .newsletter-input input:focus {
          outline: none;
          filter: brightness(0.98);
        }

        /* Button pressed state */
        .newsletter-input button:active {
          border: 2px inset #fff !important;
          box-shadow: inset 1px 1px #808080, inset -1px -1px #ffffff !important;
        }

        ::placeholder { color: #6e6e6e; opacity: 1; }

        @media (max-width: 768px) {
          .newsletter { padding: 12px 12px; gap: 10px; }
          .newsletter-input { flex-direction: column; gap: 8px; }
          .newsletter-input input, .newsletter-input button { width: 100%; }
        }
      `}</style>
    </header>
  );
}
