import React from "react";
import "./Sidebar.css";

const item = [
  { name: "Home", href: "/#home", status: "active" },
  { name: "Our course", href: "/#course", status: "" },
  { name: "Tutors", href: "/#tutors", status: "" },
  { name: "Our success", href: "/#success", status: "dis" },
  { name: "Blog & news", href: "/#blog", status: "dis" },
];

export default function Sidebar() {
  return (
    <div>
      <div className="sidebar ">
        <ul className="mainLeft" id="mymenu">
          {item.map((item) => (
            <li>
              <a href={item.href} className="decorated" >
                <span>{item.name}</span>
                
              </a>
            </li>
          ))}
        </ul>
      </div>

    </div>

  );
}
