import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

import GoToTop from "../GoToTop";

import tranquility1 from "./full-size/tranquility1.JPG";
import tranquility2 from "./full-size/tranquility2.jpeg";
import tranquility3 from "./full-size/tranquility3.JPG";
import tranquility4 from "./full-size/tranquility4.jpg";
import tranquility5 from "./full-size/tranquility5.JPG";
import tranquility6 from "./full-size/tranquility6.JPG";
import tranquility7 from "./full-size/tranquility7.JPG";
import tranquility8 from "./full-size/tranquility8.jpeg";
import tranquility9 from "./full-size/tranquility9.jpeg";
import tranquility10 from "./full-size/tranquility10.jpg";
import tranquility11 from "./full-size/tranquility11.jpeg";
import tranquility12 from "./full-size/tranquility12.jpg";
import tranquility13 from "./full-size/tranquility13.jpeg";
import tranquility14 from "./full-size/tranquility14.jpeg";
import tranquility15 from "./full-size/tranquility15.jpg";

import tranquility1thumbnail from "./thumbnails/tranquility1thumbnail.jpg";
import tranquility2thumbnail from "./thumbnails/tranquility2thumbnail.jpg";
import tranquility3thumbnail from "./thumbnails/tranquility3thumbnail.jpg";
import tranquility4thumbnail from "./thumbnails/tranquility4thumbnail.jpg";
import tranquility5thumbnail from "./thumbnails/tranquility5thumbnail.jpg";
import tranquility6thumbnail from "./thumbnails/tranquility6thumbnail.JPG";
import tranquility7thumbnail from "./thumbnails/tranquility7thumbnail.jpg";
import tranquility8thumbnail from "./thumbnails/tranquility8thumbnail.jpg";
import tranquility9thumbnail from "./thumbnails/tranquility9thumbnail.jpg";
import tranquility10thumbnail from "./thumbnails/tranquility10thumbnail.jpg";
import tranquility11thumbnail from "./thumbnails/tranquility11thumbnail.jpg";
import tranquility12thumbnail from "./thumbnails/tranquility12thumbnail.jpg";
import tranquility13thumbnail from "./thumbnails/tranquility13thumbnail.jpg";
import tranquility14thumbnail from "./thumbnails/tranquility14thumbnail.jpg";
import tranquility15thumbnail from "./thumbnails/tranquility15thumbnail.jpg";

const Tranquility = () => {
  return (
    <section className="gallery">
      <SRLWrapper>
        <a href={tranquility1}>
          <img
            src={tranquility1thumbnail}
            alt="Handfuls of Blue - Mount Pleasant, South Carolina"
          />
        </a>

        <a href={tranquility2}>
          <img
            src={tranquility2thumbnail}
            alt="Opening Up - Poughkeepsie, New York"
          />
        </a>

        <a href={tranquility3}>
          <img
            src={tranquility3thumbnail}
            alt="Shrimp Boat Ln - Mount Pleasant, South Carolina"
          />
        </a>

        <a href={tranquility4}>
          <img
            src={tranquility4thumbnail}
            alt="Nocturnal Lullaby - Mount Pleasant, South Carolina"
          />
        </a>

        <a href={tranquility5}>
          <img
            src={tranquility5thumbnail}
            alt="Hidden Growth - Jacksonville, Florida"
          />
        </a>

        <a href={tranquility6}>
          <img
            src={tranquility6thumbnail}
            alt="Abide a While - Isle of Palms, South Carolina"
          />
        </a>

        <a href={tranquility7}>
          <img
            src={tranquility7thumbnail}
            alt="Canvas - Poughkeepsie, New York"
          />
        </a>

        <a href={tranquility8}>
          <img
            src={tranquility8thumbnail}
            alt="Oscillations of the Mind - Sullivans Island, South Carolina"
          />
        </a>

        <a href={tranquility9}>
          <img
            src={tranquility9thumbnail}
            alt="River Sounds - Poughkeepsie, New York"
          />
        </a>

        <a href={tranquility10}>
          <img
            src={tranquility10thumbnail}
            alt="Morning Dawning - Poughkeepsie, New York"
          />
        </a>

        <a href={tranquility11}>
          <img
            src={tranquility11thumbnail}
            alt="Reflections for Today - Poughkeepsie, New York"
          />
        </a>

        <a href={tranquility12}>
          <img
            src={tranquility12thumbnail}
            alt="Under the Breeze - Mount Pleasant, South Carolina"
          />
        </a>

        <a href={tranquility13}>
          <img
            src={tranquility13thumbnail}
            alt="Starting - Mount Pleasant, South Carolina"
          />
        </a>

        <a href={tranquility14}>
          <img
            src={tranquility14thumbnail}
            alt="Morning Dawning - San Diego, California"
          />
        </a>

        <a href={tranquility15}>
          <img
            src={tranquility15thumbnail}
            alt="Morning Dawning - Poughkeepsie, New York"
          />
        </a>
      </SRLWrapper>
      <GoToTop />
    </section>
  );
};

export default Tranquility;
