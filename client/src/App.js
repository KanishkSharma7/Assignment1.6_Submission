import './App.css';

const PROFILE = {
  name: 'Kanishk Sharma',
  role: 'Backend Engineer, Compute Infrastructure, DataRobot',
  intro: `I design and build scalable backend systems that power large-scale Generative AI workloads. At DataRobot, I focus on high-performance compute infrastructure, distributed systems optimization, and automation to enable reliable model deployment at scale.`,
  valueProp: `As a backend engineer specializing in compute infrastructure for GenAI, I combine distributed systems expertise, cloud-native engineering, and production-grade software practices to transform research prototypes into scalable, efficient AI products. I deliver infrastructure that reduces latency, improves resource utilization, and accelerates time-to-production for AI teams.`
};

export default function App() {
  return (
    <div className="page">
      <div className="card">
        <header className="header">
          <div className="brand-row">
            <div className="brand-badge">KS</div>
            <div style={{ textAlign: 'left' }}>
              <h1 className="title">{PROFILE.name}</h1>
              <div className="role">{PROFILE.role}</div>
            </div>
          </div>
        </header>

        <section className="content">
          <div className="intro">
            <h3>Introduction</h3>
            <p>{PROFILE.intro}</p>
          </div>

          <div className="value-prop">
            <h3>Personal Value Proposition</h3>
            <p>{PROFILE.valueProp}</p>
            <div className="skills">
              <span className="chip">Distributed Systems</span>
              <span className="chip">Cloud / Kubernetes</span>
              <span className="chip">Backend APIs</span>
              <span className="chip">GenAI Infrastructure</span>
            </div>
          </div>
        </section>

        {/* Centered artifact headline */}
        <h2 className="artifact-title">Artifact 1</h2>

        {/* Deliverables grid: each deliverable has a button + short description */}
        <div className="deliverables">
          <div className="deliverable">
            <div className="deliverable-row">
              <a
                className="btn deliverable-btn"
                href="https://surgio.streamlit.app/"
                target="_blank"
                rel="noreferrer"
              >
                Surgio Chatbot
              </a>
            </div>
            <p className="deliverable-desc">
              An ER-room assistant that securely pulls patient data (HIPAA-aware) and surfaces critical patient conditions to surgeons. Designed to save time in high-stakes emergency cases.
            </p>
          </div>

          <div className="deliverable">
            <div className="deliverable-row">
              <a
                className="btn deliverable-btn"
                href="https://docs.google.com/presentation/d/1dCw0LDv0OfGtRzMsSZc5K05M9jqCGTTlCX_dzd5bJEM/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                AI/ML Timeline Presentation
              </a>
            </div>
            <p className="deliverable-desc">
              A concise timeline tracing AI from the Turing Test through modern developments such as Generative AI and discussions around AGI. Useful for teaching and contextualizing modern AI.
            </p>
          </div>
        </div>
        
        {/* ===== ARTIFACT 2 (new) ===== */}
        <h2 className="artifact-title">Artifact 2</h2>

                  <div className="deliverable">
            <div className="deliverable-row">
              <a
                className="btn deliverable-btn"
                href="https://docs.google.com/document/d/1_CZVslFjrc0wjPV0eeKfQ9HOHx2xr38QdKhi9PP3qPo/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                View Machine Learning vs Deep Learning Comparison
              </a>
            </div>
            <p className="deliverable-desc">
              This report compares the fundamental differences between <strong>Machine Learning</strong> and <strong>Deep Learning</strong> using practical examples. It highlights how ML is suited for structured-data tasks (e.g., email spam detection) and DL excels at unstructured, high-dimensional problems (e.g., image recognition with CNNs), and discusses trade-offs in interpretability and compute.
            </p>
          </div>
        <footer className="footer">
          <div>© {new Date().getFullYear()} {PROFILE.name}</div>
          <div className="small-muted">Built with React • Deployed on Vercel</div>
        </footer>
      </div>
    </div>
  );
}