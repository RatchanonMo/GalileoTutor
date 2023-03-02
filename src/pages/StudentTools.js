import React from "react";
import Navbar from "../component/Navbar";

export default function StudentTools() {
  return (
    <div>
      <Navbar />
      <div className="text-center mt-40 mb-10">
        <h1 className="black header  ">Student Tools</h1>
        <p className="text-xl">เครื่องมือช่วยเรียน สำหรับน้องๆ ignite โดยเฉพาะ</p>
      </div>
      <div className="container mx-auto bg-white py-20 drop-shadow-md" style={{borderRadius:"20px"}}>

      </div>
    </div>
  );
}
