import React from "react";
import Navbar from "../component/Navbar";
import { MdLocationPin } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLine } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div>
      <Navbar current="/contact-us" />
      <div className="text-center mt-32 ">
        <h1 className="black header  ">Contact Us</h1>
        <p className="text-xl">ช่องทางการติดต่อเรา</p>
      </div>
      <div
        className="container mx-auto bg-white my-10 py-20 drop-shadow-md "
        style={{ borderRadius: "20px" }}
      >
        <div className="px-20">
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <img src="./img/map.jpg" className="mx-auto" alt="" />
            </div>
            <div>
              <div className="my-4">
                <h1 className="text-2xl font-bold my-2">
                  <MdLocationPin className="inline fill-red-500" /> สำนักงาน
                  กาลิเลโอ ติวเตอร์
                </h1>
                <h3>
                  29/157 หมู่บ้านกลางเมือง สาทร - สุขสวัสดิ์ ซอยสุขสวัสดิ์ 39
                  ต.บางพึ่ง อ.พระประแดง 10130
                </h3>
              </div>
              <div className="my-4">
                <h1 className="text-2xl font-bold my-2">
                  <MdLocationPin className="inline fill-red-500" /> Galileo
                  Tutor Office
                </h1>
                <h3>
                  29/157 Baan Klang Muang Sathorn - Suksawat, soi suksawat 39,
                  Bang Phueng, Phra Pradaeng, Samut Prakan 10130
                </h3>
              </div>
              <h3>
                <a className="text-blue-500" href="tel:0817842186">
                  &nbsp; 081-7842186
                </a>
                ,
                <a className="text-blue-500" href="tel:0847720046">
                  &nbsp; 084-7720046
                </a>
              </h3>

              <h3 className="my-2">
                <FaFacebook className="inline text-xl text-blue-600" />
                <a
                  target="_blank"
                  className="text-blue-500"
                  href="https://www.facebook.com/GalileoTutor"
                  rel="noreferrer"
                >
                  &nbsp; GalileoTutor
                </a>
              </h3>
              <h3 className="my-2">
                <FaInstagram className="inline text-xl text-pink-500" />
                <a
                  target="_blank"
                  className="text-blue-500"
                  href="https://www.instagram.com/galileo_tutor/"
                  rel="noreferrer"
                >
                  &nbsp; galileo_tutor
                </a>
              </h3>
              <h3 className="my-2">
                <FaLine className="inline text-xl text-green-500" />
                <a
                  target="_blank"
                  className="text-blue-500"
                  href="https://line.me/R/ti/p/@efj7400q"
                  rel="noreferrer"
                >
                  &nbsp; @galileo_tutor
                </a>
              </h3>
              <div className="moreButton">
          <a href="https://goo.gl/maps/mm3gFQ1VJvo5qzra8" target="_blank" rel="noreferrer">
            <button className="border border-black text-black p-2 px-4 rounded-full mt-2 hover:bg-black hover:text-white ease-in duration-100">
              View on Google Map
            </button>
          </a>
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
