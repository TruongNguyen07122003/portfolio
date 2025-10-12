import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // chỉ giữ lại 3 mục: Home, Projects, Contact
  const links = [
    { to: "/", label: "Home" },
    { to: "/education", label: "Education" },
    { to: "/projects", label: "Projects" },

    { to: "/about", label: "About me" },
  ];

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 24);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={"navbar" + (isScrolled ? " scrolled" : "")}>
      <div className="nav-inner">
        <div className="logo"> Hello! I'm Truong!</div>

        <div className="nav-items">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setIsOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu" role="menu">
          {links.map((l) => (
            <button
              key={l.to}
              onClick={() => {
                setIsOpen(false);
                navigate(l.to);
              }}
              className="mobile-menu-item"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
