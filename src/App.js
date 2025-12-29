import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import myPic from "./ashik img.jpeg";
import resume from "./ashik resume.jpeg";

// ================= HOME PAGE =================
function Home() {
  return (
    <div className="hero fade-in">
      <img src={myPic} alt="profile" className="profile-img" />

      <h1>
        Hi, I'm <span className="highlight gradient-text">N.SYED ASHIK</span>
      </h1>
      <p className="subtitle">
        Frontend Developer • UI/UX Designer • React Developer
      </p>

      <div className="buttons">
        <Link to="/contact" className="btn">Hire Me</Link>

        <a className="btn-outline" href={resume} download>
          Download Resume <FaDownload />
        </a>
      </div>

      <div className="socials">
        <a href="https://github.com/syedashik0804-dotcom" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/syed-ashik-28945a375" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://www.instagram.com/_sd__.ashik._" target="_blank" rel="noreferrer"><FaInstagram /></a>
      </div>
    </div>
  );
}

// ================= PROJECTS PAGE =================
function Projects() {
  return (
    <section className="projects fade-in">
      <h2 className="section-title">Projects</h2>

      <div className="project-grid">

        {/* Weather App */}
        <div className="project-card">
          <h3>🌤 Weather App</h3>
          <p>
            A weather forecasting app showing real-time temperature, humidity, and dynamic weather icons.
          </p>
          <p><strong>Tech Used:</strong> React, API, CSS</p>
          <a href="https://weather-app-olive-six-84.vercel.app" target="_blank" rel="noreferrer" className="demo-btn">Demo</a>
        </div>

        {/* Pizza Shop */}
        <div className="project-card">
          <h3>🍕 Riash Pizza House</h3>
          <p>
            Food ordering website with modern UI and responsive layout.
          </p>
          <p><strong>Tech Used:</strong> React, CSS</p>
          <a href="https://riash-pizza-house.vercel.app" target="_blank" rel="noreferrer" className="demo-btn">Demo</a>
        </div>

        {/* Calculator */}
        <div className="project-card">
          <h3>🧮 Calculator</h3>
          <p>
            Clean and responsive UI calculator supporting basic maths operations.
          </p>
          <p><strong>Tech Used:</strong> HTML, CSS, JavaScript</p>
          <a href="https://my-calculator-six-mauve.vercel.app" target="_blank" rel="noreferrer" className="demo-btn">Demo</a>
        </div>

      </div>
    </section>
  );
}

// ================= ABOUT PAGE =================
function About() {
  return (
    <section className="about fade-in">
      <h2 className="section-title">About Me</h2>

      <p className="about-text">
        Hi, I'm <strong>Ashik</strong> — a passionate Front-End Developer and BCA
        student who loves building smooth, modern & responsive UI experiences.
        I enjoy converting ideas into real web interfaces using React, CSS
        animations, and clean layouts.
      </p>

      <h3 className="about-sub">🛠 Skills</h3>
      <ul className="about-list">
        <li>React.js / JavaScript</li>
        <li>HTML, CSS & Responsive Design</li>
         <li>Firebase</li>
         <li>websocket</li>
         <li>postman</li>
        <li>UI/UX Wireframes (Figma)</li>
        <li>Git & GitHub</li>
      </ul>

      <h3 className="about-sub">Currently Learning</h3>
      <p className="about-text">
        Advanced React Hooks, Firebase authentication & API communication.
      </p>

      <h3 className="about-sub">My Goal</h3>
      <p className="about-text">
        To become a full-stack developer and build real-world web applications
        that solve problems and deliver meaningful user experiences.
      </p>
    </section>
  );
}

// ================= CONTACT PAGE =================
function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your message has been sent!", {
      position: "bottom-right",
      autoClose: 2000,
    });
    e.target.reset();
  };

  return (
    <section className="contact fade-in">
      <h2 className="section-title">Contact Me</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="tel" placeholder="Phone Number" required />
        <textarea rows="4" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn submit-btn">Send Message</button>
      </form>

      <ToastContainer />
    </section>
  );
}

// ================= MAIN APP =================
function App() {
  return (
    <Router>
      <div className="app">
        <nav className="glass-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <footer>✨ Built with ❤️ by Ashik — 2025</footer>
      </div>
    </Router>
  );
}

export default App;
