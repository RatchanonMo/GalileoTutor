import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function MoreButton(props) {
  return (
    <div>
      {props.end ? (
        <div className="moreButton" id="end">
          <a href={props.link}>
            <button className="bg-black p-2 rounded-full mt-2">
              {props.text} <FaArrowAltCircleRight className="inline" />
            </button>
          </a>
        </div>
      ) : (
        <div className="moreButton">
          <a href={props.link}>
            <button className="bg-black p-2 rounded-full mt-2">
              {props.text} <FaArrowAltCircleRight className="inline" />
            </button>
          </a>
        </div>
      )}
    </div>
  );
}
