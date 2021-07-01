import "./App.css";
import githubLogo from "./assets/githubLogo.svg";
import linkedInLogo from "./assets/linkedInLogo.svg";
import reactLogo from "./assets/reactLogo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={reactLogo} className="App-logo" alt="logo" />
          <h3>Raymond Shiner's Website</h3>
        </div>
        <h5 style={{ maxWidth: "500px", width: "80vw", marginBottom: 50 }}>
          Hi, I'm currently working on redesigning this website, please check
          back later
        </h5>
        <p style={{ marginBottom: 40 }}>Here are some of my links!</p>
        <section
          id="links"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            minWidth: "400px",
            width: "35vw",
          }}
        >
          <a
            className="App-link"
            href="https://github.com/raymondshiner"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} alt="github" style={{ height: "8vmin" }} />
          </a>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/raymond-shiner/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInLogo} alt="github" style={{ height: "8vmin" }} />
          </a>
        </section>
      </header>
    </div>
  );
}

export default App;
