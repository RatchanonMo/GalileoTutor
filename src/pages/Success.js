import React from "react";
import Navbar from "../component/Navbar";

import Footer from "../component/Footer";

export default function Success() {
  return (
    <div>
      <Navbar current="/contact-us" />
      <div className="text-center mt-32 ">
        <h1 className="black header  ">OurSuccess</h1>
        <p className="text-xl">รองหัวข้อ</p>
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
