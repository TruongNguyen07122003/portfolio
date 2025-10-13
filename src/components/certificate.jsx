import React, { useState } from "react";

const certificates = [
  {
    title: "Project Management Principles and Practices",
    issuer: "Coursera",
    date: "2024",
    skills: ["Project Management", "Agile", "Scrum"],
    credentialUrl: "#", // Replace with your actual Coursera certificate PDF URL
  },
  {
    title: "Basics of Web Development & Coding",
    issuer: "Coursera",
    date: "2024",
    skills: ["HTML", "CSS", "JavaScript"],
    credentialUrl: "#",
  },
  {
    title: "Software Development Lifecycle",
    issuer: "Coursera",
    date: "2024",
    skills: ["SDLC", "Requirements Analysis", "Testing"],
    credentialUrl: "#",
  },
  {
    title: "Business Analysis Fundamentals",
    issuer: "Coursera",
    date: "2024",
    skills: ["Business Analysis", "Requirements", "Documentation"],
    credentialUrl: "#",
  },
  {
    title: "Agile with Atlassian Jira",
    issuer: "Coursera",
    date: "2024",
    skills: ["JIRA", "Agile", "Project Management"],
    credentialUrl: "#",
  },
  {
    title: "SQL for Data Science",
    issuer: "Coursera",
    date: "2023",
    skills: ["SQL", "Database", "Data Analysis"],
    credentialUrl: "#",
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <>
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
            ★
          </div>
          <h2 className="text-3xl font-bold text-slate-100">Certificates</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((cert, index) => (
            <div key={index} className="card">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="card-title">{cert.title}</h3>
                  <div className="mt-2 muted text-base">
                    {cert.issuer} • {cert.date}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="muted"
                  >
                    View
                  </button>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="muted"
                  >
                    Open
                  </a>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {cert.skills.map((s, i) => (
                  <span key={i} className="badge">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-slate-900 rounded-lg w-full max-w-4xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">{selectedCert.title}</h3>
                <p className="text-base muted">
                  {selectedCert.issuer} • {selectedCert.date}
                </p>
              </div>
              <div>
                <button onClick={() => setSelectedCert(null)} className="muted">
                  Close
                </button>
              </div>
            </div>

            <div className="mt-4">
              <iframe
                src={selectedCert.credentialUrl}
                title={selectedCert.title}
                className="w-full h-96 border-0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
