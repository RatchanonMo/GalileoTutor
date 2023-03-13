import React from "react";
import Navbar from "../component/Navbar";

import Footer from "../component/Footer";
import { LiveChatLoaderProvider, Drift } from "react-live-chat-loader";

export default function Success() {
  return (
    <div>
      <Navbar current="/contact-us" />
      <LiveChatLoaderProvider providerKey="fzxz67paxw42" provider="drift">
        <Drift />
      </LiveChatLoaderProvider>
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
