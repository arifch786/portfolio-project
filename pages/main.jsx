import Image from "next/image";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { Inter } from "@next/font/google";
import devimg from "../public/dev-img02.gif";
const inter = Inter({ subsets: ["latin"] });
const main = () => {
  return (
    <main className="bg-white ">
      <section className="page01 min-h-screen px-10 bg-slate-100">
        {/* <nav className="py-10  mb-12 flex justify-between">
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
        </nav> */}
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
    </main>
  );
};

export default main;
