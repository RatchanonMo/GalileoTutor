import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import {
  UserIcon,
  ServerIcon,
  ClockIcon,
  UsersIcon,
  WindowIcon,
} from "@heroicons/react/20/solid";
import { BsDot } from "react-icons/bs";

import { LiveChatLoaderProvider, Drift } from "react-live-chat-loader";
import { FaLine } from "react-icons/fa";

export default function Courses() {
  const features = [
    {
      name: "สอนโดยทีมอาจารย์ผู้เชี่ยวชาญ",
      description:
        "เรียนตัวต่อตัวกับอาจารย์ผู้สอน ปรับแต่งกำหนดบทเรียนที่เหมาะสม เลือกเวลาเรียนเอง",
      icon: UserIcon,
    },
    {
      name: "จัดเวลาเรียนเองได้",
      description:
        "สามารถเรียนเวลาไหนก็ได้ น้องๆสามารถเลือกเวลาเรียนเองได้ ตามความเหมาะสมกับไลพ์สไตล์ตัวเอง",
      icon: ClockIcon,
    },
    {
      name: "เรียน Private 1 on 1",
      description:
        "เรียนตัวต่อตัวกับอาจารย์ผู้สอน ปรับแต่งกำหนดบทเรียนที่เหมาะสม เลือกเวลาเรียนเอง",
      icon: UsersIcon,
    },
    {
      name: "เรียน Online Anywhere",
      description:
        "เรียนที่ไหนก็ได้ผ่าน application สะดวกสบาย ยืดหยุ่นเวลาได้มากขึ้น",
      icon: WindowIcon,
    },
  ];
  const courses = [
    {
      id: 1,
      name: "IGCSE",
      subject: "Chemistry, Math, Fur Math, Economic, Biology, Physics, Eng-SL",
    },
    {
      id: 2,
      name: "A-LEVEL",
      subject: "Biology, Chemistry, Physics, Math, Economic",
    },
    {
      id: 3,
      name: "IAL",
      subject: "Biology, Chemistry, Physics, Math, Economic",
    },
  ];
  return (
    <div>
      <Navbar current="/contact-us" />
      <LiveChatLoaderProvider providerKey="fzxz67paxw42" provider="drift">
        <Drift />
      </LiveChatLoaderProvider>
      <div className="text-center mt-32 ">
        <p className=" py-2 px-3 border border-black rounded-full inline">
          คอร์สเรียนของพวกเรา
        </p>
        <h1 className="black header mt-2 ">Our Course</h1>
        <p className="text-xl"></p>
      </div>
      <div
        className="container mx-auto bg-white my-10 py-20 drop-shadow-md "
        style={{ borderRadius: "20px" }}
      >
        <div className="">
          {/* Code goes here */}
          <div className="overflow-hidden bg-white py-24 sm:py-14">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-8 lg:pt-4">
                  <div className="lg:max-w-lg">
                    <h2 className="text-base font-semibold leading-7 text-purple-600">
                      สไตล์การเรียน
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      เรียนกับ Galileo Tutor ดีอย่างไร
                    </p>
                    {/* <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p> */}
                    <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                      {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                          <dt className="inline font-semibold text-gray-900">
                            <feature.icon
                              className="absolute top-1 left-1 h-5 w-5 text-purple-600"
                              aria-hidden="true"
                            />
                            {feature.name}
                          </dt>{" "}
                          <dd className="inline">{feature.description}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
                <img
                  src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                  alt="Product screenshot"
                  className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                  width={2432}
                  height={1442}
                />
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-center mt-14 mb-10">
              รายวิชาที่เปิดสอน
            </h1>
            <dl className="bg-slate-100 grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3 rounded-3xl">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="mx-auto flex max-w-xs flex-col gap-y-4 py-24 sm:py-20"
                >
                  <dt className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    {course.name}
                  </dt>
                  <dd className="text-base leading-7 text-gray-600">
                    {course.subject}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-center mt-24 mb-10">
              รูปแบบการเรียนการสอน
            </h1>
            <dl className="grid grid-cols-3 gap-y-16 gap-x-8 lg:grid-cols-3 ">
              <div className="mx-auto flex  flex-col  border border-purple-500 rounded-3xl">
                <dt className="bg-purple-500 order-first text-center text-3xl font-semibold tracking-tight text-purple-50 sm:text-5xl py-24 sm:px-10 sm:py-10 rounded-t-3xl ">
                  เรียนตัวต่อตัว
                </dt>
                <dd className="text-xl leading-7 text-gray-900 ">
                  <ul className="px-10 py-5">
                    <li className="py-2">
                      <BsDot className="inline text-2xl" />{" "}
                      เลือกบทเรียนตามต้องการ
                    </li>
                    <li className="py-2">
                      <BsDot className="inline text-2xl" /> เลือกครูสไตล์ที่ชอบ
                    </li>
                    <li className="py-2">
                      <BsDot className="inline text-2xl" /> จัดตารางเรียนได้เอง
                    </li>
                  </ul>
                </dd>
              </div>
              <div className="mx-auto flex  flex-col  border border-purple-500 rounded-3xl">
                <dt className="bg-purple-500 order-first text-center text-3xl font-semibold tracking-tight text-purple-50 sm:text-5xl py-24 sm:px-10 sm:py-10 rounded-t-3xl ">
                  เรียนเป็นคู่
                </dt>
                <dd className="text-xl leading-7 text-gray-900 ">
                  <ul className="px-10 py-5">
                    <li className="py-2">
                      <BsDot className="inline text-2xl" />{" "}
                      จับคู่เรียนกับเพื่อนในราคาพิเศษ
                    </li>
                    <li className="py-2">
                      <BsDot className="inline text-2xl" />{" "}
                      เลือกบทเรียนตามต้องการ
                    </li>
                    <li className="py-2">
                      <BsDot className="inline text-2xl" /> เลือกครูสไตล์ที่ชอบ
                    </li>
                  </ul>
                </dd>
              </div>
              <div className="mx-auto flex  flex-col  border border-purple-500 rounded-3xl">
                <dt className="bg-purple-500 order-first text-center text-3xl font-semibold tracking-tight text-purple-50 sm:text-5xl py-24 sm:px-10 sm:py-10 rounded-t-3xl ">
                  เรียนเป็นกลุ่ม
                </dt>
                <dd className="text-xl leading-7 text-gray-900 ">
                  <ul className="px-10 py-5">
                    <li className="py-2">
                      <BsDot className="inline text-2xl" />{" "}
                      จับกลุ่มเรียนยกแก๊งในราคาพิเศษ
                    </li>
                    <li className="py-2">
                      <BsDot className="inline text-2xl" /> เลือกครูสไตล์ที่ชอบ
                    </li>
                    <li className="py-2">
                      <BsDot className="inline text-2xl" /> จัดตารางเรียนได้เอง
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>

            <a
              href="https://liff.line.me/1645278921-kWRPP32q/?accountId=galileo_tutor"
              target="_blank"
              rel="noreferrer"
            >
              <div className="bg-green-500 p-5 my-10 rounded-3xl ease-in duration-100 hover:bg-green-700">
                <h1 className="text-center text-2xl text-white">
                  <FaLine className="inline text-4xl" />
                  &nbsp; สมัครเรียนหรือสอบถามรายละเอียดเพิ่มเติม
                </h1>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
