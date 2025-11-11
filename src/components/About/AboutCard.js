import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Prabhat Prajapati</span>{" "}
            from <span className="purple">Delhi, India</span>.
            <br />
            I’m currently studying at {" "}
            <span className="purple">KIET Group of Institutions</span> in{" "}
            <span className="purple">Information Technology</span>.
            
            {/* <br /> */}
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Outings with Friends 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Poems and shyari ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "It's not over until I win!"{" "}
          </p>
          <footer className="blockquote-footer">Prabhat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
