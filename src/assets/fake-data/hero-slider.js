// const img1 = require("../images/slider/slide_1.png").default;
// const img2 = require("../images/slider/slide_2.png").default;
// const img3 = require("../images/slider/slide_3.png").default;

import img1 from "../images/slider/slide_1.png";
import img2 from "../images/slider/slide_2.png";
import img3 from "../images/slider/slide_3.png";

const heroSliderData = [
  {
    title: "long established fact",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    img: img1,
    color: "blue",
    path: "/catalog/ao-thun-dinosaur-01",
  },
  {
    title: "What is Lorem Ipsum",
    description:
      "Established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    img: img2,
    path: "/catalog/ao-thun-dinosaur-02",
    color: "pink",
  },
  {
    title: "Where can I get some",
    description:
      "Search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    img: img3,
    path: "/catalog/ao-thun-dinosaur-03",
    color: "orange",
  },
];

export default heroSliderData;
