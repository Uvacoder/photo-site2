import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

import "./Nostalgia.css";
import nostalgia1 from "./nostalgia1.JPG";
import nostalgia2 from "./nostalgia2.jpg";
import nostalgia3 from "./nostalgia3.JPG";
import nostalgia4 from "./nostalgia4.JPG";
import nostalgia5 from "./nostalgia5.jpg";
import nostalgia6 from "./nostalgia6.JPG";

const Nostalgia = () => {
  return (
    <section className="nostalgia">
      <SRLWrapper>
        <a href={nostalgia1}>
          <img src={nostalgia1} alt="Caption" />
        </a>
        <a href={nostalgia2}>
          <img src={nostalgia2} alt="Caption" />
        </a>
      </SRLWrapper>
    </section>
  );
};

export default Nostalgia;
