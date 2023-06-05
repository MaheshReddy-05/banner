import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Lotti from "../lotti/Lotti";

function Banner() {
  const [text] = useTypewriter({
    words: [
      "from the youngest SDE-V!",
      "from the expert @ Adobe!",
      "everything needed for your next switch!",
      "from Sunchit Dudeja",
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <div className="relative w-full overflow-hidden ">
      <div className="mx-auto px-4 sm:px-6 md:my-24 lg:my-32 lg:px-8">
        <div className="container  flex items-center">
          <div className="w-1/2 overflow-hidden">
            <div className="container">
              <h2 className="font-bold text-4xl text-rose-500 heading-1">
                Learn <span className="text-4xl text-[#e3e3e3]">{text}</span>
                <Cursor
                  cursorBlinking={true}
                  cursorColor="#e3e3e3"
                  cursorStyle={"_"}
                />
              </h2>
              <h1 className="text-2xl font-normal text-[#e3e3e3] pt-5 heading-2">
                The Ultimate Guide To Ace <br />
                MAANG Interviews and become great Engineers
              </h1>
            </div>
          </div>
          <div className="w-1/2">
            <div className="banner-img">
              <Lotti></Lotti>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
