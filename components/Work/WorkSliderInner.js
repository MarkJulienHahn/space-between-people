import React, { useEffect, useRef } from "react";

import Image from "next/image";
import { useSwiper, useSwiperSlide } from "swiper/react";

const WorkSliderInner = ({ image, sliderHeight, setSlideIndex, i }) => {
  const swiperSlide = useSwiperSlide();
  const swiper = useSwiper();

  const imgRef = useRef();

  const swiperFunction = () => {
    swiper.slideNext();
    imgRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  useEffect(() => {
    swiperSlide.isActive && setSlideIndex(i + 1);
  }, [swiperSlide]);

  return (
    <>
      <div
        className="scrollAnchor"
        ref={imgRef}
        style={{
          width: "20px",
          height: "20px",
          background: "red",
          zIndex: "1000",
        }}
      />
      <div className={"sliderImage"} onClick={swiperFunction}>
        <Image
          src={image.asset.url}
          fill
          objectFit="contain"
          objectPosition="left top"
        />
      </div>
    </>
  );
};

export default WorkSliderInner;
