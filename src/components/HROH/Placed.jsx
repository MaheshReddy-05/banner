import { useState, useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Iteam from "../slider/Iteam";

export default function Placed() {
  const splideRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isMouseOver) {
        splideRef.current.go(">");
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [isMouseOver]);

  const onSlideMoved = (splide) => {
    setActiveSlide(splide.index % 3);
  };

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Splide
        ref={splideRef}
        options={{
          type: "loop",
          height: "30rem",
          drag: "free",
          perPage: 1,
          arrows: false,
          pagination: false,
          pauseOnHover: false,
          lazyLoad: "nearby",
          gap: 5,
          padding: {
            right: "30%",
            left: "37%",
          },
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
    </div>
  );
}
