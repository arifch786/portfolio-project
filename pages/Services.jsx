import Image from "next/image";
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

const Services = () => {
  return (
    <div>
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
              priority={true}
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
    </div>
  );
};

export default Services;
