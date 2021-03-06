import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import home1 from "./home1.png";
import home2 from "./home2.png";
import home3 from "./home3.png";
import home4 from "./home4.png";

const Home = () => {
  return (
    <main id="home">
      <section className="home">
        <div className="column">
          <Link to="/nostalgia">
            <img src={home1} alt="sunrise bokeh" />
          </Link>

          <Link to="/joy">
            <img
              src={home2}
              alt="Green mountains and a cloudy blue sky on a bright summer day"
            />
          </Link>

          <Link to="/despair">
            <img
              src={home3}
              alt="Two young women sitting on the edge of a mountain with their backs turned on an overcast, cloudy day"
            />
          </Link>

          <Link to="/tranquility">
            <img
              src={home4}
              alt="A sun flare reflects on a blue body of water under a pier"
            />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
