import React from "react";
import "../../css/Banner.css";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Button from "../materialUI/Buttons";
import { ban } from "../../assets/";
import Lotti from "../lotti/Lotti";

function Banner() {
  const [text] = useTypewriter({
    words: ["Raja Arivind!", "Mahesh Reddy", "blah blah..."],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <div className="relative bg-[#111827] w-full overflow-hidden border-b-[1px] border-b-black">
      <div className="mx-auto my-9  px-4 sm:px-6 md:my-24 lg:my-32 lg:px-8">
        <div className="container  flex items-center">
          <div className="w-1/2 overflow-hidden">
            <div className="container">
              <h2 className="font-bold text-4xl text-rose-500 heading-1">
                Learn With{" "}
                <span className="text-4xl text-[#e3e3e3]">{text}</span>
                <Cursor
                  cursorBlinking={true}
                  cursorColor="#e3e3e3"
                  cursorStyle={"_"}
                />
              </h2>
              <h1 className="text-2xl font-normal text-[#e3e3e3] pt-5 heading-2">
                The Ultimate Guide To Ace <br />
                MAANG Interviews.
              </h1>
              <Button />
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
