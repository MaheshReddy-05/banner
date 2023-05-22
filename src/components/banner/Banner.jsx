import React from "react";
import "../../css/Banner.css";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Button from "../materialUI/Buttons";
import Lotti from "../lotti/Lotti";

function Banner() {
  const [text] = useTypewriter({
    words: [
      "from Sunchit Dudeja",
      "from the youngest SDE V @Adobe",
      "from the expert",
      "everything you need to crack your dream job",
      "System Design, Data Structures and more much",
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
                MAANG Interviews.
              </h1>
              <Button />
              <figcaption class="p-4 pt-9 flex items-center gap-x-6">
                <div class="isolate flex -space-x-2">
                  <img
                    class="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                    alt="Dan_Abromov"
                  />
                  <img
                    class="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/smokhfs2uevnppc2bmwl"
                    alt="Guillermo_Rauch"
                  />
                  <img
                    class="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b1d1472f.jpg&amp;w=256&amp;q=75"
                    alt="Lee_Robinson"
                  />
                  <img
                    class="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&amp;w=640&amp;q=75"
                    alt="Delba"
                  />
                </div>
                <div>
                  <p class="font-semibold text-white">500+ developers</p>
                </div>
              </figcaption>
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
