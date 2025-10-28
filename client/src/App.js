import './App.css';

export default function App() {
  return (
    <div className="page">
      <div className="card">
        <header className="header">
          <h1>Kanishk Sharma Portfolio</h1>
          <h2 className="tagline">Artifact 1</h2>
        </header>

        <nav className="links">
          <a className="btn" href="https://surgio.streamlit.app/" target="_blank" rel="noreferrer">
            Open AI Chatbot
          </a>
          <a className="btn" href="https://docs.google.com/presentation/d/1dCw0LDv0OfGtRzMsSZc5K05M9jqCGTTlCX_dzd5bJEM/edit?usp=sharing" target="_blank" rel="noreferrer">
            View Presentation
          </a>
          {/* Add more links as needed */}
        </nav>
      </div>
    </div>
  );
}
