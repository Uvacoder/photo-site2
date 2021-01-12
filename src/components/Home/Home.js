import React from "react";

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
          <img src={home1} alt="sunrise bokeh" />
          <img
            src={home2}
            alt="Green mountains and a cloudy blue sky on a bright summer day"
          />
          <img
            src={home3}
            alt="Two young women sitting on the edge of a mountain with their backs turned on an overcast, cloudy day"
          />
          <img
            src={home4}
            alt="A sun flare reflects on a blue body of water under a pier"
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
