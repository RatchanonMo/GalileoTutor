import React, { Component } from "react";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Try from "./component/Try";
import $ from "jquery";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./App.css";
import tutor1 from "./img/tutor1.png";
import tutor2 from "./img/tutor2.png";
import tutor3 from "./img/tutor3.png";
import MoreButton from "./component/MoreButton";
import title from "./img/title.png";
import f1 from "./img/f1.jpg";

export default class App extends Component {
  componentDidMount = () => {
    $(window).scroll(function () {
      /* get current scroll-position within window */
      var scroll = $(window).scrollTop();

      $(".mainLeft li a").each(function () {
        var elementPositionTop =
          parseFloat($(this).offset().top) + parseFloat($(this).height() / 2);

        /* change color for each background-change */
        if (
          (elementPositionTop >= 3000 && elementPositionTop <= 4550) ||
          (elementPositionTop >= 5500 && elementPositionTop <= 6450)
        ) {
          $(this).addClass("blackText");
          $(this).addClass("blackDecorated");
        } else {
          $(this).removeClass("blackText");
          $(this).removeClass("blackDecorated");
        }
      });
      $(".mainLeft").each(function () {
        var elementPositionTop =
          parseFloat($(this).offset().top) + parseFloat($(this).height() / 2);

        /* change color for each background-change */
        if (
          (elementPositionTop >= 3000 && elementPositionTop <= 4550) ||
          (elementPositionTop >= 5500 && elementPositionTop <= 6450)
        ) {
          $(this).addClass("blackBorder");
        } else {
          $(this).removeClass("blackBorder");
        }
      });

      $(".logo").each(function () {
        var elementPositionTop =
          parseFloat($(this).offset().top) + parseFloat($(this).height() / 2);

        /* change color for each background-change */
        if (
          (elementPositionTop >= 3000 && elementPositionTop <= 4550) ||
          (elementPositionTop >= 5500 && elementPositionTop <= 6450)
        ) {
          $(this).addClass("blackText");
        } else {
          $(this).removeClass("blackText");
        }
      });
      $("nav a").each(function () {
        var elementPositionTop =
          parseFloat($(this).offset().top) + parseFloat($(this).height() / 2);

        /* change color for each background-change */
        if (
          (elementPositionTop >= 3000 && elementPositionTop <= 4550) ||
          (elementPositionTop >= 5500 && elementPositionTop <= 6450)
        ) {
          $(this).addClass("blackText");
        } else {
          $(this).removeClass("blackText");
        }
      });
    });
  };

  render() {
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
    return (
      <>
        <Navbar />
        <Try />
        <div id="home" className="my-20">
          <div >
            <div>
              <OwlCarousel
                className="container overflow-hidden mx-auto owl-theme"
                margin={80}
                items={1}
                stagePadding={70}
                autoplay
              >
                <div>
                  <img
                    src={f1}
                    className=""
                    style={{ borderRadius: "20px" }}
                  />
                </div>
                <div>
                  <img
                    src={f1}
                    className=""
                    style={{ borderRadius: "20px" }}
                  />
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
                มิถุนายน พ.ศ. 2555 ที่ศูนย์ U-Center
                ใต้หอพักจุฬาลงกรณ์มหาวิทยาลัย ปัจจุบัน office
                ของทางสถาบันอยู่ที่ สุขสวัสดิ์ 39
                โดยหลักการของทางทีมงานกาลิเลโอติวเตอร์เราเชื่อมั่นว่าการเรียนส่วนตัวจะทำให้ครูถ่ายทอดความรู้ที่มีประสิทธิภาพให้กับนักเรียนได้มากที่สุดและสามารถทำให้นักเรียนโฟกัสในสิ่งต้องเรียนได้มากที่สุด
              </p>
              <p className="text-lg">
                ปัจจุบันทางสถาบันได้เปิดสอนแบบ online เต็มรูปแบบในวิชา
                คณิตศาสตร์ เคมี ฟิสิกส์ ชีววิทยา และ ภาษาอังกฤษ
                โดยเน้นในหลักสูตร{" "}
                <b>International : IGCSE GCSE A-LEVEL IB AP SAT </b>
                เป็นหลัก
                โดยครูที่จะทำการสอนที่สถาบันจะต้องมีประสบการณ์ในการสอนในวิชานั้น
                ๆ หรือจบการศึกษาขั้นต่ำในระดับปริญญาโท
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

          <div className="max-w-7xl m-auto py-20  " id="course">
            <p className="py-2 px-3 border border-black rounded-full inline">
              คอร์สเรียนทั้งหมด
            </p>
            <h1 className="text-9xl black my-4">OUR COURSES</h1>

            <OwlCarousel margin={10} nav>
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
              <div className="text-white">
                <p className="py-2 px-3 border border-white rounded-full inline">
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
                className="overflow-hidden"
                margin={10}
                items={1}
                autoplay
              >
                <div className="relative">
                  <img src={tutor1} alt="" />
                  <div className="tutorText  max-w-xs">
                    <p className="tutorSubject text-sm my-1">ฟิสิกส์</p>

                    <h1 className="text-2xl font-bold">ครูพี่เติม</h1>
                    <p>
                      ฟาสต์ฟู้ดโปรเจกต์ป๊อปมุมมอง ฟอยล์อินเตอร์ผลักดัน ซีรีส์
                      เอเซียสะบึมส์อพาร์ทเมนต์พ่อค้าพาสตา
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img src={tutor2} alt="" />
                  <div className="tutorText  max-w-xs">
                    <p className="tutorSubject text-sm my-1">คณิตศาสตร์</p>
                    <h1 className="text-2xl font-bold">ครูพี่เก๋</h1>
                    <p>
                      ฟาสต์ฟู้ดโปรเจกต์ป๊อปมุมมอง ฟอยล์อินเตอร์ผลักดัน ซีรีส์
                      เอเซียสะบึมส์อพาร์ทเมนต์พ่อค้าพาสตา
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img src={tutor3} alt="" />
                  <div className="tutorText  max-w-xs">
                    <p className="tutorSubject text-sm my-1">ภาษาอังกฤษ</p>
                    <h1 className="text-2xl font-bold">ครูพี่แซนด์</h1>
                    <p>
                      ฟาสต์ฟู้ดโปรเจกต์ป๊อปมุมมอง ฟอยล์อินเตอร์ผลักดัน ซีรีส์
                      เอเซียสะบึมส์อพาร์ทเมนต์พ่อค้าพาสตา
                    </p>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </main>

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

        <main className="text-white" id="blog">
          <div className=" max-w-screen-lg m-auto py-20  text-center">
            <p className="py-2 px-3 border border-white rounded-full inline">
              บทความและข่าวสาร
            </p>
            <h1 className="text-9xl black my-4 text-center">Blog & News</h1>
            <div className="grid grid-cols-2 gap-4 my-12 text-left">
              <div className="border border-white">
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
                  <p className="text-gray-300 mt-4">
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

                    <p className="text-gray-300 mt-4">9/2/2023</p>
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

                    <p className="text-gray-300 mt-4">9/2/2023</p>
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

                    <p className="text-gray-300 mt-4">9/2/2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}
