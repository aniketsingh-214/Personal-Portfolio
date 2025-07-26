import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Screenshot1 from "../assets/img/Screenshot1.png";
import Screenshot2 from "../assets/img/Screenshot2.png";
import Screenshot3 from "../assets/img/Screenshot3.png";
import Screenshot4 from "../assets/img/Screenshot4.png";
import Screenshot5 from "../assets/img/Screenshot5.png";
import Screenshot6 from "../assets/img/Screenshot6.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Tappy Chat Application",
      description: "JWT & WsbSockets",
      imgUrl: Screenshot1,
      url: "",
    },
    {
      title: "Ozone 2.0 Gym Website",
      description: "Developed using MERN STACK",
      imgUrl: Screenshot2,
      url: "https://github.com/aniketsingh-214/OZONE-2.0-GYM-APPLICATION",
    },
    {
      title: "Pizza Shoap Frontend Project",
      description: "Developed using ReactJS & Redux",
      imgUrl: Screenshot3,
      url: "https://github.com/aniketsingh-214/Pizza-Shop-Frontend-Project",
    },
    {
      title: "FullStack Developer ",
      description: "Certified by Udemy",
      imgUrl: Screenshot4,
      url: "https://www.udemy.com/certificate/UC-d071fddf-9248-4d81-b305-227bef1f1ffd/",
    },
    {
      title: "C++ & Data Structure",
      description: "Certified by Udemy",
      imgUrl: Screenshot5,
      url: "https://www.udemy.com/certificate/UC-d37e349e-663c-40a2-a1ce-adb8bbb91398/",
    },
    {
      title: "Sudoko Solver Game",
      description: "Developed using C++ and OOP Concept",
      imgUrl: Screenshot6,
      url: "https://github.com/aniketsingh-214/Sudoko-Solver-Game",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    This section presents my professional journey through three
                    key areas: resumes and certificates that reflect my skills
                    and qualifications, hands-on internship experiences
                    demonstrating real-world exposure, and achievements
                    showcasing academic and extracurricular excellence.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <h2>Experience</h2>
                        <div data-aos="fade-up">
                          <h4>
                            🏢{" "}
                            <strong>
                              KollegeApply Pvt. Ltd. – Frontend Developer Intern
                            </strong>{" "}
                            <span> | Jan 2025 – Present</span>
                          </h4>
                          <p>
                            ⚙️ Developed and maintained 6+ frontend components
                            using Next.js and TypeScript to enhance UI and
                            modularity.
                            <br />
                            🧩 Enhanced the admin dashboard by integrating
                            custom CMS tools for efficient task execution.
                            <br />
                            🚀 Reduced page load time by 40% through optimized
                            RESTful API integration and efficient data fetching.
                          </p>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="200">
                          <h4 >
                            💼{" "}
                            <strong>
                              Cognifyz Technologies – Frontend Intern
                            </strong>{" "}
                            <span> | Aug 2024</span>
                          </h4>
                          <p >
                            🌐 Built and deployed 2 responsive websites using
                            HTML5, CSS3, JavaScript, and Bootstrap for
                            cross-platform compatibility.
                            <br />
                            ✅ Implemented dynamic form validation and
                            integrated third-party APIs to boost interaction by
                            25%.
                            <br />
                            🎨 Structured reusable styles using Sass to reduce
                            design inconsistencies and improve maintainability.
                          </p>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="section">
                        <p>
                          This section presents my professional journey through
                          three key areas: resumes and certificates that reflect
                          my skills and qualifications, hands-on internship
                          experiences demonstrating real-world exposure, and
                          achievements showcasing academic and extracurricular
                          excellence.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <h2>Achievements</h2>
                        <div data-aos="fade-up">
                          <h4>
                            🚀 <strong>AI Tool Workshop</strong>
                          </h4>
                          <p>
                            🧠 Explored <strong>no-code AI tools</strong> for
                            seamless workflow automation.
                            <br />✨ Gained hands-on experience with
                            drag-and-drop logic, real-world use cases, and
                            productivity boosters.
                          </p>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="200">
                          <h4>
                            💻{" "}
                            <strong>
                              Coding Profiles <strong>LeetCode</strong>
                            </strong>
                          </h4>
                          <p>
                            <br />
                            🔸 Solved <strong>300+ coding problems</strong>{" "}
                            focused on Arrays, Linked Lists, Recursion, and
                            Trees.
                            <br />
                            ⚙️ Strengthened algorithmic thinking, optimized time
                            & space complexity.
                            <br />
                            📈 Aligned with industry-level technical interview
                            prep.
                            <br />
                            👉{" "}
                            <a
                              href="https://leetcode.com/u/BT21CSE214/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Profile
                            </a>
                          </p>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
