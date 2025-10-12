import React, { useState, useEffect } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hello");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hello", "about", "projects"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const items = [
    { id: "hello", label: "Hello" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <nav className="navigation-side">
      <div className="nav-column">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={
              "nav-item" + (activeSection === item.id ? " active" : "")
            }
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
