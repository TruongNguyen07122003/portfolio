import ProjectCard from "./project-card.jsx";
import cakeStory from "../assets/cakeStory.png";
import sendofarm from "../assets/sendofarm.png";
import Furniture from "../assets/furniture.png";
import Koimine from "../assets/koimine.png";

const projects = [
  {
    title: "CakeStory Platform - Final Capstone Project",
    description:
      "A full-stack web platform for designing, storing, and sharing personalized cakes with AI-powered decoration, wallet payment, and order management. Led a 4-member team using Agile methodology.",
    tags: ["Team Leader", "Business Analyst", "Frontend"],
    documentType: "Full Project",
    pages: 120,
    year: "2025",
    image: cakeStory,
    link: "https://github.com/TruongNguyen07122003/cakestory-fe",
    documentLink: "/Docs/Report7_CakeStory.pdf",
  },
  {
    title:
      "SENDO Farm - Software Impleementation and Business Analysis Support Staff",
    description:
      "Supported the deployment of SENDO Farm Management System. Conducted requirement analysis, demo & UAT sessions, user training, and proposed improvement solutions for warehouse operations.",
    tags: ["Requirements", "UAT", "Training", "Deployment"],
    documentType: "Implementation",
    pages: 85,
    year: "2024",
    image: sendofarm,
    link: "https://www.sendo.vn/",
  },
  {
    title:
      "Furniture Website - Interior Design & Construction Quotation System",
    description:
      "A full-featured website for interior design quotation and construction management. Developed as a prerequisite capstone project in semester 5 before progressing to semester 7. The system provides cost estimation, design consultation, and project workflow tracking for interior services.",
    tags: [
      "Web Development",
      "Quotation System",
      "Prerequisite Project (Mid-term Capstone)",
    ],
    documentType: "Full Project",

    year: "2024",
    image: Furniture,
    link: "https://github.com/TruongNguyen07122003/Interior_Project", // hoặc link demo / báo cáo
    documentLink: "/Docs/FurnitureDocs.pdf",
  },
  {
    title: "KOimine - Koi Health Monitoring & Aquarium Supplies Platform",
    description:
      "A web-based management platform designed to track koi fish health and manage aquarium supply stores. The system allows manual input of fish health indicators, water parameters, and treatment history while supporting product listing, inventory tracking, and customer management for aquarium businesses. Developed as a full-stack project to enhance operational efficiency for koi enthusiasts and shop owners.",
    tags: ["Health Tracking", "E-commerce", "Web Development"],
    documentType: "Full Project",
    year: "2024",
    image: Koimine,
    link: "https://github.com/TruongNguyen07122003/Fall2024SWD392_SE1707_Group3_FE",
    documentLink: "/Docs/koimine.pdf",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="container-max space-y-10">
        {/* Header */}
        <div className="space-y-3 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Projects & Documentation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A collection of academic and professional works showcasing my
            expertise in business analysis, software implementation, and
            technical documentation.
          </p>
        </div>

        {/* Danh sách project */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
