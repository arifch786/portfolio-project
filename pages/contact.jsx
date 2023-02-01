import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle, AiOutlineWechat } from "react-icons/ai";

import "react-toastify/dist/ReactToastify.css";

const contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [location, setlocation] = useState("");
  const [desc, setdesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, phone, email, location, desc);
    const data = { name, phone, email, location, desc };

    const res = await fetch("http://localhost:3000/api/postcontact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:", data);
        alert("thanks for contacting us");
        setphone("");
        setdesc("");
        setemail("");
        setlocation("");
        setname("");
        toast.success("you successfully submit your credentials!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.log("error");
      });
  };
  const handleChange = (e) => {
    if (e.target.name == "phone") {
      setphone(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "location") {
      setlocation(e.target.value);
    } else if (e.target.name == "desc") {
      setdesc(e.target.value);
    } else if (e.target.name == "name") {
      setname(e.target.value);
    }
  };

  return (
    <section className="text-gray-600 body-font relative">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className=" px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h2 className="text-3xl uppercase font-bold py-5 text-teal-600">
            contact us
          </h2>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-lg font-bold text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleChange}
                  name="name"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-lg font-bold text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  required
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-lg font-bold text-gray-600">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={handleChange}
                  required
                  name="phone"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-lg font-bold text-gray-600">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  name="location"
                  required
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-lg font-bold text-gray-600">
                  Comments
                </label>
                <textarea
                  id="desc"
                  value={desc}
                  onChange={handleChange}
                  required
                  name="desc"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                type="submit"
                className="flex mx-auto bg-gradient-to-r from-cyan-700 bg-cyan-500 text-white  border-0 py-2 px-8 focus:outline-none hover:bg-cyan-700 rounded text-lg font-semibold"
              >
                submitt
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <span className="inline-flex">
                <a className="text-gray-500">
                  <FaFacebook className="text-4xl" />
                </a>
                <a className="ml-4 text-gray-500">
                  <AiFillTwitterCircle className="text-4xl" />
                </a>
                <a className="ml-4 text-gray-500">
                  <FaInstagramSquare className="text-4xl" />
                </a>
                <a className="ml-4 text-gray-500">
                  <AiOutlineWechat className="text-4xl" />
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default contact;
