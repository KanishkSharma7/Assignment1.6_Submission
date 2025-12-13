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

        {/* ARTIFACT 1 */}
        <h2 className="artifact-title">Artifact 1</h2>

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

        {/* ARTIFACT 2 */}
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

        {/* ==================== ARTIFACT 3 ==================== */}
        <h2 className="artifact-title">Artifact 3</h2>

        <div className="deliverable">
          <div className="deliverable-row">
            <a
              className="btn deliverable-btn"
              href="https://student.schoolai.com/dot/spaces/join?code=AWSM-YKM1"
              target="_blank"
              rel="noreferrer"
            >
              Machine Learning Training Methods Activity
            </a>
          </div>

          <p className="deliverable-desc">
            This interactive assignment involved working with a guided AI chatbot to explore machine learning training methods. Through a collaborative conversational workflow, I analyzed supervised, unsupervised, and reinforcement learning techniques, as well as optimization strategies and model training steps. The chatbot provided hints, feedback, and probing questions, enabling deeper reasoning and reinforcing conceptual understanding while improving my ability to apply ML theory to real-world scenarios.
          </p>
        </div>
        
        <h2 className="artifact-title">Artifact 4</h2>
        <div className="deliverable">
          <div className="deliverable-row">
            <a
              className="btn deliverable-btn"
              href="https://student.schoolai.com/student-space?sessionId=cmicl025j05nn102o420u21az"
              target="_blank"
              rel="noreferrer"
            >
              Data Challenge Scenarios
            </a>
          </div>

          <p className="deliverable-desc">
            In this activity, I worked through three machine learning data-challenge scenarios with the AI coach. In Scenario 1, I addressed missing fraud-related features by analyzing missingness patterns, adding indicators, and applying appropriate imputation while avoiding leakage. In Scenario 2, I handled extreme class imbalance in a loan-default dataset using resampling, class-weighting, stratified training, and cost-aligned evaluation metrics. In Scenario 3, I designed a real-time fraud detection pipeline focusing on streaming ingestion, low-latency feature engineering, late-feature strategies, drift monitoring, and deployment trade-offs. The conversation emphasized reasoning, trade-offs, and production-oriented ML practices.
          </p>
        </div>

        <h2 className="artifact-title">Artifact 5</h2>
        <div className="deliverable">
          <div className="deliverable-row">
            <a
              className="btn deliverable-btn"
              href="https://docs.google.com/document/d/1MQfHQeInB0_zHxNQH15sDCVjK_LLimYuM5viq6dgq1k/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              View AI Ethics Case Study
            </a>
          </div>

          <p className="deliverable-desc">
            This artifact presents a critical ethical analysis of Facebook’s facial recognition practices, focusing on the 2020 lawsuit surrounding the unauthorized collection and use of biometric data. Through this case study, I examined three core ethical issues: informed consent for biometric data, secure and responsible handling of irreversible identifiers, and algorithmic bias impacting marginalized groups. The analysis reflects an evolution in my thinking, from viewing the incident as a legal compliance failure to understanding the deeper ethical responsibilities inherent in deploying AI systems at scale. By proposing mitigation strategies such as privacy-by-design, explicit opt-in consent, fairness audits, and governance frameworks, this work demonstrates my ability to critically assess real-world AI failures and apply ethical reasoning to future system design. This artifact highlights my commitment to responsible AI development that prioritizes user autonomy, fairness, and long-term societal impact.
          </p>
        </div>

        {/* FOOTER */}
        <footer className="footer">
          <div>© {new Date().getFullYear()} {PROFILE.name}</div>
          <div className="small-muted">Built with React • Deployed on Vercel</div>
        </footer>
      </div>
    </div>
  );
}
