import cssImage from "./assets/img/css.jpg";
import eddImage from "./assets/img/edd.jpg";
import logoImage from "./assets/img/edd-high-resolution-logo-transparent.png";
import fbImage from "./assets/img/fb.png";
import figmaImage from "./assets/img/figma.png";
import gitlabImage from "./assets/img/gitlab.png";
import htmlImage from "./assets/img/html.jpg";
import instagramImage from "./assets/img/instagram.png";
import jsImage from "./assets/img/js.jpg";
import linkedinImage from "./assets/img/linkedin.png";
import mongoDBImage from "./assets/img/mongoDB.png";
import nodejsImage from "./assets/img/nodejs.png";
import reactjsImage from "./assets/img/reactjs.png";
import expressjsImage from "./assets/img/expressjs.jpg";
import alignAppImage from "./assets/img/align-mern-app.png";
import lendingAppImage from "./assets/img/lending-mern-app.png";
import pokidexAppImage from "./assets/img/pokidex-app.png";
import todoAppImage from "./assets/img/todo-list-app.png";
import { useState } from "react";
import EmailForm from "./components/EmailForm";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div>
        <section className="main-navigation fixed top-0 left-0 w-full z-50">
          <header className="navigation">
            <section className="navigation-logo">
              <img src={logoImage} alt="edd's logo" className="logo" />
            </section>
            <button className="hamburger" onClick={toggleMenu}>
              &#9776;{" "}
            </button>
            <nav className={`navigation-links ${menuOpen ? "open" : ""}`}>
              {" "}
              <a href="#portfolio">
                <h3 className="inline-display font-size-nav">PORTFOLIO</h3>
              </a>
              <a href="#about-me">
                <h3 className="inline-display font-size-nav">ABOUT ME</h3>
              </a>
              <a href="#projects">
                <h3 className="inline-display font-size-nav">PROJECTS</h3>
              </a>
              <a href="#questions">
                <h3 className="inline-display font-size-nav">CONTACTS</h3>
              </a>
              <a href="https://eoverzosa.hashnode.dev/transitioning-from-engineer-to-full-stack-web-developer-a-journey-of-transformation">
                <h3 className="inline-display font-size-nav">BLOG</h3>
              </a>
            </nav>
          </header>
        </section>
        <section className="main-header" id="portfolio">
          <header className="header header-grid">
            <h2 className="section-padding font-size">Hello Everyone</h2>
            <h1 className="section-name-main section-name section-padding ">
              I'm Edd Oliver Verzosa
            </h1>
            <h2 className="section-padding  font-size">
              Full-Stack Web Developer
            </h2>
            <img src={eddImage} alt="Edd's photo" className="profile-photo " />
          </header>
        </section>
        <div className="partition" id="about-me"></div>
        <section>
          <div className="about-me">
            <h1 className="section-name padding">About Me</h1>
            <p className="section-padding font-size-about">
              A full-stack web developer with over 11 years of experience as an
              Electrical Engineer, I bring a robust background in low voltage to
              high voltage power supply systems across various sectors including
              commercial, industrial, infrastructure, and oil and gas power
              plants. My expertise spans testing and commissioning, maintenance,
              and construction within these complex environments. Now, I'm
              channeling my analytical skills and problem-solving mindset into
              mastering web development to expand my skill set and contribute to
              the digital landscape.
            </p>
            <div className="container-hire-resume">
              <a href="mailto:edd.oliver.verzosa@gmail.com">
                <h2 className="color-fill">Hire Me</h2>
              </a>
              <a href="/EDD OLIVER VERZOSA_WEBDEV_RESUME_2024.pdf" download>
                <h2 className="border-box">Download Resume</h2>
              </a>
            </div>
          </div>
          <div className="partition"></div>
        </section>
        <section>
          <div className="skills">
            <h1 className="section-name padding skill-main">Personal Skills</h1>
            <section className="front-end">
              <h2 className="padding font-size-skill">FRONT-END</h2>
              <div className="sub-skill">
                <img
                  className="sub-skill-logo"
                  src={htmlImage}
                  alt="HTML logo"
                />
                <img className="sub-skill-logo" src={cssImage} alt="CSS logo" />
                <img className="sub-skill-logo" src={jsImage} alt="JS logo" />
                <img
                  className="sub-skill-logo"
                  src={reactjsImage}
                  alt="ReactJs logo"
                />
                <img
                  className="sub-skill-logo"
                  src={figmaImage}
                  alt="Figma logo"
                />
              </div>
            </section>
            <section className="back-end">
              <h2 className="padding font-size-skill">BACK-END</h2>
              <div className="sub-skill">
                <img
                  className="sub-skill-logo"
                  src={nodejsImage}
                  alt="NodeJS logo"
                />
                <img
                  className="sub-skill-logo"
                  src={expressjsImage}
                  alt="ExpressJS logo"
                />
              </div>
            </section>
            <section className="database">
              <h2 className="padding font-size-skill">DATABASES</h2>
              <div className="sub-skill sub-skill-padding-none">
                <img
                  className="sub-skill-logo"
                  src={mongoDBImage}
                  alt="MongoDB logo"
                />
              </div>
            </section>
          </div>
          <div className="partition" id="projects"></div>
        </section>
        <section>
          <div className="projects">
            <h1 className="section-name padding projects-main">PROJECTS</h1>
            <section className="project-distribution mb-10">
              <img
                src={alignAppImage}
                alt="align mern app logo"
                className="project-logo"
              />
              <h2 className="project-padding font-size-project -mb-6 mt-2">
                Align App - Event Management System
              </h2>
              <div className="button-group flex space-x-8 md:space-x-32 mt-2">
                <a
                  href="https://align-mern-app.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary-100 text-white px-4 py-2 rounded text-sm lg:text-xl transform transition-transform duration-300 hover:scale-110"
                >
                  View Demo
                </a>
                <a
                  href="https://github.com/EddOliver24/align-mern-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded text-sm lg:text-xl border-2 border-secondary-100 transform transition-transform duration-300 hover:scale-110"
                >
                  View Code
                </a>
              </div>
            </section>
            <section className="project-solar  mb-10">
              <img
                src={lendingAppImage}
                alt="lending mern app logo"
                className="project-logo"
              />
              <h2 className="project-padding font-size-project -mb-6 mt-2">
                Micro-Scale Lending App
              </h2>
              <div className="button-group flex space-x-8 md:space-x-32 mt-2">
                <a
                  href="https://lending-app-sandy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary-100 text-white px-4 py-2 rounded text-sm lg:text-xl transform transition-transform duration-300 hover:scale-110"
                >
                  View Demo
                </a>
                <a
                  href="https://github.com/EddOliver24/lending-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded text-sm lg:text-xl border-2 border-secondary-100 transform transition-transform duration-300 hover:scale-110"
                >
                  View Code
                </a>
              </div>
            </section>
            <section className="project-calculator mb-10">
              <img
                src={pokidexAppImage}
                alt="pokidex app logo"
                className="project-logo"
              />
              <h2 className="project-padding font-size-project -mb-6 mt-2">
                Simple Pokidex App
              </h2>
              <div className="button-group flex space-x-8 md:space-x-32 mt-2">
                <a
                  href="https://pokidex-app.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary-100 text-white px-4 py-2 rounded text-sm lg:text-xl transform transition-transform duration-300 hover:scale-110"
                >
                  View Demo
                </a>
                <a
                  href="https://github.com/EddOliver24/pokidex-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded text-sm lg:text-xl border-2 border-secondary-100 transform transition-transform duration-300 hover:scale-110"
                >
                  View Code
                </a>
              </div>
            </section>
            <section className="project-shop mb-10">
              <img
                src={todoAppImage}
                alt="todo app logo"
                className="project-logo"
              />
              <h2 className="project-padding font-size-project -mb-6 mt-2">
                Todo App
              </h2>
              <div className="button-group flex space-x-8 md:space-x-32 mt-2">
                <a
                  href="https://todo-app-lime-two.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary-100 text-white px-4 py-2 rounded text-sm lg:text-xl transform transition-transform duration-300 hover:scale-110"
                >
                  View Demo
                </a>
                <a
                  href="https://github.com/EddOliver24/todo-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded text-sm lg:text-xl border-2 border-secondary-100 transform transition-transform duration-300 hover:scale-110"
                >
                  View Code
                </a>
              </div>
            </section>
          </div>
          <div className="partition" id="questions"></div>
        </section>
        <section>
          <div className="questions">
            <h1 className="section-name padding text-center">Questions</h1>
            <EmailForm />
          </div>
          <div className="partition"></div>
        </section>
        <section>
          <div>
            <footer className="footer">
              <div className="footer-logo-row">
                <a href="https://www.facebook.com/edd.verzosa">
                  <img
                    src={fbImage}
                    alt="facebook logo"
                    className="footer-logo"
                  />
                </a>
                <a href="https://www.instagram.com/edd.oliver/">
                  <img
                    src={instagramImage}
                    alt="instagram logo"
                    className="footer-logo"
                  />
                </a>
                <a href="https://www.linkedin.com/in/edd-oliver-verzosa-247a88136/">
                  <img
                    src={linkedinImage}
                    alt="linkedin logo"
                    className="footer-logo"
                  />
                </a>
                <a href="https://gitlab.com/edd.oliver.verzosa">
                  <img
                    src={gitlabImage}
                    alt="gitlab logo"
                    className="footer-logo"
                  />
                </a>
              </div>
              <div>
                <p className="text-center footer-name-padding">
                  © 2024 Edd Oliver Verzosa
                </p>
              </div>
            </footer>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
