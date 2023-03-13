import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import "./Navbar.css";
import { FaFacebook, FaInstagram, FaLine } from "react-icons/fa";
import logo from "../img/small.png";
import { Outlet, Link } from "react-router-dom";

const item = [
  { name: "Home", href: "/", status: "current" },
  { name: "Our Course", href: "/course", status: "normal" },
  { name: "Teaching Example", href: "/teaching-example", status: "normal" },
  { name: "Our Teams", href: "/our-team", status: "normal" },
  { name: "About us", href: "/about-us", status: "normal" },
  { name: "Blog & News", href: "/blogs", status: "normal" },
  { name: "Student Tools", href: "/student-tools", status: "normal" },
  { name: "Our Success", href: "/success", status: "normal" },
  { name: "Contact us", href: "/contact-us", status: "normal" },
];

export default function Navbar(props) {


  return (
    <div>
      <nav id="bg">
        <div className="flex items-center">
          <img src={logo} />
          {/* <h1 className="logo">กาลิเลโอ<br/>ติวเตอร์.</h1> */}
        </div>
        <div>
          {item.map((item) => (
            <>
              {item.modal ? (
                <a
                  className={item.status}
                  id="item"
                  href="#"
                >
                  <span>{item.name}</span>
                </a>
              ) : (
                <Link to={item.href}>
                  <a className={item.status}  href="#">
                    <span>{item.name}</span>
                  </a>
                </Link>
              )}
            </>
          ))}
        </div>
        <div>
          <a
            href="https://www.facebook.com/GalileoTutor"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/galileo_tutor/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://liff.line.me/1645278921-kWRPP32q/?accountId=galileo_tutor"
            target="_blank"
            rel="noreferrer"
          >
            <FaLine />
          </a>
        </div>
      </nav>

      
    </div>
  );
}
