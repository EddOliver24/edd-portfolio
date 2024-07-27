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
import mongoDbLogo from "./assets/img/mongodb-original.svg";
import expressLogo from "./assets/img/express-original.svg";
import reactLogo from "./assets/img/react-original.svg";
import nodeLogo from "./assets/img/nodejs-original.svg";
import jsLogo from "./assets/img/javascript-original.svg";
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
          <header className="navigation bg-secondary-300 text-secondary-500">
            <section className="navigation-logo">
              <img src={logoImage} alt="edd's logo" className="logo" />
            </section>
            <button className="hamburger" onClick={toggleMenu}>
              &#9776;{" "}
            </button>
            <nav className={`navigation-links ${menuOpen ? "open" : ""}`}>
              {" "}
              <a href="#portfolio">
                <h3 className="inline-display font-size-nav text-secondary-500 font-bold">
                  PORTFOLIO
                </h3>
              </a>
              <a href="#about-me">
                <h3 className="inline-display font-size-nav text-secondary-500 font-bold">
                  ABOUT ME
                </h3>
              </a>
              <a href="#projects">
                <h3 className="inline-display font-size-nav text-secondary-500 font-bold">
                  PROJECTS
                </h3>
              </a>
              <a href="#questions">
                <h3 className="inline-display font-size-nav text-secondary-500 font-bold">
                  CONTACTS
                </h3>
              </a>
              <a href="https://eoverzosa.hashnode.dev/transitioning-from-engineer-to-full-stack-web-developer-a-journey-of-transformation">
                <h3 className="inline-display font-size-nav text-secondary-500 font-bold">
                  BLOG
                </h3>
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
          <div className="about-me bg-secondary-300">
            <h1 className="section-name padding text-secondary-500">
              About Me
            </h1>
            <p className="section-padding font-size-about text-secondary-500 font-bold">
              As a full-stack web developer transitioning from a career as an
              Electrical Engineer with over 11 years of experience, I bring a
              wealth of technical expertise and problem-solving expertise to the
              digital realm. My extensive background in low to high voltage
              power supply systems within diverse sectors such as commercial,
              industrial, infrastructure, and oil and gas power plants has honed
              my skills in testing, commissioning, maintenance, and
              construction. This technical foundation equips me with a unique
              problem-solving mindset that I am now applying to web development.
              I am eager to leverage my comprehensive engineering experience and
              innovative approach to contribute meaningfully to the digital
              landscape and drive impactful projects.
            </p>
            <div className="container-hire-resume">
              <a href="mailto:edd.oliver.verzosa@gmail.com">
                <h2 className="color-fill">Hire Me</h2>
              </a>
              <a href="/EDD OLIVER VERZOSA_WEBDEV_RESUME_07262024.pdf" download>
                <h2 className="border-box bg-secondary-500 mb-4">
                  Download Resume
                </h2>
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
          <div className="projects bg-secondary-300 text-secondary-500">
            <h1 className="section-name padding projects-main">PROJECTS</h1>
            <section className="project-distribution mb-10">
              <img
                src={alignAppImage}
                alt="align mern app logo"
                className="project-logo"
              />
              <h2 className="project-padding font-size-project -mb-6 mt-2 font-bold">
                Align App - Event Management System
              </h2>
              <p className="text-justify w-4/5 mx-auto lg:text-lg lg:w-11/12 mb-2">
                This application allows users to create and manage events
                designed to foster community engagement. By providing tools for
                event organization and promotion, it helps bring people together
                for various social, educational, and recreational activities.
              </p>

              <div className="flex justify-center items-center space-x-6 my-4">
                <img
                  src={mongoDbLogo}
                  alt="MongoDB Logo"
                  className="w-12 h-12 border-2 border-secondary-500 p-1 rounded-xl"
                ></img>
                <img
                  src={expressLogo}
                  alt="Express JS Logo"
                  className="w-12 h-12 border-2 border-secondary-500 p-1 rounded-xl"
                ></img>
                <img
                  src={jsLogo}
                  alt="JavaScript Logo"
                  className="w-12 h-12 border-2 border-secondary-500 p-1 rounded-xl"
                ></img>
                <img
                  src={reactLogo}
                  alt="React JS Logo"
                  className="w-12 h-12 border-2 border-secondary-500 p-1 rounded-xl"
                ></img>
                <img
                  src={nodeLogo}
                  alt="Node JS Logo"
                  className="w-12 h-12 border-2 border-secondary-500 p-1 rounded-xl"
                ></img>
              </div>
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
                  className="px-4 py-2 rounded text-sm lg:text-xl border-2 border-secondary-100 transform transition-transform duration-300 hover:scale-110 bg-secondary-500"
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
              <h2 className="project-padding font-size-project -mb-6 mt-2 font-bold">
                Micro-Scale Lending App
              </h2>
              <p className="text-justify w-4/5 mx-auto lg:text-lg lg:w-11/12 mb-2">
                This app showcase a features for micro-scale lending business.
                The user are limited to lenders. The user are able to login,
                signup, and logout, check and add borrower, update payment of
                borrower.
              </p>
              <div className="flex justify-center items-center space-x-6 my-4">
                <img
                  src={mongoDbLogo}
                  alt="MongoDB Logo"
                  className="w-12 h-12 border-2 border-secondary-500 p-1 rounded-xl"
                ></img>
                <img
                  src={expressLogo}
                  alt="Express JS Logo"
                  className="w-12 h-12 border-2 border-secondary-500 p-1 rounded-xl"
                ></img>
                <img
                  src={jsLogo}
                  alt="JavaScript Logo"
                  className="w-12 h-12 border-2 border-secondary-500 p-1 rounded-xl"
                ></img>
                <img
                  src={reactLogo}
                  alt="React JS Logo"
                  className="w-12 h-12 border-2 border-secondary-500 p-1 rounded-xl"
                ></img>
                <img
                  src={nodeLogo}
                  alt="Node JS Logo"
                  className="w-12 h-12 border-2 border-secondary-500 p-1 rounded-xl"
                ></img>
              </div>
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
                  className="px-4 py-2 rounded text-sm lg:text-xl border-2 border-secondary-100 transform transition-transform duration-300 hover:scale-110 bg-secondary-500"
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
              <h2 className="project-padding font-size-project -mb-6 mt-2 font-bold">
                Simple Pokidex App
              </h2>
              <p className="text-justify w-4/5 mx-auto lg:text-lg lg:w-11/12 mb-2">
                The Simple Pokédex app is a React-based web application that
                allows users to explore and display information about Pokémon.
                The app leverages the PokéAPI to fetch data and display it in a
                user-friendly interface.
              </p>
              <div className="flex justify-center items-center space-x-6 my-4">
                <img
                  src={jsLogo}
                  alt="JavaScript Logo"
                  className="w-12 h-12 border-2 border-secondary-500 p-1 rounded-xl"
                ></img>
                <img
                  src={reactLogo}
                  alt="React JS Logo"
                  className="w-12 h-12 border-2 border-secondary-500 p-1 rounded-xl"
                ></img>
              </div>

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
                  className="px-4 py-2 rounded text-sm lg:text-xl border-2 border-secondary-100 transform transition-transform duration-300 hover:scale-110 bg-secondary-500"
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
              <h2 className="project-padding font-size-project -mb-6 mt-2 font-bold">
                Todo App
              </h2>
              <p className="text-justify w-4/5 mx-auto lg:text-lg lg:w-11/12 mb-2">
                The Todo App is a simple and intuitive task management
                application built with React.js. It allows users to add, manage,
                and remove tasks with ease.
              </p>
              <div className="flex justify-center items-center space-x-6 my-4">
                <img
                  src={jsLogo}
                  alt="JavaScript Logo"
                  className="w-12 h-12 border-2 border-secondary-500 p-1 rounded-xl"
                ></img>
                <img
                  src={reactLogo}
                  alt="React JS Logo"
                  className="w-12 h-12 border-2 border-secondary-500 p-1 rounded-xl"
                ></img>
              </div>

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
                  className="px-4 py-2 rounded text-sm lg:text-xl border-2 border-secondary-100 transform transition-transform duration-300 hover:scale-110 bg-secondary-500"

                >
                  View Code
                </a>
              </div>
            </section>
          </div>
          <div className="partition bg-secondary-300" id="questions"></div>
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
