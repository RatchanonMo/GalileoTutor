import React from "react";
import Navbar from "../component/Navbar";

import Footer from "../component/Footer";

export default function Blog() {
  return (
    <div>
      <Navbar current="/contact-us" />
      <div className="text-center mt-32 ">
      <p className=" py-2 px-3 border border-black rounded-full inline">
          พวกเราคือใคร
        </p>
        <h1 className="black header  ">Blog & News</h1>
    
      </div>
      <div
        className="container mx-auto bg-white my-10 py-20 drop-shadow-md "
        style={{ borderRadius: "20px" }}
      >
        <div className="px-20">
          {/* Code goes here */}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
