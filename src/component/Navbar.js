import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import "./Navbar.css";
import { FaFacebook, FaInstagram, FaLine } from "react-icons/fa";
import logo from "../img/small.png";
import { Outlet, Link } from "react-router-dom";

const item = [
  { name: "Home", href: "/", status: "current" },
  { name: "Our Course", href: "/", status: "normal" },
  { name: "Our Teams", href: "/", status: "normal", modal: "team" },
  { name: "About us", href: "/", status: "normal" },
  { name: "Blog & News", href: "/", status: "normal" },
  { name: "Student Tools", href: "/student-tools", status: "normal" },
  { name: "Our Success", href: "/", status: "normal" },
  { name: "Contact us", href: "/contact-us", status: "normal" },
];

export default function Navbar() {
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
                <a className={item.status} id="blur" href="#">
                  <span>{item.name}</span>
                </a>
                </Link>
                
              )}
            </>
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
      <Transition appear show={isOpenTeam} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-screen-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <a
                    className="float-right text-2xl cursor-pointer"
                    onClick={closeModal}
                  >
                    &times;
                  </a>
                  <h1 className="text-2xl font-bold my-2">ผู้บริหาร</h1>
                  <h3>- ดร. วรเดช พูนคำ (ครูเติม)</h3>
                  <h3>- ศรัญญา มงคลสิทธิ์ (เก๋)</h3>
                  <h1 className="text-2xl font-bold my-2">ครูผู้สอน</h1>
                  <h3>- ดร. วรเดช พูนคำ (ครูเติม)</h3>
                  <h3>- ดร. สาริทธิ์ จารุชัยบวร (ครูมีน)</h3>
                  <h3>- ดร. กิตต์ ปัญญารัตน์ (ครูกิตต์)</h3>
                  <h3>- ดร. วีระวัฒน์ คลอวุฒิมันตร์ (ครูวี)</h3>
                  <h3>- ครู ศรัณย์ อินทะผิว (ครูพี)</h3>
                  <h3>- ครู วิธิวัสส์ ปราณสิริจิรภาส (ครูบิ๊ก)</h3>
                  <h1 className="text-2xl font-bold my-2">ฝ่ายงาน IT</h1>
                  <h3>- นาย รัชชานนท์ มุขแก้ว </h3>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>



    </div>
  );
}
