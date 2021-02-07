import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

import joy1 from "./full-size/joy1.jpg";
import joy2 from "./full-size/joy2.png";
import joy3 from "./full-size/joy3.jpg";
import joy4 from "./full-size/joy4.jpeg";
import joy5 from "./full-size/joy5.jpg";
import joy6 from "./full-size/joy6.jpg";
import joy7 from "./full-size/joy7.jpg";
import joy8 from "./full-size/joy8.jpg";
import joy9 from "./full-size/joy9.png";
import joy10 from "./full-size/joy10.jpg";
import joy11 from "./full-size/joy11.png";
import joy12 from "./full-size/joy12.png";

import joy1thumbnail from "./thumbnails/joy1thumbnail.jpg";
import joy2thumbnail from "./thumbnails/joy2thumbnail.jpg";
import joy3thumbnail from "./thumbnails/joy3thumbnail.jpg";
import joy4thumbnail from "./thumbnails/joy4thumbnail.jpg";
import joy5thumbnail from "./thumbnails/joy5thumbnail.jpg";
import joy6thumbnail from "./thumbnails/joy6thumbnail.jpg";
import joy7thumbnail from "./thumbnails/joy7thumbnail.jpg";
import joy8thumbnail from "./thumbnails/joy8thumbnail.jpg";
import joy9thumbnail from "./thumbnails/joy9thumbnail.jpg";
import joy10thumbnail from "./thumbnails/joy10thumbnail.jpg";
import joy11thumbnail from "./thumbnails/joy11thumbnail.jpg";
import joy12thumbnail from "./thumbnails/joy12thumbnail.jpg";

const Joy = () => {
  return (
    <section className="gallery">
      <SRLWrapper>
        <a href={joy1}>
          <img
            src={joy1thumbnail}
            alt="Summer Liberation - New Paltz, New York"
          />
        </a>

        <a href={joy2}>
          <img src={joy2thumbnail} alt="Sunshine Prone - Cornwall, New York" />
        </a>

        <a href={joy3}>
          <img src={joy3thumbnail} alt="Fireflies - Millerton, New York" />
        </a>

        <a href={joy4}>
          <img src={joy4thumbnail} alt="Waterdancer - Poughkeepsie, New York" />
        </a>

        <a href={joy5}>
          <img src={joy5thumbnail} alt="Blankets - Amelia Island, Florida" />
        </a>

        <a href={joy6}>
          <img
            src={joy6thumbnail}
            alt="Walking with You - Millerton, New York"
          />
        </a>

        <a href={joy7}>
          <img src={joy7thumbnail} alt="Sneak Peek - New Paltz, New York" />
        </a>

        <a href={joy8}>
          <img
            src={joy8thumbnail}
            alt="JUMP - Mount Pleasant, South Carolina"
          />
        </a>

        <a href={joy9}>
          <img
            src={joy9thumbnail}
            alt="Venture Together - Cornwall, New York"
          />
        </a>

        <a href={joy10}>
          <img src={joy10thumbnail} alt="Vibrance - Beacon, New York" />
        </a>

        <a href={joy11}>
          <img src={joy11thumbnail} alt="Found Again - Cornwall, New York" />
        </a>

        <a href={joy12}>
          <img
            src={joy12thumbnail}
            alt="Lift Up - Taughannock Falls, Trumansburg New York"
          />
        </a>
      </SRLWrapper>
    </section>
  );
};

export default Joy;
