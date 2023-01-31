import React from "react";
import Image from "next/image";
import {
  FaReact,
  FaHtml5,
  FaBootstrap,
  FaGithubSquare,
  FaGitSquare,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiRedux,
  SiMongodb,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FcCommandLine } from "react-icons/fc";
import { DiFirebase } from "react-icons/di";

import dp1 from "../public/dp.png";

const webdev = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen from-gray-700 via-gray-800 to-gray-900 bg-gradient-to-br">
        <div className="relative w-full group max-w-md min-w-0 mx-auto mt-6 mb-6 break-words bg-white border shadow-2xl dark:bg-gray-800 dark:border-gray-700 md:max-w-sm rounded-xl">
          <div className="pb-6">
            <div className="flex flex-wrap justify-center">
              <div className="flex justify-center w-full">
                <div className="relative">
                  <Image
                    src={dp1}
                    alt="loading..."
                    className="dark:shadow-xl border-white dark:border-gray-800 rounded-full align-middle border-8 absolute -m-16 -ml-18 lg:-ml-16 max-w-[150px]"
                  />
                </div>
              </div>
            </div>
            <div className="mt-20  text-center">
              <h3 className="mb-1 text-2xl font-bold leading-normal text-gray-700 dark:text-gray-300">
                Muhammad Arif Raza
              </h3>
              <div className="flex flex-row justify-center w-full mx-auto space-x-2 text-center">
                <div className="text-sm font-bold tracking-wide text-gray-600 dark:text-gray-300 font-mono ">
                  JavaScript / Front-end Developer
                </div>
              </div>
            </div>
            <div className="pt-6 mx-6 mt-6 text-center border-t border-gray-200 dark:border-gray-700/50">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-6">
                  <div className="mb-4 font-light leading-relaxed text-gray-600 dark:text-gray-400">
                    <div className="flex space-x-5">
                      <FaHtml5 className="text-5xl" />
                      <FaBootstrap className="text-5xl" />
                      <SiTailwindcss className="text-5xl" />
                      <SiJavascript className="text-5xl" />
                      <FaReact className="text-5xl" />
                    </div>
                    <div className="flex space-x-5 pl-8 pr-8">
                      <TbBrandNextjs className="text-5xl" />
                      <SiRedux className="text-5xl" />
                      <SiMongodb className="text-5xl" />
                      <FaGitSquare className="text-5xl" />
                    </div>
                    <div className="flex space-x-5">
                      <FaGithubSquare className="text-5xl" />
                      <FcCommandLine className="text-5xl" />
                      <DiFirebase className="text-5xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-6 overflow-hidden translate-y-6 rounded-b-xl">
              <div className="absolute flex -space-x-12 rounded-b-2xl">
                <div className="w-36 h-8 transition-colors duration-200 delay-75 transform skew-x-[35deg] bg-amber-400/90 group-hover:bg-amber-600/90 z-10"></div>
                <div className="w-28 h-8 transition-colors duration-200 delay-100 transform skew-x-[35deg] bg-amber-300/90 group-hover:bg-amber-500/90 z-20"></div>
                <div className="w-28 h-8 transition-colors duration-200 delay-150 transform skew-x-[35deg] bg-amber-200/90 group-hover:bg-amber-400/90 z-30"></div>
                <div className="w-28 h-8 transition-colors duration-200 delay-200 transform skew-x-[35deg] bg-amber-100/90 group-hover:bg-amber-300/90 z-40"></div>
                <div className="w-28 h-8 transition-colors duration-200 delay-300 transform skew-x-[35deg] bg-amber-50/90 group-hover:bg-amber-200/90 z-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default webdev;
