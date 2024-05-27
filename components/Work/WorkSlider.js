"use client";

import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import useWindowDimensions from "../_Hooks/useWindowDimensions";
import WorkSliderInner from "./WorkSliderInner";

const WorkSlider = ({ entry }) => {
  const [sliderHeight, setSliderHeight] = useState(null);
  const [slideIndex, setSlideIndex] = useState(1);
  const { windowHeight } = useWindowDimensions();

  useEffect(() => {
    setSliderHeight(windowHeight - 25);
  }, []);
  return (
    <div className="workSlider">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        effect={"fade"}
        modules={[EffectFade]}
        loop={true}
      >
        {entry?.images.map((image, i) => (
          <SwiperSlide key={i}>
            <WorkSliderInner
              image={image}
              sliderHeight={sliderHeight}
              setSlideIndex={setSlideIndex}
              i={i}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="index">
        {slideIndex} / {entry?.images.length}
      </div>
    </div>
  );
};

export default WorkSlider;