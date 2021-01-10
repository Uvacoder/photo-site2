import React from "react";
import { Link } from "react-router-dom";
import about from "./about.jpg";

const About = () => {
  return (
    <section className="About">
      <Link to="/">Home</Link>
      {/* use Link for internal links*/}
      <a href="https://google.com">google link</a>{" "}
      {/* use href for external links*/}
    </section>
  );
};

export default About;
