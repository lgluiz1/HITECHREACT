import React, { useState } from "react";

function HamburgerMenu(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu" onClick={handleClick} className={props.classe}>
    {props.children}
      <div className={`hamburger ${isOpen ? "open" : ""}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isOpen && (
        <ul className="menu">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )}
      <style>
        {`
          .hamburger-menu {
            position: relative;
            display: inline-block;
            cursor: pointer;
          }
          
          .hamburger {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 18px;
            width: 25px;
            cursor: pointer;
          }
          
          .hamburger span {
            height: 3px;
            background-color: #333;
          }
          
          .open span:first-child {
            transform: rotate(45deg) translate(4px, 4px);
          }
          
          .open span:nth-child(2) {
            opacity: 0;
          }
          
          .open span:last-child {
            transform: rotate(-45deg) translate(4px, -4px);
          }
          
          .menu {
            position: absolute;
            top: 100%;
            left: 0;
            padding: 10px;
            background-color: #f0f0f0;
            list-style: none;
            margin: 0;
            display: none;
          }
          
          .menu li {
            margin: 5px 0;
            cursor: pointer;
          }
          
          .menu li:hover {
            color: #fff;
            background-color: #333;
          }
          
          .hamburger-menu:hover .menu {
            display: block;
          }
        `}
      </style>
    </div>
  );
}

export default HamburgerMenu;
