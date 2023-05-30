import React from "react";
import "../../css/Banner.css";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Button from "../materialUI/Buttons";
import Lotti from "../lotti/Lotti";

function Banner() {
  const githubUsernames = [
    "MaheshReddy-05",
    "MaheshReddy-05",
    "MaheshReddy-05",
    "MaheshReddy-05",
  ];
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
    <div className="relative bg-[#111827] w-full overflow-hidden border-b-[1px] border-b-black">
      <div className="mx-auto my-9  px-4 sm:px-6 md:my-24 lg:my-32 lg:px-8">
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
              <Button />
              <div className="mx-auto ml-5 my-10 flex flex-wrap -space-x-1.5">
                {githubUsernames.map((username) => (
                  <img
                    key={username}
                    src={`https://github.com/${username}.png?size=60`}
                    alt={`User ${username}`}
                    loading="lazy"
                    className="h-6 w-6 rounded-full border-2 border-solid border-white transition  lg:h-12 lg:w-12"
                  />
                ))}
                <div className="my-auto pl-5 text-white lg:text-xl">
                  500+ Developers
                </div>
              </div>
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


// hover:-translate-y-2 hover:scale-150