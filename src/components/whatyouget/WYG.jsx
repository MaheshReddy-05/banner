import React from "react";
import { youtube } from "../../assets";
import {LLD} from "../lotti/Lotti.jsx";
export default function () {
  return (
    <div>
      <div className="mx-auto py-auto max-w-7xl px-4 sm:px-6 md:my-24 lg:my-32 lg:px-8">
        <div>
        <div className="text-center">
          <div className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            What you get with CD
          </div>
          <div className="mt-4 text-2sm leading-6 tracking-wide text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat et, <br />
            id placeat repellendus enim perspiciatis facilis voluptatum itaque nulla aspernatur.
          </div>
        </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-3 grid grid-cols-2 py-10">
              <div className="col-span-1 my-auto">
                <div className="text-3xl font-bold leading-tight text-rose-500 sm:text-4xl lg:text-[30px]">
                  Data Structures
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
              <div className="col-span-1 flex items-center justify-center">
                <LLD></LLD>
              </div>
            </div>
            <div className="col-span-3 grid grid-cols-2 py-10 ">
              <div className="col-span-1 my-auto justify-center">
               <LLD></LLD>
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
            <div className="col-span-3 grid grid-cols-2 py-10">
              <div className="col-span-1 my-auto">
                <div className="text-3xl font-bold leading-tight text-rose-500 sm:text-4xl lg:text-[30px] my-auto">
                  Data Structures
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
              <div className="col-span-1 flex items-center justify-center my-auto">
              <LLD></LLD>
              </div>
            </div>
            <div className="col-span-3 grid grid-cols-2 py-10 ">
              <div className="col-span-1 my-auto justify-center">
               <LLD></LLD>
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
          </div>
        </div>
      </div>
    </div>
  );
}
