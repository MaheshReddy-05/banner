import { useState, useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Iteam from "../slider/Iteam";

export default function Placed() {
  const splideRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      splideRef.current.go(">")
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const onSlideMoved = (splide) => {
    setActiveSlide(splide.index % 3);
  };

  return (
    <Splide
      ref={splideRef}
      options={{
        type: "loop",
        height: "30rem",
        drag: "free",
        perPage: 1,
        arrows: false,
        pagination: false,
        pauseOnHover: false, // Set pauseOnHover to false to prevent scrolling on hover
        lazyLoad: "nearby",
        gap: 5,
        padding: {
          right: "30%",
          left: "37%"
        }
      }}
      onMoved={onSlideMoved}
    >
      <SplideSlide>
        <Iteam></Iteam>
      </SplideSlide>
      <SplideSlide>
        <Iteam></Iteam>
      </SplideSlide>
      <SplideSlide>
        <Iteam></Iteam>
      </SplideSlide>
      <SplideSlide>
        <Iteam></Iteam>
      </SplideSlide>
      <SplideSlide>
        <Iteam></Iteam>
      </SplideSlide>
      <SplideSlide>
        <Iteam></Iteam>
      </SplideSlide>
      <SplideSlide>
        <Iteam></Iteam>
      </SplideSlide>
    </Splide>
  );
}
