import React, { useState, useEffect, useCallback } from "react";
import HeroBg from "../assets/images/hero-bg.jpg";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import Button from "./Button";

function HeroSlider(props) {
  const data = props.data;
  const timeOut = props.timeOut ? props.timeOut : 3000;

  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = useCallback(() => {
    const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1;
    setActiveSlide(index);
    console.log("hello");
  }, [activeSlide, data]);

  const prevSlide = () => {
    const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1;
    setActiveSlide(index);
  };

  useEffect(() => {
    if (props.auto) {
      const slideAuto = setInterval(() => {
        nextSlide();
      }, timeOut);
      return () => {
        clearInterval(slideAuto);
      };
    }
  }, [nextSlide, timeOut]);
  return (
    <div className="hero_slider">
      <img src={HeroBg} alt="" />
      {data.map((item, index) => (
        <HeroSliderItem
          key={index}
          item={item}
          active={index === activeSlide}
        />
      ))}
      {props.control ? (
        <div className="hero_slider_control">
          <div className="hero_slider_control_item" onClick={prevSlide}>
            <ArrowBackIosIcon />
          </div>
          <div className="hero_slider_control_item">
            <div className="index">
              {activeSlide + 1}/{data.length}
            </div>
          </div>
          <div className="hero_slider_control_item " onClick={nextSlide}>
            <ArrowBackIosIcon />
          </div>
        </div>
      ) : null}
    </div>
  );
}

const HeroSliderItem = ({ item, active }) => (
  <div className={`hero_slider_item ${active ? "active" : ""}`}>
    <div className="hero_slider_item_content">
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <Button icon={AddShoppingCartIcon} animate={true}>
        See Details
      </Button>
    </div>
    <div className="hero_slider_item_img">
      <img src={item.img} alt="" />
    </div>
  </div>
);

export default HeroSlider;
