import React from "react";
import { Link } from "react-router-dom";
import about from "./about.jpg";

const About = () => {
  return (
    <section className="About">
      <p>
        <strong>Awards</strong>
        <br />
        Marist College Autumn Photography Competition: Finalist
        <br />
        McMaster Design League Designathon: 3rd
      </p>
      <img
        src={about}
        alt="A young woman with brown skin and black, curly hair wearing a black sweater."
      />
      <Link to="/">Home</Link>
      {/* use Link for internal links*/}
      <a href="https://google.com">google link</a>{" "}
      {/* use href for external links*/}
    </section>
  );
};

export default About;
