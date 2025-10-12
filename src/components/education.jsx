import React from "react";

function TimelineItem({
  title,
  subtitle,
  date,
  color = "border-blue-500",
  children,
}) {
  return (
    <div className="relative">
      <div className={`border-l-4 ${color} pl-6 pr-6 py-3`}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
          </div>

          {date && (
            <div className="text-sm text-gray-500 md:ml-6 md:flex md:items-center">
              <svg
                className="w-4 h-4 mr-2 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
              </svg>
              <span>{date}</span>
            </div>
          )}
        </div>

        {children && <div className="mt-3 text-gray-600">{children}</div>}
      </div>
    </div>
  );
}

function CertificateCard({ title, meta, pdf, tags = [] }) {
  const isExternal = typeof pdf === "string" && /^https?:\/\//i.test(pdf);
  const isPdf = typeof pdf === "string" && /\.pdf(\?|$)/i.test(pdf);
  const isCoursera = typeof pdf === "string" && pdf.includes("coursera.org");
  const [localAvailable, setLocalAvailable] = React.useState(null);

  React.useEffect(() => {
    let cancelled = false;
    async function check() {
      if (!pdf) {
        if (!cancelled) setLocalAvailable(false);
        return;
      }
      if (isPdf && !isExternal && pdf.startsWith("/")) {
        try {
          const res = await fetch(pdf, { method: "HEAD" });
          if (!cancelled) setLocalAvailable(res.ok);
        } catch (e) {
          if (!cancelled) setLocalAvailable(false);
        }
      } else {
        if (!cancelled) setLocalAvailable(false);
      }
    }
    check();
    return () => {
      cancelled = true;
    };
  }, [pdf]);

  return (
    <div className="certificate-card bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition duration-200">
      {/* small view button at top-left */}
      {pdf && (
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 bg-indigo-50 text-indigo-600 text-sm font-medium px-3 py-1.5 rounded-full shadow-sm hover:bg-indigo-100 transition"
          aria-label={`View ${title}`}
        >
          View
        </a>
      )}

      <div className="flex justify-between items-start mb-3">
        <div>
          <div className="text-sm text-indigo-600 font-medium">{meta}</div>
          <div className="font-semibold mt-1">{title}</div>
        </div>
      </div>

      {pdf && (
        <div className="mt-3">
          {isPdf && !isExternal && localAvailable === true ? (
            <div className="rounded-md overflow-hidden border h-56">
              <iframe src={pdf} title={title} width="100%" height="100%" />
            </div>
          ) : localAvailable === null ? (
            <div className="p-4">Checking certificate...</div>
          ) : (
            <div className="p-4 rounded-md border bg-gray-50">
              <p className="text-sm text-gray-700 mb-2">
                This certificate will open in a new tab:
              </p>
              <a
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-indigo-600 text-white rounded"
              >
                Open certificate
              </a>
              {isCoursera && (
                <p className="text-xs text-gray-500 mt-2">
                  Note: Coursera commonly prevents embedding; local PDFs will
                  embed, external hosts will open in a new tab.
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Actions: View (open in new tab)
      {pdf && (
        <div className="mt-4 flex items-center gap-3">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-gray-100 text-gray-800 border rounded hover:bg-gray-200"
          >
            View
          </a>
        </div>
      )} */}

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 border rounded-full bg-blue-50 text-blue-600"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <main className="py-12">
      <div className="container-max">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Experience & Education
        </h1>
        {/* EDUCATION */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <svg
              className="w-8 h-8 text-indigo-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M12 2l8 4-8 4-8-4 8-4z" />
              <path d="M4 10v4a8 8 0 0 0 16 0v-4" />
            </svg>
            <h2 className="text-2xl font-semibold">Education</h2>
          </div>

          <div className="space-y-8">
            <TimelineItem
              title="Bachelor of Software Engineering"
              subtitle="(Thesis Passed, One Course Remaining)"
              date="10/2021 - now"
            >
              <p className="text-sm">
                <strong>GPA:</strong> 7.4 / 10
              </p>
            </TimelineItem>

            <TimelineItem
              title="Completed Business Analyst Course - ECBA"
              subtitle="at HCM FPT University"
              date="2024"
              color="border-teal-400"
            />

            <TimelineItem title="Coursera courses:" color="border-gray-300">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Project Management Principles and Practices</li>
                <li>Basics of Web Development & Coding</li>
                <li>Software Development Lifecycle</li>
              </ul>
            </TimelineItem>
          </div>
        </section>
        {/* EXPERIENCE */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <svg
              className="w-8 h-8 text-indigo-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <h2 className="text-2xl font-semibold">Work Experience</h2>
          </div>

          <div className="space-y-8">
            <TimelineItem
              title="SENDO Technology Join Stock Company - Sendo Farm Project"
              subtitle="Software Implementation Support Staff"
              date="5/2024 - now"
              color="border-blue-500"
            >
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>
                  Requirement Analysis: Collaborated with clients to gather and
                  clarify deployment needs.
                </li>
                <li>
                  Feature Demonstration & UAT: Conducted feature demos and
                  planned User Acceptance Testing (UAT) sessions with warehouse
                  operation teams.
                </li>
                <li>
                  Deployment Planning: Supported deployment scheduling and trial
                  operation for warehouse systems.
                </li>
                <li>
                  Feedback & Improvement: Collected feedback and proposed
                  practical solutions to enhance system performance.
                </li>
                <li>
                  User Training: Conducted training sessions and created user
                  manuals.
                </li>
                <li>
                  Technical Support: Resolved issues and assisted users during
                  production usage.
                </li>
              </ul>
            </TimelineItem>

            <TimelineItem
              title="Academic Projects at FPT University"
              subtitle="Capstone Project - CakeStory: Platform for Storing and Sharing Cake Memories"
              date="5/2025 - 10/2025"
              color="border-teal-400"
            >
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>
                  Developed a web platform that allows users and bakers to
                  design and share personalized cakes.
                </li>
                <li>
                  Integrated AI-powered cake design, wallet payment, and order
                  management system.
                </li>
                <li>
                  Documented SRS, DRS, and created sequence & use-case diagrams.
                </li>
              </ul>
            </TimelineItem>
          </div>
        </section>

        {/* CERTIFICATES */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <svg
              className="w-8 h-8 text-indigo-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9 12h6" />
            </svg>
            <h2 className="text-2xl font-semibold">Certificates</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CertificateCard
              title="Project Management Principles and Practices"
              meta="Coursera · 2024"
              pdf="/certs/Project management.pdf"
              tags={["Project Management", "Agile", "Scrum"]}
            />

            <CertificateCard
              title="
 Basics of Web
 Development & Coding"
              meta="Coursera · 2024"
              pdf="/certs/Web design.pdf"
              tags={["HTML", "CSS", "JavaScript"]}
            />
            <CertificateCard
              title="Software Development Lifecycle"
              meta="Coursera · 2024"
              pdf="/certs/Development life cycle.pdf"
              tags={["SDLC", "Requirements Analysis", "Testing"]}
            />
            <CertificateCard
              title="Academic English: Writing"
              meta="Coursera · 2024"
              pdf="/certs/English.pdf"
              tags={["Business Analysis", "Requirements", "Documentation"]}
            />
            <CertificateCard
              title="FPT English Certificate"
              meta="FPT · 2022"
              pdf="/certs/FPT_English.pdf"
              tags={["English", "Communication", "Language"]}
            />
            <CertificateCard
              title="Academic English: Writing"
              meta="Coursera · 2024"
              pdf="/certs/koimine.pdf"
              tags={["Business Analysis", "Requirements", "Documentation"]}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
