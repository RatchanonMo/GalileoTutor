import React from "react";
import { FaFacebook, FaInstagram, FaLine } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="relative ">
      {/* <svg
        className="absolute "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{top: "-170"}}
      >
        <path
          fill="#e4e8eb"
          fill-opacity="1"
          d="M0,128L120,106.7C240,85,480,43,720,42.7C960,43,1200,85,1320,106.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg> */}
      <div className="absolute w-full">
      <div className="p-12 " style={{ background: "#e4e8eb"}}>
        <div className="container mx-auto">
          <img src="./img/logo.png" alt="" />

          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="my-4">
                <h1 className="text-xl font-bold my-2">
                  สำนักงาน กาลิเลโอ ติวเตอร์
                </h1>
                <h3>
                  29/157 หมู่บ้านกลางเมือง สาทร - สุขสวัสดิ์ ซอยสุขสวัสดิ์ 39
                  ต.บางพึ่ง อ.พระประแดง 10130
                </h3>
              </div>
              <div className="flex">
                <span>ติดต่อ</span>
                <div className="flex flex-col">
                  <a className="text-blue-500" href="tel:0817842186">
                    &nbsp; 081-7842186
                  </a>

                  <a className="text-blue-500" href="tel:0847720046">
                    &nbsp; 084-7720046
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="my-4">
                <h1 className="text-xl font-bold my-2">Galileo Tutor Office</h1>
                <h3>
                  29/157 Baan Klang Muang Sathorn - Suksawat, soi suksawat 39,
                  Bang Phueng, Phra Pradaeng, Samut Prakan 10130
                </h3>
              </div>
              <div className="flex">
                <span>Tel</span>
                <div className="flex flex-col">
                  <a className="text-blue-500" href="tel:0817842186">
                    &nbsp; 081-7842186
                  </a>

                  <a className="text-blue-500" href="tel:0847720046">
                    &nbsp; 084-7720046
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="my-4">
                <h1 className="text-xl font-bold my-2">Social Media</h1>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="p-1 text-center text-white "
        style={{ background: "#a555ec" }}
      >
        <p>© Copyright GalileoTutor 2023. All Rights Reserved.</p>
      </div>
      </div>
    </div>
  );
}
