import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// ----- Images -----//
import Logo from "../assets/images/logo.svg";
import Todo from "../assets/images/icon-todo.svg";
import Calendar from "../assets/images/icon-calendar.svg";
import Reminder from "../assets/images/icon-reminders.svg";
import Planning from "../assets/images/icon-planning.svg";
// ------------------//
// ----- Icons -----//
import {
  faBars,
  faX,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
// -----------------//

function Navbar(props) {
  //state for navbar dropdowns coming from App.jsx -----//

  return (
    <nav
      role="navigation"
      className="bg-transparent m-0 relative flex justify-between items-center p-2 text-mediumGray"
    >
      <div className="p-4">
        <img src={Logo} alt="Logo" />
      </div>

      {props.burger === false ? (
        <div className="p-4 text-3xl " onClick={() => props.handleBurger()}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      ) : (
        <div className="h-screen absolute top-0 bottom-0 right-0 w-3/4 ">
          <div
            className="p-2 pr-4 text-3xl bold text-right mt-2 mb-4"
            onClick={() => props.handleBurger("close")}
          >
            <FontAwesomeIcon icon={faX} />
          </div>
          <ul className="bg-almostWhite">
            <li className=" p-6">
              <span className="flex items-center justify-center">
                <h1 className="-ml-24 ">Features</h1>{" "}
                {props.feature === false ? (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    onClick={() => props.handleFeature()}
                    className="ml-10"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    onClick={() => props.handleFeature()}
                    className="ml-10"
                  />
                )}
              </span>
              {props.feature ? (
                <ul className="text-center">
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
            <li className="p-6">
              <span className="flex items-center justify-center">
                <h1 className="-ml-24 ">Company</h1>
                {props.company === false ? (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    onClick={() => props.handleCompany()}
                    className="ml-10"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    onClick={() => props.handleCompany()}
                    className="ml-10"
                  />
                )}
              </span>
              {props.company ? (
                <ul className="text-center max-w-sm">
                  <li className="-ml-4 p-4">History</li>
                  <li>Our Team</li>
                  <li className="-ml-10 p-4">Blog</li>
                </ul>
              ) : null}
            </li>
            <div className="flex flex-col justify-center items-center ">
              <li className="p-6">
                <h1 className="-ml-28">Careers</h1>
              </li>
              <li className="p-6">
                <h1 className="-ml-28">About</h1>
              </li>
            </div>
          </ul>
          <div className="flex flex-col items-center bg-almostWhite pb-10">
            <button className="outline-none p-10">
              <h1>Login</h1>
            </button>
            <button className="border-mediumGray border w-40 rounded-lg p-2 focus:border-almostBlack">
              <h1>Register</h1>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
