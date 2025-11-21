import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen" style={{
      background: "linear-gradient(180deg, #071129, #081025)",
      color: "white",
      padding: "24px"
    }}>
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        background: "rgba(255,255,255,0.05)",
        borderRadius: "16px",
        padding: "24px",
        border: "1px solid rgba(255,255,255,0.1)"
      }}>

        <header style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
          alignItems: "center"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{
              width: "64px", height: "64px",
              background: "linear-gradient(135deg, #4f46e5, #06b6d4)",
              borderRadius: "14px",
              display: "flex", justifyContent: "center", alignItems: "center",
              fontSize: "20px", fontWeight: "bold"
            }}>PK</div>

            <div>
              <h1 style={{ margin: 0 }}>Baitapalli Pavan Kumar</h1>
              <p style={{ margin: "4px 0", opacity: 0.7 }}>AI/ML • Automation • Full-stack Developer</p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            <a href="#projects" style={btnStyle}>Projects</a>
            <a href="#experience" style={btnStyle}>Experience</a>
            <a href="/mnt/data/Baitapalli_Pavan_Kumar_Resume_DAS.pdf.pdf" download style={{
              ...btnStyle,
              background: "linear-gradient(90deg,#4f46e5,#06b6d4)",
              border: "none"
            }}>
              Download CV
            </a>
          </div>
        </header>

        <section style={cardStyle}>
          <h2>Professional Profile</h2>
          <p style={{ opacity: 0.8 }}>
            Computer Science Engineering graduate with hands-on experience in
            Python, Java, ML workflows, automation, and backend API development.
            Completed 6 months internships working on automation, full-stack,
            documentation, data validation and engineering workflows.
          </p>
        </section>

        <section id="projects" style={cardStyle}>
          <h2>Projects</h2>

          <h3>SmartShop — AI Price Prediction</h3>
          <p>Built full ML pipeline, validation, and Flask API with 12% improved accuracy.</p>

          <h3>KidCareTaker — Automation Platform</h3>
          <p>Workflow automation, reporting, validation, and dashboards.</p>

          <h3>Flask ML Deployment API</h3>
          <p>Modular REST endpoints with logging and model versioning.</p>
        </section>

        <section id="experience" style={cardStyle}>
          <h2>Experience</h2>

          <h3>Full Stack Developer Intern — Zeelog Logistics</h3>
          <p>API development, automation scripts, CI/CD support, documentation.</p>

          <h3>Tech Outreach Intern — Garuda Aerospace</h3>
          <p>Dataset validation, documentation, demo workflows.</p>
        </section>

        <section id="contact" style={cardStyle}>
          <h2>Contact</h2>
          <p>Email: <a href="mailto:bpavankumar1201@gmail.com">bpavankumar1201@gmail.com</a></p>
          <p>Phone: +91 93910 44078</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/pavan1201/">linkedin.com/in/pavan1201</a></p>
          <p>GitHub: <a href="https://github.com/pavan0781">github.com/pavan0781</a></p>
        </section>

        <footer style={{ textAlign: "center", opacity: 0.6, marginTop: "16px" }}>
          © {new Date().getFullYear()} Baitapalli Pavan Kumar
        </footer>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: "10px 16px",
  borderRadius: "10px",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.12)",
  textDecoration: "none",
  color: "white",
  fontSize: "14px"
};

const cardStyle = {
  marginTop: "20px",
  background: "rgba(255,255,255,0.04)",
  padding: "20px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.1)"
};
