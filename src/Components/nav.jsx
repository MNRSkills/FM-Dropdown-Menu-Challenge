import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/images/logo.svg";
import {
  faBars,
  faX,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  //state for navbar dropdowns coming from App.jsx -----//

  return (
    <nav className="bg-mediumGray m-0 relative flex justify-between items-center p-2">
      <div className="p-4">
        <img src={Logo} alt="Logo" />
      </div>

      {props.burger === false ? (
        <div className="p-4">
          <FontAwesomeIcon icon={faBars} onClick={() => props.handleBurger()} />
        </div>
      ) : (
        <div className="h-screen absolute top-0 bottom-0 right-0 w-3/4 flex flex-col">
          <FontAwesomeIcon
            icon={faX}
            onClick={() => props.handleBurger("close")}
          />
          <ul className="">
            <li className="flex content-center justify-center relative">
              <h2>Features</h2>{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                onClick={() => props.handleFeature()}
              />
              {props.feature ? (
                <ul className="absolute">
                  <li> Todo List</li>
                  <li> Calendar</li>
                  <li> Reminder </li>
                  <li> Planning </li>
                </ul>
              ) : null}
            </li>
            <li className="flex content-center justify-center relative">
              <h2>Company</h2>
              <FontAwesomeIcon
                icon={faChevronDown}
                onClick={() => props.handleCompany()}
              />
              {props.company ? (
                <ul className="absolute">
                  <li>History</li>
                  <li>Our Team</li>
                  <li>Blog</li>
                </ul>
              ) : null}
            </li>
            <li>
              <h2>Careers</h2>
            </li>
            <li>
              <h2>About</h2>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
