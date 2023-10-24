import React from "react";
// ----- Icons -----//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faX,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

// ----- Images -----//
import Logo from "../assets/images/logo.svg";
import Todo from "../assets/images/icon-todo.svg";
import Calendar from "../assets/images/icon-calendar.svg";
import Reminder from "../assets/images/icon-reminders.svg";
import Planning from "../assets/images/icon-planning.svg";

function DesktopNav(props) {
  return (
    <nav className="flex justify-around items-center p-6">
      <div>
        <img src={Logo} alt="" />
      </div>
      <ul>
        <li className=" p-2">
          <span className="flex items-center justify-center relative">
            <h1 className="font-bold">Features</h1>{" "}
            {props.feature === false ? (
              <FontAwesomeIcon
                icon={faChevronDown}
                onClick={() => props.handleFeature()}
                className="ml-4"
              />
            ) : (
              <FontAwesomeIcon
                icon={faChevronUp}
                onClick={() => props.handleFeature()}
                className="ml-4"
              />
            )}
          </span>
          {props.feature ? (
            <ul className="text-center absolute">
              <li>
                <span className="flex items-center justify-center ml-4">
                  <img src={Todo} alt="Todo List" className="pr-2 m-2" />
                  <h1 className="text-left">Todo List</h1>
                </span>
              </li>
              <span className="flex items-center justify-center ml-4">
                <img src={Calendar} alt="Calendar" className="pr-2 m-2" />
                <li> Calendar</li>
              </span>
              <span className="flex items-center justify-center ml-4">
                <img src={Reminder} alt="Reminder" className="pr-2 m-2" />
                <li> Reminder </li>
              </span>
              <span className="flex items-center justify-center ml-4">
                <img src={Planning} alt="Planning" className="pr-2 m-2" />
                <li> Planning </li>
              </span>
            </ul>
          ) : null}
        </li>
        <li className="p-2">
          <span className="flex items-center justify-center relative">
            <h1 className="font-bold">Company</h1>
            {props.company === false ? (
              <FontAwesomeIcon
                icon={faChevronDown}
                onClick={() => props.handleCompany()}
                className="ml-4"
              />
            ) : (
              <FontAwesomeIcon
                icon={faChevronUp}
                onClick={() => props.handleCompany()}
                className="ml-4"
              />
            )}
          </span>
          {props.company ? (
            <ul className="text-center max-w-sm absolute">
              <li className="-ml-4 p-4">History</li>
              <li>Our Team</li>
              <li className="-ml-10 p-4">Blog</li>
            </ul>
          ) : null}
        </li>
        <li className="p-4">Career</li>
        <li className="p-4"> About </li>
      </ul>
      <div className="">
        <button className="mx-6">Login</button>
        <button className="mx-6">Register</button>
      </div>
    </nav>
  );
}

export default DesktopNav;
