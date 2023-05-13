import { useState } from "react";
import style from "./style.module.css";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const list = ['Home','About us','Services','Contact Us'];

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div onClick={handleClick} className={style.hamburgerMenu}>
      <div className={`${style.hamburger}`}>
        { [1,2,3].map((x) => (<span key={x} className={!isOpen && style.hamburgerClear}></span>)) }
      </div>
      {isOpen && (
        <ul className={style.menu}>
          {list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      )}
    </div>
  );
}

