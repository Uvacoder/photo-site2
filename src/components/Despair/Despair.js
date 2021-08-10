import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

import GoToTop from "../GoToTop";

import despair1 from "./full-size/despair1.jpg";
import despair2 from "./full-size/despair2.JPG";
import despair3 from "./full-size/despair3.jpg";
import despair4 from "./full-size/despair4.jpg";
import despair5 from "./full-size/despair5.jpg";
import despair6 from "./full-size/despair6.jpg";
import despair7 from "./full-size/despair7.jpg";
import despair8 from "./full-size/despair8.jpg";
import despair9 from "./full-size/despair9.jpeg";
import despair10 from "./full-size/despair10.jpeg";

import despair1thumbnail from "./thumbnails/despair1thumbnail.jpg";
import despair2thumbnail from "./thumbnails/despair2thumbnail.jpg";
import despair3thumbnail from "./thumbnails/despair3thumbnail.jpg";
import despair4thumbnail from "./thumbnails/despair4thumbnail.jpg";
import despair5thumbnail from "./thumbnails/despair5thumbnail.jpg";
import despair6thumbnail from "./thumbnails/despair6thumbnail.jpg";
import despair7thumbnail from "./thumbnails/despair7thumbnail.jpg";
import despair8thumbnail from "./thumbnails/despair8thumbnail.jpg";
import despair9thumbnail from "./thumbnails/despair9thumbnail.jpg";
import despair10thumbnail from "./thumbnails/despair10thumbnail.jpg";

const Despair = () => {
  return (
    <section className="gallery">
      <SRLWrapper>
        <a href={despair1}>
          <img
            src={despair1thumbnail}
            alt="Lonely, Not Alone - Beacon, New York"
          />
        </a>

        <a href={despair2}>
          <img src={despair2thumbnail} alt="Breathe - Poughkeepsie, New York" />
        </a>

        <a href={despair3}>
          <img src={despair3thumbnail} alt="Sunken - Jacksonville, Florida" />
        </a>

        <a href={despair4}>
          <img
            src={despair4thumbnail}
            alt="Swipe for Follows - Isle of Palms, South Carolina"
          />
        </a>

        <a href={despair5}>
          <img src={despair5thumbnail} alt="Glare - Fishkill, New York" />
        </a>

        <a href={despair6}>
          <img src={despair6thumbnail} alt="Walls - Saint Peter, Minnesota" />
        </a>

        <a href={despair7}>
          <img
            src={despair7thumbnail}
            alt="A View From the Window - Mount Pleasant, South Carolina"
          />
        </a>

        <a href={despair8}>
          <img
            src={despair8thumbnail}
            alt="Where to Focus? - Santa Monica, California"
          />
        </a>

        <a href={despair9}>
          <img
            src={despair9thumbnail}
            alt="Reach for Help - Yosemite National Park, California"
          />
        </a>

        <a href={despair10}>
          <img
            src={despair10thumbnail}
            alt="Out of Control - Beacon, New York"
          />
        </a>
      </SRLWrapper>
      <GoToTop />
    </section>
  );
};

export default Despair;
