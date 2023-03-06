import { Fragment, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Dialog, Transition, Tab, Disclosure } from "@headlessui/react";
import { FaChevronUp } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function StudentTools() {
  let [isOpenPastPaper, setIsOpenPastPaper] = useState(false);

  function closeModal() {
    setIsOpenPastPaper(false);
  }

  function openModalPastPaper() {
    setIsOpenPastPaper(true);
  }

  let [categories] = useState({
    CIE: [
      {
        id: 1,
        title: "ภาษาอังกฤษ (English)",
        date: "ปี 2023",
        type: "CIE",
      },
      {
        id: 2,
        title: "ฟิสิกส์ (Physics)",
        date: "ปี 2023",
        type: "CIE",
      },
      {
        id: 3,
        title: "เคมี (Chem)",
        date: "ปี 2023",
        type: "CIE",
      },
      {
        id: 4,
        title: "ชีวะ (Biology)",
        date: "ปี 2023",
        type: "CIE",
      },
      {
        id: 5,
        title: "คณิตศาสตร์ (Math)",
        date: "ปี 2023",
        type: "CIE",
      },
    ],
    Erexel: [
      {
        id: 1,
        title: "ภาษาอังกฤษ (English)",
        date: "ปี 2023",
      },
      {
        id: 2,
        title: "ฟิสิกส์ (Physics)",
        date: "ปี 2023",
      },
      {
        id: 3,
        title: "เคมี (Chem)",
        date: "ปี 2023",
      },
      {
        id: 4,
        title: "ชีวะ (Biology)",
        date: "ปี 2023",
      },
      {
        id: 5,
        title: "คณิตศาสตร์ (Math)",
        date: "ปี 2023",
      },
    ],
  });

  return (
    <div>
      <Navbar current="/contact-us" />
      <div className="text-center mt-32 ">
        <h1 className="black text-9xl   ">Student Tools</h1>
        <p className="text-xl">เครื่องมือช่วยเรียน สำหรับน้องๆ </p>
      </div>
      <div
        className="container mx-auto bg-white my-10 py-20 drop-shadow-md "
        style={{ borderRadius: "20px" }}
      >
        <div className="px-40 grid grid-cols-3 gap-12">
          <div
            className="p-14 bg-slate-100 rounded text-center ease-in duration-200 cursor-pointer hover:scale-110 "
            onClick={openModalPastPaper}
          >
            <img src="./img/exam.png" className="mb-8" alt="" />
            <p className=" px-3 border border-black rounded-full inline">
              ข้อสอบเก่า
            </p>
            <h3 className="text-2xl font-bold">Past Paper</h3>
          </div>
        </div>
      </div>

      <Transition appear show={isOpenPastPaper} as={Fragment}>
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

          <div className="fixed inset-0 overflow-y-auto mt-20">
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
                <Dialog.Panel className="w-full max-w-screen-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <a
                    className="float-right text-2xl cursor-pointer"
                    onClick={closeModal}
                  >
                    &times;
                  </a>
                  <div className="px-10">
                    <Tab.Group>
                      <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                        {Object.keys(categories).map((category) => (
                          <Tab
                            key={category}
                            className={({ selected }) =>
                              classNames(
                                "w-full rounded-lg py-2.5 text-sm font-bold leading-5 text-blue-700",
                                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                                selected
                                  ? "bg-white shadow"
                                  : "text-slate-400 hover:bg-white/[0.12] hover:text-white"
                              )
                            }
                          >
                            {category}
                          </Tab>
                        ))}
                      </Tab.List>
                      <Tab.Panels className="mt-2">
                        {Object.values(categories).map((posts, idx) => (
                          <Tab.Panel
                            key={idx}
                            className={classNames(
                              "rounded-xl bg-white p-3",
                              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                            )}
                          >
                            <ul>
                              {posts.map((post) => (
                                <li
                                  key={post.id}
                                  className="relative rounded-md p-3 hover:bg-gray-100 flex"
                                >
                                  <span className="text-4xl font-medium leading-5">
                                    {post.type == "CIE" ? (
                                      <IoDocumentText className="inline fill-purple-400" />
                                    ) : (
                                      <IoDocumentText className="inline fill-green-400" />
                                    )}
                                  </span>
                                  <div className="flex-column ml-2">
                                    <h3 className="text-xl">{post.title}</h3>

                                    <ul className="mt-1  space-x-1 text-md font-normal leading-4 text-gray-500 ">
                                      <li> &middot; {post.date}</li>
                                    </ul>
                                  </div>

                                  <a
                                    href="https://papers.gceguide.com/A%20Levels/Biology%20(9700)/2022/9700_m22_er.pdf"
                                    target="_blank"
                                    className={classNames(
                                      "absolute inset-0 rounded-md",
                                      "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                                    )}
                                  />
                                </li>
                              ))}
                            </ul>
                          </Tab.Panel>
                        ))}
                      </Tab.Panels>
                    </Tab.Group>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Footer />
    </div>
  );
}
