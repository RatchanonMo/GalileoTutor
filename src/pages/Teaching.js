import React from "react";
import Navbar from "../component/Navbar";

import Footer from "../component/Footer";
import YoutubeEmbed from "../component/YoutubeEmbed";

export default function Teaching() {
  const clip = [
    {
      name: "ครูเติม",
      embedId1: "FQP-G-FQpdo",
      embedId2: "bqf-2-78-Ho",
      embedId3: "zorzzRgr5ic",
    },
    {
      name: "ครูพี",
      embedId1: "E2MLydekDpU",
      embedId2: "1G_-6Lzu9Q8",
      embedId3: "itWZwRXRVYY",
    },
    {
      name: "ครูมีน",
      embedId1: "86BKpMA_H90",
      embedId2: "",
      embedId3: "",
    },
    // {
    //   name: "ครูกิตต์",
    //   embedId1: "",
    //   embedId2: "",
    //   embedId3: "",
    // },
    // {
    //   name: "ครูวี",
    //   embedId1: "",
    //   embedId2: "",
    //   embedId3: "",
    // },

    {
      name: "ครูบิ็ก",
      embedId1: "_IvAzuiLv08",
      embedId2: "",
      embedId3: "",
    },
  ];

  return (
    <div>
      <Navbar current="/contact-us" />
      <div className="text-center mt-32 ">
        <p className="py-2 px-3 border border-black rounded-full inline">
          ตัวอย่างวิดีโอการเรียนการสอน
        </p>
        <h1 className="black header  mt-5">Teaching Example</h1>
      </div>

      {/* Code goes here */}
      <div className="container mx-auto my-10 drop-shadow-md ">
        <YoutubeEmbed embedId="l-q3r3PY9AI" autoplay="1" />
      </div>
      <div
        className="container mx-auto bg-white my-4 py-20 drop-shadow-md "
        style={{ borderRadius: "20px" }}
      >
        <div className="px-10">
          {clip.map((item) => (
            <div className="mb-10">
              <h2 className="font-bold text-2xl">
                ตัวอย่างการสอนของ
                <span style={{ color: "#a555ec" }}>{item.name}</span>
              </h2>
              <div className="grid grid-cols-3 gap-5 mt-3">
                <div>
                  <YoutubeEmbed embedId={item.embedId1} autoplay="0" />
                </div>
                <div>
                  <YoutubeEmbed embedId={item.embedId2} autoplay="0" />
                </div>
                <div>
                  <YoutubeEmbed embedId={item.embedId3} autoplay="0" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
