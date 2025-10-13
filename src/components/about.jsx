export default function About() {
  return (
    <section id="about" className="py-12">
      <div className="container-max">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">Introduction</h2>

          <div className="space-y-6 text-lg leading-relaxed muted">
            <p>
              As a final-year Software Engineering student at FPT University, I
              have developed a strong foundation in both technical and
              analytical domains. My academic background and practical
              experience in software implementation have nurtured my passion for
              Business Analysis — where I can bridge the gap between technology
              and business needs.
            </p>
            <p>
              Throughout my university journey and hands-on projects, I have
              gained experience in requirement analysis, system integration, and
              user training. These experiences have strengthened my ability to
              communicate effectively with stakeholders, translate complex
              technical requirements into actionable business solutions, and
              ensure system alignment with organizational goals.
            </p>
            <p>
              {" "}
              I am eager to pursue a Business Analyst career where I can
              continue to learn, grow, and contribute to building efficient and
              user-centric IT solutions. With a mindset of continuous
              improvement and strong problem-solving skills, I am committed to
              driving innovation, optimizing processes, and delivering impactful
              business outcomes.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Technical Skills</h3>
            <ul className="space-y-2 text-base muted">
              <li className="flex items-start gap-2">
                <span className="dot-primary mt-1">•</span>
                <span>Programming: C, JavaScript, HTML, CSS</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="dot-primary mt-1">•</span>
                <span>Database & Query: SQL, NoSQL (MongoDB, Firebase)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="dot-primary mt-1">•</span>
                <span>UX/UI Design: Wireframing, Prototyping</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="dot-primary mt-1">•</span>
                <span>
                  Business Analysis: User Story Mapping, Acceptance Criteria
                  Definition, Requirement Elicitation
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="dot-primary mt-1">•</span>
                <span>
                  Project Management: JIRA, Agile/Scrum, WBS, SRS Documentation
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
