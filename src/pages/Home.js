import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import Try from "../component/Try";
import $ from "jquery";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../App.css";
import tutor1 from "../img/tutor1.png";
import tutor2 from "../img/tutor2.png";
import tutor3 from "../img/tutor3.png";
import MoreButton from "../component/MoreButton";
import f1 from "../img/f1.jpg";
import krukit from "../img/krukit.png";
import krukit_info from "../img/krukit_info.png";
import krumean from "../img/krumean.png";
import krumean_info from "../img/krumean_info.jpg";
import krubig from "../img/krubig.png";
import krubig_info from "../img/krubig_info.jpg";
import krupee from "../img/krupee.png";
import krupee_info from "../img/krupee_info.jpg";
import kruterm from "../img/kruterm.png";
import kruterm_info from "../img/kruterm_info.jpg";
import Footer from "../component/Footer";
import { GrLinkNext } from "react-icons/gr";

export default function App() {
  const student = [
    {
      name: "น้องกล้า",
      img: { tutor1 },
      college: "มหาวิทยาลัยแม่ฟ้าหลวง",
      quote:
        "มาร์ตสมิติเวชมอบตัวธรรมายูโร ริคเตอร์เอนทรานซ์ ยิมฟรุต ดีพาร์ทเมนท์แฮปปี้เพลซ ",
    },
    {
      name: "น้องนนท์",
      img: { tutor2 },
      college: "จุฬาลงกรณ์มหาวิทยาลัย",
      quote:
        "ซาฟารี ซาบะแคมป์ซิ่ง ลิมิตติวไฮบริดเมคอัพแบต วัคค์ฟลุทดีพาร์ทเมนต์ ",
    },
    {
      name: "น้องแป๊บ",
      img: { tutor3 },
      college: "มหาวิทยาลัยขอนแก่น",
      quote:
        "จัมโบ้เดชานุภาพอาร์ติสต์เยนชาร์จ เวสต์ว่ะ แตงกวาเฟรชชี่ศึกษาศาสตร์คอนโทรลมายาคติ",
    },
    {
      name: "น้องนนนี่",
      img: { tutor1 },
      college: "จุฬาลงกรณ์มหาวิทยาลัย",
      quote: "แล็บสแตนเลสเบลอติว ซานตาคลอสแฟรีรุสโซ ",
    },
    {
      name: "น้องโอ๊ค",
      img: { tutor2 },
      college: "พระจอมเกล้าธนบุรี",
      quote: "รากหญ้าคอนเซ็ปต์นายแบบ ช็อปเปอร์ เซฟตี้พุทธภูมิแคมป์",
    },
  ];

  // Dirty Code. Pls Come Back Later.
  let [isOpenKit, setIsOpenKit] = useState(false);
  let [isOpenMean, setIsOpenMean] = useState(false);
  let [isOpenBig, setIsOpenBig] = useState(false);
  let [isOpenPee, setIsOpenPee] = useState(false);
  let [isOpenTerm, setIsOpenTerm] = useState(false);

  function closeModal() {
    setIsOpenKit(false);
    setIsOpenMean(false);
    setIsOpenBig(false);
    setIsOpenPee(false);
    setIsOpenTerm(false);
  }

  function openModalKit() {
    setIsOpenKit(true);
  }

  function openModalMean() {
    setIsOpenMean(true);
  }
  function openModalBig() {
    setIsOpenBig(true);
  }

  function openModalPee() {
    setIsOpenPee(true);
  }
  function openModalTerm() {
    setIsOpenTerm(true);
  }

  return (
    <div>
      <Navbar />
      <Try />
      <div id="home" className="my-20">
        <div>
          <div>
            <OwlCarousel
              className="container overflow-hidden mx-auto owl-theme"
              margin={80}
              items={1}
              stagePadding={70}
              autoplay
            >
              <div>
                <img src={f1} className="" style={{ borderRadius: "20px" }} />
              </div>
              <div>
                <img src={f1} className="" style={{ borderRadius: "20px" }} />
              </div>
            </OwlCarousel>
          </div>

          {/* <img src={title} style={{width:'50%'}} alt="" /> */}
          {/* <div >
              <h1 className="black header ">
                กาลิเลโอ
                <br />
                ติวเตอร์.
              </h1>
              <p>
                เราเชื่อมั่นว่าการเรียนส่วนตัวจะทำให้ครูถ่ายทอดความรู้ที่มีประสิทธิภาพให้กับนักเรียนได้มากที่สุด
              </p>
            </div> */}
        </div>
      </div>
      {/* <div id="section2">
          <div></div>
        </div> */}

      {/* Introduce */}
      <main className="overflow-hidden " id="section3">
        <div className="grid grid-cols-2 max-w-screen-lg m-auto py-20 ">
          <div>
            <p className="py-2 px-3 border border-black rounded-full inline">
              กาลิเลโอติวเตอร์คืออะไร
            </p>
            <h1 className="text-9xl black my-4">WHAT ARE WE ?</h1>
          </div>
          <div>
            <p className="text-lg mb-5">
              กาลิเลโอติวเตอร์เป็นสถาบันสอนพิเศษที่เน้นการสอนส่วนตัวโดยเปิดมาตั้งแต่
              มิถุนายน พ.ศ. 2555 ที่ศูนย์ U-Center ใต้หอพักจุฬาลงกรณ์มหาวิทยาลัย
              ปัจจุบัน office ของทางสถาบันอยู่ที่ สุขสวัสดิ์ 39
              โดยหลักการของทางทีมงานกาลิเลโอติวเตอร์เราเชื่อมั่นว่าการเรียนส่วนตัวจะทำให้ครูถ่ายทอดความรู้ที่มีประสิทธิภาพให้กับนักเรียนได้มากที่สุดและสามารถทำให้นักเรียนโฟกัสในสิ่งต้องเรียนได้มากที่สุด
            </p>
            <p className="text-lg">
              ปัจจุบันทางสถาบันได้เปิดสอนแบบ online เต็มรูปแบบในวิชา คณิตศาสตร์
              เคมี ฟิสิกส์ ชีววิทยา และ ภาษาอังกฤษ โดยเน้นในหลักสูตร
              <b>International : IGCSE GCSE A-LEVEL IB AP SAT </b>
              เป็นหลัก
              โดยครูที่จะทำการสอนที่สถาบันจะต้องมีประสบการณ์ในการสอนในวิชานั้น ๆ
              หรือจบการศึกษาขั้นต่ำในระดับปริญญาโท
              และครูทุกคนยังจำเป็นต้องสอบผ่านข้อสอบของทางสถาบันเพื่อให้ครูสามารถสอนได้ตรงตาม
              Course Syllabus และ mark screen
              นอกจากนี้ทางทีมงานกาลิเลโอติวเตอร์เชื่อว่าครูที่สอนน้อง ๆ
              จะสามารถใช้ความรู้ความสามารถในสาขาที่เรียนมาเพื่อใช้แนะแนวสาขาวิชาให้กับน้อง
              ๆ เพื่อให้น้อง ๆ ชื่นชอบวิชานั้น ๆ ได้มากขึ้นอีกด้วย
            </p>
            <MoreButton text="อ่านต่อ" link="#" />
          </div>
        </div>

        {/* Course */}

        <div className="max-w-7xl m-auto py-20" id="course">
          <p className="py-2 px-3 border border-black rounded-full inline">
            คอร์สเรียนทั้งหมด
          </p>
          <h1 className="text-9xl black my-4">OUR COURSES</h1>

          <OwlCarousel
            margin={10}
            nav
            dots={false}
            navText={[
              "",
              '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#fff" stroke-width="2" d="M2,12 L22,12 M13,3 L22,12 L13,21"></path></svg>',
            ]}
            className="course"
          >
            <div class="subject p-20">
              <div>
                <h1 className="font-bold text-4xl ">MATH</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <div class="subject">
              <h4>2</h4>
            </div>
            <div class="subject">
              <h4>3</h4>
            </div>
            <div class="subject">
              <h4>4</h4>
            </div>
            <div class="subject">
              <h4>5</h4>
            </div>
          </OwlCarousel>
        </div>
      </main>

      {/* All Tutors */}

      <main className="max-w-7xl m-auto py-20 section" id="tutors">
        <div className="grid grid-cols-2">
          <div className="flex items-end">
            <div>
              <p className="py-2 px-3 border border-black rounded-full inline">
                ติวเตอร์ของเรา
              </p>
              <h1 className="text-9xl black my-4 ">
                ALL <br />
                TUTORS
              </h1>
            </div>
          </div>
          <div>
            <OwlCarousel
              className="overflow-hidden alltutor"
              margin={10}
              items={1}

              autoplay
            >
              <div className="relative">
                <img src={kruterm} alt="" />
                <div className="tutorText  max-w-xs">
                  <p className="tutorSubject text-sm my-1">ฟิสิกส์และเคมี</p>

                  <h1 className="text-2xl font-bold">ครูเติม</h1>
                  <p>
                    ฟาสต์ฟู้ดโปรเจกต์ป๊อปมุมมอง ฟอยล์อินเตอร์ผลักดัน ซีรีส์
                    เอเซียสะบึมส์อพาร์ทเมนต์พ่อค้าพาสตา
                  </p>
                  <div className="moreButton">
                    <button
                      className="border border-black px-4 text-black rounded-full mt-2 hover:bg-black hover:text-white"
                      onClick={openModalTerm}
                    >
                      รู้จักกับคุณครู
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src={krupee} alt="" />
                <div className="tutorText  max-w-xs">
                  <p className="tutorSubject text-sm my-1">คณิตศาสตร์</p>

                  <h1 className="text-2xl font-bold">ครูพี</h1>
                  <p>
                    ฟาสต์ฟู้ดโปรเจกต์ป๊อปมุมมอง ฟอยล์อินเตอร์ผลักดัน ซีรีส์
                    เอเซียสะบึมส์อพาร์ทเมนต์พ่อค้าพาสตา
                  </p>
                  <div className="moreButton">
                    <button
                      className="border border-black px-4 text-black rounded-full mt-2 hover:bg-black hover:text-white ease-in duration-100"
                      onClick={openModalPee}
                    >
                      รู้จักกับคุณครู
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src={krubig} alt="" />
                <div className="tutorText  max-w-xs">
                  <p className="tutorSubject text-sm my-1">ภาษาอังกฤษ</p>

                  <h1 className="text-2xl font-bold">ครูบิ๊ก</h1>
                  <p>
                    ฟาสต์ฟู้ดโปรเจกต์ป๊อปมุมมอง ฟอยล์อินเตอร์ผลักดัน ซีรีส์
                    เอเซียสะบึมส์อพาร์ทเมนต์พ่อค้าพาสตา
                  </p>
                  <div className="moreButton">
                    <button
                      className="border border-black px-4 text-black rounded-full mt-2 hover:bg-black hover:text-white ease-in duration-100"
                      onClick={openModalBig}
                    >
                      รู้จักกับคุณครู
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src={krumean} alt="" />
                <div className="tutorText  max-w-xs">
                  <p className="tutorSubject text-sm my-1">ชีววิทยา</p>
                  <h1 className="text-2xl font-bold">ครูมีน</h1>
                  <p>
                    ฟาสต์ฟู้ดโปรเจกต์ป๊อปมุมมอง ฟอยล์อินเตอร์ผลักดัน ซีรีส์
                    เอเซียสะบึมส์อพาร์ทเมนต์พ่อค้าพาสตา
                  </p>
                  <div className="moreButton">
                    <button
                      className="border border-black px-4 text-black rounded-full mt-2 hover:bg-black hover:text-white ease-in duration-100"
                      onClick={openModalMean}
                    >
                      รู้จักกับคุณครู
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src={krukit} alt="" />
                <div className="tutorText  max-w-xs">
                  <p className="tutorSubject text-sm my-1">เคมี</p>
                  <h1 className="text-2xl font-bold">ครูกิตต์</h1>
                  <p>
                    ฟาสต์ฟู้ดโปรเจกต์ป๊อปมุมมอง ฟอยล์อินเตอร์ผลักดัน ซีรีส์
                    เอเซียสะบึมส์อพาร์ทเมนต์พ่อค้าพาสตา
                  </p>
                  <div className="moreButton">
                    <button
                      className="border border-black px-4 text-black rounded-full mt-2 hover:bg-black hover:text-white ease-in duration-100"
                      onClick={openModalKit}
                    >
                      รู้จักกับคุณครู
                    </button>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </main>

      {/* Dirty Code. Pls Come Back Later. */}
      <Transition appear show={isOpenTerm} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closeModal}>
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
                <Dialog.Panel className="w-full max-w-screen-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <a
                    className="float-right text-2xl cursor-pointer"
                    onClick={closeModal}
                  >
                    &times;
                  </a>
                  <img src={kruterm_info} alt="" />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={isOpenPee} as={Fragment}>
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
                <Dialog.Panel className="w-full max-w-screen-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <a
                    className="float-right text-2xl cursor-pointer"
                    onClick={closeModal}
                  >
                    &times;
                  </a>
                  <img src={krupee_info} alt="" />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={isOpenBig} as={Fragment}>
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
                <Dialog.Panel className="w-full max-w-screen-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <a
                    className="float-right text-2xl cursor-pointer"
                    onClick={closeModal}
                  >
                    &times;
                  </a>
                  <img src={krubig_info} alt="" />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={isOpenMean} as={Fragment}>
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
                <Dialog.Panel className="w-full max-w-screen-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <a
                    className="float-right text-2xl cursor-pointer"
                    onClick={closeModal}
                  >
                    &times;
                  </a>
                  <img src={krumean_info} alt="" />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={isOpenKit} as={Fragment}>
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
                <Dialog.Panel className="w-full max-w-screen-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <a
                    className="float-right text-2xl cursor-pointer"
                    onClick={closeModal}
                  >
                    &times;
                  </a>
                  <img src={krukit_info} alt="" />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Our Success */}

      <main
        className="my-20 successor py-20 bg-white m-auto rounded-xl text-center overflow-hidden"
        id="success"
      >
        <p className="py-2 px-3 border border-black rounded-full inline">
          ความสำเร็จของนักเรียนที่จบการศึกษา
        </p>
        <h1 className="text-9xl black my-4">OUR SUCCESS</h1>
        <div className="grid grid-cols-5  m-auto">
          {student.map((student) => (
            <div className="border border-black-700 p-5">
              <img src={tutor1} className="mb-8" alt="" />
              <h3 className="font-bold text-xl">{student.name}</h3>
              <p className="college">{student.college}</p>
              <p className="text-gray-600 bg-slate-100 rounded-xl p-4 mt-2">
                {student.quote}
              </p>
            </div>
          ))}
        </div>
        <MoreButton text="อ่านทั้งหมด" link="#" end />
      </main>

      {/* Blog & News */}

      <main className="bg-white" id="blog">
        <div className=" max-w-screen-lg m-auto py-20  text-center">
          <p className="py-2 px-3 border border-black rounded-full inline">
            บทความและข่าวสาร
          </p>
          <h1 className="text-9xl black my-4 text-center">Blog & News</h1>
          <div className="grid grid-cols-2 gap-4 my-12 text-left">
            <div className="border border-black">
              <div className="topNewsMockup m-auto mt-3"></div>
              <div className="p-10 ">
                <p className="tutorSubject text-sm my-1">ข่าวสาร</p>
                <h1 className="text-2xl font-bold">
                  ประกาศเพิ่มเติมคอร์สในรายวิชาเคมี
                </h1>
                <p>
                  ฟาสต์ฟู้ดโปรเจกต์ป๊อปมุมมอง ฟอยล์อินเตอร์ผลักดัน ซีรีส์
                  เอเซียสะบึมส์อพาร์ทเมนต์พ่อค้าพาสตา
                </p>
                <p className="text-gray-600 mt-4">
                  อัปเดตเมื่อวันที่ 9/2/2023 เวลา 14.09 น.
                </p>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 p-3">
                <div>
                  <div className="newsMockup "></div>
                </div>
                <div className="p-5">
                  <p className="tutorSubject text-sm my-1">ข่าวสาร</p>
                  <h1 className="text-xl font-bold">
                    ประกาศเพิ่มเติมคอร์สในรายวิชาเคมี
                  </h1>

                  <p className="text-gray-600 mt-4">9/2/2023</p>
                </div>
              </div>
              <div className="grid grid-cols-2 p-3">
                <div>
                  <div className="newsMockup "></div>
                </div>
                <div className="p-5">
                  <p className="tutorSubject text-sm my-1">ข่าวสาร</p>
                  <h1 className="text-xl font-bold">
                    ประกาศเพิ่มเติมคอร์สในรายวิชาเคมี
                  </h1>

                  <p className="text-gray-600 mt-4">9/2/2023</p>
                </div>
              </div>
              <div className="grid grid-cols-2 p-3">
                <div>
                  <div className="newsMockup "></div>
                </div>
                <div className="p-5">
                  <p className="tutorSubject text-sm my-1">ข่าวสาร</p>
                  <h1 className="text-xl font-bold">
                    ประกาศเพิ่มเติมคอร์สในรายวิชาเคมี
                  </h1>

                  <p className="text-gray-600 mt-4">9/2/2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
