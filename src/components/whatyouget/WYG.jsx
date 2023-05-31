import React from "react";
import { LLD } from "../lotti/Lotti.jsx";
import { DS } from "../../assets";
export default function () {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:my-24 lg:my-24 lg:px-8">
        <div>
          <div className="text-center">
            <div className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Why Coding Decoded?
            </div>
            <div className="mt-4 text-2sm leading-6 tracking-wide text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              et, <br />
              id placeat repellendus enim perspiciatis facilis voluptatum itaque
              nulla aspernatur.
            </div>
          </div>
          <div className="pt-10">
            <div className="grid grid-cols-2 ">
              <div className="col-span-1 my-auto">
                <div className="text-3xl font-bold leading-tight text-rose-500 sm:text-4xl lg:text-[30px] ">
                  Data Structures
                </div>
                <div className="text-[16px] pt-5">
                  A strong understanding of data structures allows candidates to
                  solve complex problems and demonstrate their ability to write
                  efficient code. We have detailed step by step detailed videos
                  to build DSA concepts (Link to SDE revision sheet)
                </div>
              </div>
              <div className="col-span-1 m-auto w-80 ">
                <img src={DS} alt="Your Image" class="rounded-2xl shadow-3xl" />
              </div>
            </div>
            <div className="grid grid-cols-2 ">
            <div className="col-span-1 m-auto w-80 ">
                <img src={DS} alt="Your Image" class="rounded-2xl shadow-3xl" />
              </div>
              <div className="col-span-1 my-auto">
                <div className="text-3xl font-bold leading-tight text-rose-500 sm:text-4xl lg:text-[30px]">
                  Low Level System Design
                </div>
                <div className="text-[16px] pt-5">
                  Protect your content from unauthorized use and plagiarism with
                  regular scans. Stay ahead of the rapid creation of new content
                  by automatically monitoring and safeguarding your work. Gain
                  peace of mind knowing that your content is secure and
                  protected against unlawful duplication, ensuring its integrity
                  and originality.
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 ">
              <div className="col-span-1 my-auto">
                <div className="text-3xl font-bold leading-tight text-rose-500 sm:text-4xl lg:text-[30px] ">
                  Enhance your technical skills
                </div>
                <div className="text-[16px] pt-5">
                  Protect your content from unauthorized use and plagiarism with
                  regular scans. Stay ahead of the rapid creation of new content
                  by automatically monitoring and safeguarding your work. Gain
                  peace of mind knowing that your content is secure and
                  protected against unlawful duplication, ensuring its integrity
                  and originality.
                </div>
              </div>
              <div className="col-span-1 m-auto w-80 ">
                <img src={DS} alt="Your Image" class="rounded-2xl shadow-3xl" />
              </div>
            </div>
            <div className="grid grid-cols-2  ">
            <div className="col-span-1 m-auto w-80 ">
                <img src={DS} alt="Your Image" class="rounded-2xl shadow-3xl" />
              </div>
              <div className="col-span-1 my-auto">
                <div className="text-3xl font-bold leading-tight text-rose-500 sm:text-4xl lg:text-[30px]">
                  Strongest referral community
                </div>
                <div className="text-[16px] pt-5">
                  Protect your content from unauthorized use and plagiarism with
                  regular scans. Stay ahead of the rapid creation of new content
                  by automatically monitoring and safeguarding your work. Gain
                  peace of mind knowing that your content is secure and
                  protected against unlawful duplication, ensuring its integrity
                  and originality.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
