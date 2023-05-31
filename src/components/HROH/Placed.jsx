import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

export default function Placed() {
  return (
    <Splide
      options={{
        type: "loop",
        drag: "free",
        height: "20rem",
        perPage: 5,
        arrows: false,
        pagination: false,
        pauseOnHover: false,
        lazyLoad: "nearby",
        autoScroll: {
          speed: 1,
          pauseOnHover: true,
          rewind: false
        },
        gap: 10
      }}
      extensions={{ AutoScroll }}
    >
      <SplideSlide>
        <div className="p-10 bg-rose-500">
            A
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="p-10 bg-rose-500">
            A
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="p-10 bg-rose-500">
            A
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="p-10 bg-rose-500">
            A
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="p-10 bg-rose-500">
            A
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="p-10 bg-rose-500">
            A
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="p-10 bg-rose-500">
            A
        </div>
      </SplideSlide>
    </Splide>
  );
}