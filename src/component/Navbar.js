import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import "./Navbar.css";
import { FaFacebook, FaInstagram, FaLine } from "react-icons/fa";
import logo from "../img/small.png";
import { Outlet, Link } from "react-router-dom";

const item = [
  { id: "0", name: "Home", href: "/", status: "current" },
  { id: "1", name: "Our Course", href: "/", status: "normal" },
  { id: "2", name: "Our Teams", href: "/our-team", status: "normal" },
  { id: "3", name: "About us", href: "/", status: "normal" },
  { id: "4", name: "Blog & News", href: "/", status: "normal" },
  { id: "5", name: "Student Tools", href: "/student-tools", status: "normal" },
  { id: "6", name: "Our Success", href: "/", status: "normal" },
  { id: "7", name: "Contact us", href: "/contact-us", status: "normal" },
];

export default function Navbar(props) {
  let [isOpenTeam, setIsOpenTeam] = useState(false);

  function closeModal() {
    setIsOpenTeam(false);
  }

  function openModalTeam() {
    setIsOpenTeam(true);
  }

  return (
    <div>
      <nav id="bg">
        <div>
          <img src={logo} />
          {/* <h1 className="logo">กาลิเลโอ<br/>ติวเตอร์.</h1> */}
        </div>
        <div>
          {item.map((item) => (
            <>
              {item.modal ? (
                <a
                  className={item.status}
                  id="blur"
                  href="#"
                  onClick={openModalTeam}
                >
                  <span>{item.name}</span>
                </a>
              ) : (
                <Link to={item.href}>
                  <a className={item.status} href="#">
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
