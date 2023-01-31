import Image from "next/image";
import React, { useState } from "react";
import { CgDarkMode } from "react-icons/cg";
import { FaWordpress, FaWordpressSimple } from "react-icons/fa";
import { AiFillCode } from "react-icons/ai";
import { BiBookContent } from "react-icons/bi";
import { SiWebstorm } from "react-icons/si";
import Link from "next/link";
import wordPress from "../pages/wordpress";
import dpsection2 from "../public/dev-img01.png";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMobile,
} from "react-icons/ai";

import { Inter } from "@next/font/google";
import devimg from "../public/dev-img02.gif";
import dp from "../public/dp.png";

const inter = Inter({ subsets: ["latin"] });

const main = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <main className="bg-white ">
      <section className="page01 min-h-screen px-10 bg-slate-100">
        <nav className="py-10  mb-12 flex justify-between">
          <h1 className="text-2xl font-semibold">Arif.</h1>
          <ul className="flex items-center ">
            <li className={`${darkMode ? "dark" : "light"} mode-container`}>
              <button onClick={toggleDarkMode}>
                <CgDarkMode className="cursor-pointer text-2xl" />
              </button>
            </li>

            <li>
              <button className="bg-gradient-to-r from-cyan-700 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8 ">
                Resume
              </button>
            </li>
          </ul>
        </nav>
        <div className="text-center ">
          <h2 className="text-4xl font-semibold py-5 text-teal-600">
            Muhammad Arif Raza
          </h2>
          <h3 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Javascript Developer | Front-End Developer
          </h3>
          <p className="text-center text-gray-800 py-5 text-xl leading-5">
            Ambitious, creative, confident, and committed character, seeking to
            pursue my career in full stack developer with a dynamic
            organization. Looking forward to expanding my knowledge and earning
            work experience.
          </p>
        </div>
        <div className="flex  justify-center mx-auto relative">
          <Image src={devimg} alt="loading..." />
        </div>
        <div className="  flex pb-5 justify-center space-x-10">
          <AiFillTwitterCircle className="text-3xl  text-gray-600" />
          <AiFillLinkedin className="text-3xl text-gray-600" />
          <AiFillGithub className="text-3xl text-gray-600" />
        </div>
      </section>
      <section className="page02 text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full ">
            <h1 className="sm:text-3xl text-4xl uppercase font-bold title-font mb-4 text-teal-600">
              Services
            </h1>
            <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              What I Do
            </h2>
          </div>
          <div>
            <Image
              src={dpsection2}
              alt="loading..."
              className="w-min flex justify-center "
            />
          </div>
          <div className="flex flex-wrap  items-center -m-2">
            <div className="p-2 sm:w-1/2 xl:w-1/4 md:w-1/2 w-full  ">
              <div className=" p-2  border-gray-500 border  rounded-lg">
                <AiFillCode className="text-6xl" />
                <div className="">
                  <h2 className="text-gray-900  uppercase  text-3xl title-font font-normal">
                    Web development
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 xl:w-1/4 md:w-1/2 w-full  ">
              <div className=" p-2  border-gray-500 border  rounded-lg">
                <FaWordpress className="text-6xl" />
                <div className="">
                  <h2 className="text-gray-900   uppercase  text-3xl title-font font-normal">
                    WordPress
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 xl:w-1/4 md:w-1/2 w-full  ">
              <div className=" p-2  border-gray-500 border  rounded-lg">
                <BiBookContent className="text-6xl" />
                <div className="">
                  <h2 className="text-gray-900  uppercase  text-3xl title-font font-normal">
                    Content Writing
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 xl:w-1/4 md:w-1/2 w-full  ">
              <div className=" p-2  border-gray-500 border  rounded-lg">
                <AiFillMobile className="text-6xl" />
                <div className="">
                  <h2 className="text-gray-900  uppercase  text-3xl title-font font-normal">
                    Mobile app
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="text-gray-600 body-font  py-10">
          <div className="container py-5 px-5 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  2.7K
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  1.8K
                </h2>
                <p className="leading-relaxed">Subscribes</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  35
                </h2>
                <p className="leading-relaxed">Downloads</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  4
                </h2>
                <p className="leading-relaxed">Products</p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="page03 bg-slate-100">
        <div className=" p-10 text-center xl:flex justify-center items-center   w-full pt-10 grid grid-cols-1 divide-y ">
          <div className=" flex justify-center">
            <Image src={dp} alt="loading..." />
          </div>
          <div className=" ">
            <h1 className="sm:text-3xl text-4xl uppercase font-bold title-font mt-4 mb-4 text-teal-600">
              portfolio
            </h1>
            <h2 className="sm:text-3xl text-2xl uppercase font-medium title-font  text-gray-900">
              About me
            </h2>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-200 text-teal-600  relative z-10 title-font font-medium text-sm">
                    1
                  </div>
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-24 h-24 bg-gray-200 text-teal-600 rounded-full inline-flex items-center justify-center">
                      <SiWebstorm className="text-5xl" />
                    </div>
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                        web development
                      </h2>
                      <p className="leading-relaxed">
                        VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                        Kinfolk bespoke try-hard cliche palo santo offal.
                      </p>
                      <div className="flex justify-center items-centerpb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                        <li className="text-indigo-500 inline-flex items-center">
                          <Link href="/webdev">Learn More</Link>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-200 text-teal-600  relative z-10 title-font font-medium text-sm">
                    2
                  </div>
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-24 h-24 bg-gray-200 text-teal-600 rounded-full inline-flex items-center justify-center">
                      <BiBookContent className="text-5xl" />
                    </div>
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 className="font-medium  title-font text-gray-900 mb-1 text-xl">
                        Content writing
                      </h2>
                      <p className="leading-relaxed">
                        VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                        Kinfolk bespoke try-hard cliche palo santo offal.
                      </p>
                      <div className="flex justify-center items-centerpb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                        <li className="text-indigo-500 inline-flex items-center">
                          <Link href="/conwriting">Learn More</Link>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-200 text-teal-600  relative z-10 title-font font-medium text-sm">
                    3
                  </div>
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-24 h-24 bg-gray-200 text-teal-600 rounded-full inline-flex items-center justify-center">
                      <FaWordpress className="text-5xl" />
                    </div>
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                        Wordpress
                      </h2>
                      <p className="leading-relaxed">
                        VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                        Kinfolk bespoke try-hard cliche palo santo offal.
                      </p>
                      <div className="flex justify-center items-centerpb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                        <li className="text-indigo-500 inline-flex items-center">
                          <Link href="/conwriting">Learn More</Link>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-200 text-teal-600 relative z-10 title-font font-medium text-sm">
                    4
                  </div>
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-24 h-24 bg-gray-200 text-teal-600 rounded-full inline-flex items-center justify-center">
                      <AiFillMobile className="text-5xl" />
                    </div>
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                        Mobile App
                      </h2>
                      <p className="leading-relaxed">
                        VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                        Kinfolk bespoke try-hard cliche palo santo offal.
                      </p>
                      <div className="flex justify-center items-centerpb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                        <li className="text-indigo-500 inline-flex items-center">
                          <Link href="/conwriting">Learn More</Link>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className="page04">{wordPress}</section>
    </main>
  );
};

export default main;
