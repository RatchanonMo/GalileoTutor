import React from "react";
import "./Navbar.css";
import {  FaFacebook, FaInstagram, FaLine } from "react-icons/fa";
import logo from '../img/small.png';

const item = [
  { name: "Home", href: "/", status: "current" },
  { name: "Our course", href: "/", status: "normal" },
  { name: "About us", href: "/", status: "normal" },
  { name: "Blog", href: "/", status: "dis" },
  { name: "Student Tool", href: "/", status: "dis" },
  { name: "Contact us", href: "/", status: "dis" },
];


export default function Navbar() {
  return (
    <div>
      <nav id="bg">
        <div >
          <img src={logo}  />
          {/* <h1 className="logo">กาลิเลโอ<br/>ติวเตอร์.</h1> */}
        </div>
        <div>
          {item.map((item) => (
            <a className={item.status} id="blur" href={item.href}>
              <span >{item.name}</span>
            </a>
          ))}
        </div>
        <div>
          <a href="/" target="_blank">
            <FaFacebook />
          </a>
          <a href="/" target="_blank">
            <FaInstagram />
          </a>
          <a href="/" target="_blank">
            <FaLine />
          </a>
        </div>
      </nav>
    </div>
  );
}
