import { Fragment, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Dialog, Transition, Tab, Disclosure } from "@headlessui/react";
import { AiFillBank, AiFillTags } from "react-icons/ai";
import {
  BsBank2,
  BsBookmarkDashFill,
  BsDownload,
  BsFillCalendarEventFill,
  BsFillGridFill,
  BsTagsFill,
} from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";
import { LiveChatLoaderProvider, Drift } from "react-live-chat-loader";


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
    IGCSE: [
      {
        Chemistry: [
          {
            CIE: [
              {
                1: [
                  {
                    2022: [
                      {
                        name: "IGCSE_CHEM_CIE_1_2022"
                      },
                      {
                        name: "IGCSE_CHEM_CIE_1_2022(1)"
                      },
                    ],
                  },
                  {
                    2021: [
                      {
                        name: "IGCSE_CHEM_CIE_1_2021"
                      },
                    ],
                  },
                ],
              },
              {
                2: [
                  {
                    2022: [
                      {
                        name: "IGCSE_CHEM_CIE_2_2022"
                      },
                    ],
                  },
                ],
              },
              {
                3: [
                  {
                    2022: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        Math: [
          {
            CIE: [
              {
                1: [
                  {
                    2022: [],
                  },
                ],
              },
              {
                2: [
                  {
                    2022: [],
                  },
                ],
              },
              {
                3: [
                  {
                    2022: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        "Fur Math": [
          {
            CIE: [
              {
                1: [
                  {
                    2022: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        Economic: [
          {
            CIE: [
              {
                1: [
                  {
                    2022: [],
                  },
                ],
              },
              {
                2: [
                  {
                    2022: [],
                  },
                ],
              },
              {
                3: [
                  {
                    2022: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        Biology: [
          {
            CIE: [
              {
                1: [
                  {
                    2022: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        Physics: [
          {
            CIE: [
              {
                1: [
                  {
                    2022: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        "ENG-SL": [
          {
            CIE: [
              {
                1: [
                  {
                    2022: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    "A-LEVEL": [
      {
        Biology: [
          {
            CIE: [
              {
                1: [
                  {
                    2022: [],
                  },
                ],
              },
            ],
          },
          {
            Edexcel: [
              {
                "U.1": [
                  {
                    2022: [],
                  },
                ],
              },
              {
                "U.2": [
                  {
                    2022: [],
                  },
                ],
              },
              {
                "U.3": [
                  {
                    2022: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        Chemistry: [
          {
            CIE: [
              {
                1: [
                  {
                    2022: [],
                  },
                ],
              },
              {
                2: [
                  {
                    2022: [],
                  },
                ],
              },
              {
                3: [
                  {
                    2022: [],
                  },
                ],
              },
            ],
          },
          {
            Edexcel: [
              {
                "U.1": [
                  {
                    2022: [],
                  },
                  {
                    "U.2": [
                      {
                        name: "1",
                        link: "",
                      },
                    ],
                  },
                  {
                    "U.3": [
                      {
                        name: "1",
                        link: "",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        Physics: [
          {
            CIE: [
              {
                1: [
                  {
                    2022: [],
                  },
                ],
              },
            ],
          },
          {
            Edexcel: [
              {
                "U.1": [
                  {
                    2022: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        Math: [
          {
            CIE: [
              {
                1: [
                  {
                    2022: [],
                  },
                ],
              },
            ],
          },
          {
            Edexcel: [
              {
                "U.1": [
                  {
                    2022: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        Economic: [
          {
            CIE: [
              {
                1: [
                  {
                    2022: [],
                  },
                ],
              },
            ],
          },
          {
            Edexcel: [
              {
                "U.1": [
                  {
                    2022: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    IAL: [
      {
        Biology: [
          {
            Edexcel: [
              {
                "U.1": [
                  {
                    2022: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        Chemistry: [
          {
            Edexcel: [
              {
                "U.1": [
                  {
                    2022: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        Physics: [
          {
            Edexcel: [
              {
                "U.1": [
                  {
                    2022: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        Math: [
          {
            Edexcel: [
              {
                "U.1": [
                  {
                    2022: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        Economic: [
          {
            Edexcel: [
              {
                "U.1": [
                  {
                    2022: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });

  return (
    <div>
      <Navbar current="/contact-us" />
      <LiveChatLoaderProvider providerKey="fzxz67paxw42" provider="drift">
        <Drift />
      </LiveChatLoaderProvider>
      <div className="text-center mt-32 ">
        <p className=" py-2 px-3 border border-black rounded-full inline">
          เครื่องมือช่วยเรียน สำหรับน้องๆ
        </p>
        <h1 className="black text-9xl   ">Student Tools</h1>
      </div>
      <div
        className="container mx-auto bg-white my-10 py-20 drop-shadow-md "
        style={{ borderRadius: "20px" }}
      >
        <div className="px-40 grid grid-cols-3 gap-12">
          <div
            className="p-14 bg-slate-100 rounded text-center ease-in duration-200 cursor-pointer hover:scale-110 hover:bg-purple-500 hover:text-white "
            onClick={openModalPastPaper}
          >
            <img src="./img/exam.png" className="mb-8" alt="" />
            <p className=" px-3 border  rounded-full inline">ข้อสอบเก่า</p>
            <h3 className="mt-2 text-2xl font-bold">Past Paper</h3>
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
                    <div className="grid grid-cols-6">
                      <div className="">
                        <h1 className="text-xl py-3 mb-1 ">
                          <BsBank2 className="inline text-2xl" />
                          &nbsp; Exam
                        </h1>
                        <h1 className="text-xl py-3 mb-1 ">
                          <BsBookmarkDashFill className="inline text-2xl" />
                          &nbsp; Subject
                        </h1>
                        <h1 className="text-xl py-3 mb-1 ">
                          <BsTagsFill className="inline text-2xl" />
                          &nbsp; Board
                        </h1>
                        <h1 className="text-xl py-3 mb-1 ">
                          <BsFillGridFill className="inline text-2xl" />
                          &nbsp; Paper / Unit
                        </h1>
                        <h1 className="text-xl py-3 mb-1 ">
                          <BsFillCalendarEventFill className="inline text-2xl" />
                          &nbsp; Year
                        </h1>
                      </div>
                      <div className="col-span-5">
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
                            {/* Subjects */}
                            {Object.values(categories).map((subjects, idx) => (
                              <Tab.Panel key={idx}>
                                <Tab.Group>
                                  <Tab.List className="flex space-x-1  rounded-xl bg-blue-900/20 p-1">
                                    {subjects.map((subject) => (
                                      <>
                                        {Object.keys(subject).map((subject) => (
                                          <Tab
                                            key={subject}
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
                                            {subject}
                                          </Tab>
                                        ))}
                                      </>
                                    ))}
                                  </Tab.List>
                                  <Tab.Panels className="mt-2">
                                    {/* Board */}

                                    {subjects.map((subject) => (
                                      <>
                                        {Object.values(subject).map(
                                          (boards, idx) => (
                                            <Tab.Panel key={idx}>
                                              <Tab.Group>
                                                <Tab.List className="flex space-x-1  rounded-xl bg-blue-900/20 p-1">
                                                  {boards.map((board) => (
                                                    <>
                                                      {Object.keys(board).map(
                                                        (board) => (
                                                          <Tab
                                                            key={board}
                                                            className={({
                                                              selected,
                                                            }) =>
                                                              classNames(
                                                                "w-full rounded-lg py-2.5 text-sm font-bold leading-5 text-blue-700",
                                                                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                                                                selected
                                                                  ? "bg-white shadow"
                                                                  : "text-slate-400 hover:bg-white/[0.12] hover:text-white"
                                                              )
                                                            }
                                                          >
                                                            {board}
                                                          </Tab>
                                                        )
                                                      )}
                                                    </>
                                                  ))}
                                                </Tab.List>
                                                <Tab.Panels className="mt-2">
                                                  {/* Paper / Unit */}

                                                  {boards.map((board) => (
                                                    <>
                                                      {Object.values(board).map(
                                                        (board, idx) => (
                                                          <Tab.Panel key={idx}>
                                                            <Tab.Group>
                                                              <Tab.List className="flex space-x-1  rounded-xl bg-blue-900/20 p-1">
                                                                {board.map(
                                                                  (board) => (
                                                                    <>
                                                                      {Object.keys(
                                                                        board
                                                                      ).map(
                                                                        (
                                                                          papers
                                                                        ) => (
                                                                          <Tab
                                                                            key={
                                                                              papers
                                                                            }
                                                                            className={({
                                                                              selected,
                                                                            }) =>
                                                                              classNames(
                                                                                "w-full rounded-lg py-2.5 text-sm font-bold leading-5 text-blue-700",
                                                                                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                                                                                selected
                                                                                  ? "bg-white shadow"
                                                                                  : "text-slate-400 hover:bg-white/[0.12] hover:text-white"
                                                                              )
                                                                            }
                                                                          >
                                                                            {
                                                                              papers
                                                                            }
                                                                          </Tab>
                                                                        )
                                                                      )}
                                                                    </>
                                                                  )
                                                                )}
                                                              </Tab.List>
                                                              <Tab.Panels className="mt-2">
                                                                {/* Year */}

                                                                {board.map(
                                                                  (board) => (
                                                                    <>
                                                                      {Object.values(
                                                                        board
                                                                      ).map(
                                                                        (
                                                                          years,
                                                                          idx
                                                                        ) => (
                                                                          <Tab.Panel
                                                                            key={
                                                                              idx
                                                                            }
                                                                          >
                                                                            <Tab.Group>
                                                                              <Tab.List className="flex space-x-1  rounded-xl bg-blue-900/20 p-1">
                                                                                {years.map(
                                                                                  (
                                                                                    year
                                                                                  ) => (
                                                                                    <>
                                                                                      {Object.keys(
                                                                                        year
                                                                                      ).map(
                                                                                        (
                                                                                          year
                                                                                        ) => (
                                                                                          <Tab
                                                                                            key={
                                                                                              year
                                                                                            }
                                                                                            className={({
                                                                                              selected,
                                                                                            }) =>
                                                                                              classNames(
                                                                                                "w-full rounded-lg py-2.5 text-sm font-bold leading-5 text-blue-700",
                                                                                                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                                                                                                selected
                                                                                                  ? "bg-white shadow"
                                                                                                  : "text-slate-400 hover:bg-white/[0.12] hover:text-white"
                                                                                              )
                                                                                            }
                                                                                          >
                                                                                            {
                                                                                              year
                                                                                            }
                                                                                          </Tab>
                                                                                        )
                                                                                      )}
                                                                                    </>
                                                                                  )
                                                                                )}
                                                                              </Tab.List>
                                                                              <Tab.Panels className="mt-2">
                                                                                {/* Result */}

                                                                                {years.map(
                                                                                  (
                                                                                    year
                                                                                  ) => (
                                                                                    <>
                                                                                      {Object.values(
                                                                                        year
                                                                                      ).map(
                                                                                        (
                                                                                          items,
                                                                                          idx
                                                                                        ) => (
                                                                                          <Tab.Panel
                                                                                            key={
                                                                                              idx
                                                                                            }
                                                                                          >
                                                                                        
                                                                                                {items.map(
                                                                                                  (
                                                                                                    item
                                                                                                  ) => (
                                                                                                    <>
                                                                                                     
                                                                                                          <div className="p-4 m-2 border border-slate-300 inline-block">
                                                                                                          {
                                                                                                            item.name
                                                                                                          }
                                                                                                          <a
                                                                                                            className="ml-4"
                                                                                                            href={`./paper/${item.name}.pdf`}
                                                                                                            target="_blank"
                                                                                                          >
                                                                                                            <FaFileDownload className="inline text-purple-500 font-bold text-2xl" />
                                                                                                          </a>
                                                                                                        </div>
                                                                                                       
                                                                                                    </>
                                                                                                  )
                                                                                                )}
                                                                                          
                                                                                          </Tab.Panel>
                                                                                        )
                                                                                      )}
                                                                                    </>
                                                                                  )
                                                                                )}
                                                                              </Tab.Panels>
                                                                            </Tab.Group>
                                                                          </Tab.Panel>
                                                                        )
                                                                      )}
                                                                    </>
                                                                  )
                                                                )}
                                                              </Tab.Panels>
                                                            </Tab.Group>
                                                          </Tab.Panel>
                                                        )
                                                      )}
                                                    </>
                                                  ))}
                                                </Tab.Panels>
                                              </Tab.Group>
                                            </Tab.Panel>
                                          )
                                        )}
                                      </>
                                    ))}
                                  </Tab.Panels>
                                </Tab.Group>
                              </Tab.Panel>
                            ))}
                          </Tab.Panels>
                        </Tab.Group>
                      </div>
                    </div>
                    {/* Categories */}
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
