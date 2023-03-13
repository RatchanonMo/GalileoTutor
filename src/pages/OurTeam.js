import React from "react";
import Navbar from "../component/Navbar";

import Footer from "../component/Footer";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { LiveChatLoaderProvider, Drift } from "react-live-chat-loader";

export default function OurTeam() {
  const people = [
    {
      name: "ดร. วรเดช พูนคำ (ครูเติม)",
      role: "ผู้บริหาร / ติวเตอร์",
      imageUrl: "./img/term.jpg",
    },
    {
      name: "ศรัญญา มงคลสิทธิ์ (เก๋)",
      role: "ผู้บริหาร",
      imageUrl: "./img/kae.jpg",
    },
    {
      name: "ดร. สาริทธิ์ จารุชัยบวร (ครูมีน)",
      role: "ติวเตอร์",
      imageUrl: "./img/mean.jpg",
    },
    {
      name: "ดร. กิตต์ ปัญญารัตน์ (ครูกิตต์)",
      role: "ติวเตอร์",
      imageUrl: "./img/kit.jpg",
    },
    {
      name: "ดร. วีระวัฒน์ คลอวุฒิมันตร์ (ครูวี)",
      role: "ติวเตอร์",
      imageUrl: "./img/wee.jpg",
    },
    {
      name: "ครู ศรัณย์ อินทะผิว (ครูพี)",
      role: "ติวเตอร์",
      imageUrl: "./img/pee.jpg",
    },
    {
      name: "ครู วิธิวัสส์ ปราณสิริจิรภาส (ครูบิ๊ก)",
      role: "ติวเตอร์",
      imageUrl: "./img/big.jpg",
    },
    {
      name: "นาย รัชชานนท์ มุขแก้ว",
      role: "ฝ่ายงาน IT",
      imageUrl: "./img/non.jpg",
    },
    // More people...
  ];

  return (
    <div>
      <Navbar current="/contact-us" />
      <LiveChatLoaderProvider providerKey="fzxz67paxw42" provider="drift">
        <Drift />
      </LiveChatLoaderProvider>
      <div className="text-center mt-32 ">
        <p className=" py-2 px-3 border border-black rounded-full inline">
          ทีมงานของกาลิเลโอติวเตอร์
        </p>
        <h1 className="black text-9xl  ">Our Team</h1>
      </div>
      <div
        className="container mx-auto bg-white my-10 py-20 "
        style={{ borderRadius: "20px" }}
      >
        <div className="px-40 grid grid-cols-3 gap-4 ">
          {people.map((people) => (
            <div
              className="py-10 bg-slate-100  text-center ease-in duration-200 "
              style={{ borderRadius: "20px" }}
            >
              <img
                src={people.imageUrl}
                className="mb-8 rounded-full mx-auto"
                alt=""
              />

              <h3 className="text-lg font-bold">{people.name}</h3>
              <h3 className="text-md " style={{ color: "#a555ec" }}>
                {people.role}
              </h3>
              <div className="p-4">
                <a
                  href="https://www.facebook.com/GalileoTutor"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook className="inline text-xl m-1" />
                </a>
                <a
                  href="https://www.instagram.com/galileo_tutor/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="inline text-xl m-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
