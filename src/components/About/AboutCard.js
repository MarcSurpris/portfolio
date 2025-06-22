import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
       <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Marc Surpris</span>, a 21-year-old college student passionate about <span className="purple">computer science</span>.
            <br />
            I've been programming for 5 years, honing my skills in coding and problem-solving.
            <br />
            As I pursue my degree, I'm excited to explore the ever-evolving world of technology and contribute to innovative projects that shape the future.
            <br />
            <br />
            Tools & Technologies: <span className="purple">Git, Visual Studio Code, SQL, Linux</span>
            <br />
            Soft Skills: <span className="purple">Problem-solving, teamwork, time management, strong communication</span>
            <br />
            Other: Familiarity with <span className="purple">object-oriented programming, debugging, and software development lifecycle</span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Marc Surpris</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
