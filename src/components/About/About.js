import React from "react";
import { Link } from "react-router-dom";

import "./About.css";
import about from "./about.jpg";

const About = () => {
  return (
    <main>
      <section className="about">
        <div className="column">
          <h1>
            Landscape photographer + <br />
            Computer scientist
          </h1>
          <h2>Awards —</h2>
          <a
            href="https://www.instagram.com/p/CErVYMjDjIS/?utm_source=ig_web_copy_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Polarr Photo Editor Feature
          </a>
          <br />
          <br />
          <a
            href="https://www.marist.edu/-/red-fox-spotlight-kaylin-moss"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marist College Red Fox Spotlight
          </a>
          <br />
          <h2>Story —</h2>
          <p>
            Kaylin Moss transforms landscapes into emotional journeys. She was
            raised in Charleston, South Carolina, where her attachment to the
            natural world was birthed.
            <br />
            <br />
            While charming southern coastlines are incorporated in Kaylin's
            work, her adventures bring her far from home. She is continually
            exploring new forests, mountains, and terrains along the U.S.
            eastern coast.
            <br />
            <br />
            See how she bends tradition in her{" "}
            <Link to="/nostalgia">Nostalgia </Link> series, follows the sun in{" "}
            <Link to="/joy">Joy</Link>, plays with shadows in{" "}
            <Link to="/despair">Despair</Link>, and creates unique waterscapes
            in <Link to="/tranquility">Tranquility</Link>.
            <br />
            <br />
            Kaylin is currently a computer science student at Marist College in
            Poughkeepsie, New York.
          </p>
          <br />
          <h2>Contact —</h2>
          <a href="mailto:kaylin.moss1@gmail.com">kaylin.moss1@gmail.com</a>
          <br />
          <br />
          <a
            href="https://www.instagram.com/aspiringdreams"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
        <div className="column">
          <img
            src={about}
            alt="A young woman with brown skin, and black curly hair wearing a black sweater."
          />
        </div>
      </section>
    </main>
  );
};

export default About;
