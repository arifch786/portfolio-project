import React from "react";
import Image from "next/image";
import { FaWordpress, FaWordpressSimple } from "react-icons/fa";
import { BiBookContent } from "react-icons/bi";
import { SiWebstorm } from "react-icons/si";
import Link from "next/link";

import { AiFillMobile } from "react-icons/ai";

import dp from "../public/dp.png";

const Portfolio = () => {
  return (
    <div>
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
    </div>
  );
};

export default Portfolio;
