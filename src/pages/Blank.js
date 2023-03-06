import React from "react";
import Navbar from "../component/Navbar";

import Footer from "../component/Footer";

export default function OurTeam() {
  return (
    <div>
      <Navbar current="/contact-us" />
      <div className="text-center mt-32 ">
        <h1 className="black header  ">Title</h1>
        <p className="text-xl">รองหัวข้อ</p>
      </div>
      <div
        className="container mx-auto bg-white my-10 py-20 drop-shadow-md "
        style={{ borderRadius: "20px" }}
      >
        <div className="px-20">
          
        </div>
      </div>
      <Footer/>
    </div>
  );
}
