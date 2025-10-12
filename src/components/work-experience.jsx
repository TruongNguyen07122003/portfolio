import React from "react";

export default function WorkExperience() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold flex items-center gap-3">
        <svg
          className="w-8 h-8 text-indigo-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 3H8v4h8V3z" />
        </svg>
        Work Experience
      </h2>

      <div className="space-y-12">
        <div className="space-y-4">
          <div className="border-l-4 border-primary pl-6 space-y-3">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold">
                  SENDO Technology Join Stock Company - Sendo farm project
                </h3>
                <p className="muted">Software Implementation Support Staff</p>
              </div>
              <div className="flex items-center gap-2 text-sm muted flex-shrink-0">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                </svg>
                <span>5/2024 - now</span>
              </div>
            </div>

            <ul className="space-y-2 muted text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="dot-primary mt-1">•</span>
                <span>
                  Requirement Analysis: Collaborate with clients to gather and
                  clarify deployment needs.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="dot-primary mt-1">•</span>
                <span>
                  Software Installation: Install and configure software per
                  client requirements.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="dot-primary mt-1">•</span>
                <span>
                  User Training: Conduct training and provide user manuals.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="dot-primary mt-1">•</span>
                <span>Testing: Perform UAT and ensure system readiness.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="dot-primary mt-1">•</span>
                <span>
                  Technical Support: Resolve issues and assist users during
                  usage.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="dot-primary mt-1">•</span>
                <span>
                  System Integration: Connect software with other systems or
                  tools.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="dot-primary mt-1">•</span>
                <span>
                  Maintenance: Perform regular upkeep and system updates.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="dot-primary mt-1">•</span>
                <span>
                  Progress Reporting: Update management on deployment progress.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border-l-4 border-accent pl-6 space-y-3">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold">
                  Academic projects at FPT University
                </h3>
                <p className="text-lg font-medium mt-2">
                  Capstone Project - CakeStory: Platform for Storing and Sharing
                  Cake Memories
                </p>
                <p className="muted">
                  Team Leader | Business Analyst | Frontend Developer
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm muted flex-shrink-0">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                </svg>
                <span>5/2025 - 10/2025</span>
              </div>
            </div>

            <ul className="space-y-2 muted text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="dot-primary mt-1">•</span>
                <span>
                  Developed a web platform that allows users and bakers to
                  design and share personalized cakes.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="dot-primary mt-1">•</span>
                <span>
                  Integrated AI-powered cake design, wallet payment, and order
                  management system.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="dot-primary mt-1">•</span>
                <span>
                  Collaborated with 4 team members using Agile and JIRA for task
                  management.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="dot-primary mt-1">•</span>
                <span>
                  Documented SRS, DRS, and created sequence & use case diagrams.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
