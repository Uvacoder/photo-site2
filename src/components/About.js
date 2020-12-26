import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="About">
      <h1>This is the About page</h1>
      <Link to="/">Home</Link>
      {/* use Link for internal links*/}
      <a href="https://google.com">google link</a>{" "}
      {/* use href for external links*/}
    </section>
  );
};

export default About;
