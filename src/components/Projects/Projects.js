import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import solar from "../../Assets/Projects/solar.png";
import addiction from "../../Assets/Projects/addiction.png";
import web from "../../Assets/Projects/web.png";
import suicide from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web}
              isBlog={false}
              title="webcam"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/MarcSurpris/webcam/tree/main"
              demoLink="https://webcam-hd57.onrender.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={solar}
              isBlog={false}
              title="Solar-Survey"
              description="I developed a dynamic solar landing page using Python and SQL, designed to promote solar energy solutions with a seamless and engaging user experience. Leveraging Python’s Flask framework, I built a responsive front-end interface that highlights the benefits of solar energy, featuring a clean design with interactive elements like a savings calculator and a contact form for inquiries. The backend, powered by SQL, efficiently manages user data, storing form submissions and customer information securely in a SQLite database. This integration ensures smooth data handling and scalability, allowing the page to handle user interactions effortlessly while showcasing my skills in web development and database management.Explain Flask framework usage Explore Django framework Make it more concise"
              ghLink="https://github.com/MarcSurpris/solar-survey"
              demoLink="https://solar-survey-3ae2.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={addiction}
              isBlog={false}
              title="Addiction-Support"
              description="My addiction-support website, built using Python and SQL, is a compassionate digital platform designed to empower individuals on their recovery journey. Leveraging Python’s Flask framework for a seamless and responsive user experience, the site offers a safe space where users can access resources, track their progress, and connect with a supportive community. The SQL database efficiently stores user profiles, recovery milestones, and motivational content, ensuring personalized and secure data management. Features like daily affirmations, goal-setting tools, and a forum for sharing stories foster hope and accountability, while the clean, intuitive interface makes navigation effortless for users seeking guidance and encouragement in overcoming addiction.

."
              ghLink="https://github.com/MarcSurpris/addiction-support"
              demoLink="https://addiction-support.onrender.com/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Mental health support"
              description="TThe Mental Health Support website, developed under Surpris Web Solutions, is a compassionate and innovative platform built using Python and the Flask framework to provide accessible mental health resources. Leveraging Python's versatility, the site integrates modern features like AI-driven chat support powered by the openai library, offering users personalized guidance and coping strategies. With a clean, responsive design and secure deployment on Render, the website delivers real-time support, educational content, and community resources, all optimized for 2025 web trends such as fast load times and voice search compatibility. As a 21-year-old college student and freelance developer, I’ve crafted this site to empower individuals, blending technical expertise with a personal commitment to mental wellness.

Explain Flask integration

AI in healthcare

more concise

"
              ghLink="https://github.com/MarcSurpris/MentalHealth/actions/runs/15717953586"
               demoLink="https://mentalhealth-laxv.onrender.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
