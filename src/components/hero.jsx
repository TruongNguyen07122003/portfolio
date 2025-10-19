import React, { useState } from "react";
import avt from "../assets/avt.png";
export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="hello" className="hero">
      <div className="container-max">
        <div className="hero-inner">
          <div className="avatar">
            {!imgError ? (
              <img src={avt} alt="avatar" onError={() => setImgError(true)} />
            ) : (
              <span className="avatar-fallback">NT</span>
            )}
          </div>

          <div className="hero-content">
            <h1 className="name">NGUYEN NHAT TRUONG</h1>
            <p className="subtitle">FPT University – Final-year Student </p>
            <p className="small-muted">
              (Thesis Completed, One Course Remaining)
            </p>

            <div className="meta" style={{ marginTop: 18 }}>
              <a href="tel:+84327730336">+84 327 730 336</a>
              <a
                href="mailto:nhattruong07122003@gmail.com"
                style={{ display: "block", marginTop: 6 }}
              >
                nhattruong07122003@gmail.com
              </a>
              <div className="small-muted" style={{ marginTop: 6 }}>
                Date of Birth: 07/12/2003
              </div>
              <div className="small-muted" style={{ marginTop: 6 }}>
                Dong Hoa Ward, Ho Chi Minh City
              </div>
              <a
                href="https://www.linkedin.com/in/nhật-trường-nguyễn-8b7922342"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: 8,
                  fontWeight: "500",
                  textDecoration: "underline",
                }}
              >
                LinkedIn
              </a>
              <div
                style={{
                  marginTop: 12,
                  display: "flex",
                  gap: 12,
                  alignItems: "center",
                }}
              >
                <a
                  className="badge cv-badge bg-indigo-100 hover:bg-indigo-500"
                  href="/cv/Nguyen Nhat Truong CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  title="Download CV"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
