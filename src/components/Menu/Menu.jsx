import style from "./style.module.css";

export default function Menu() {
  const list = ["Home", "About Us", "Services", "Contact Us"];
  return (
    <ul className={style.menuDesktop}>
      {list.map((item, index) => (<li key={index}><a href="#">{item}</a></li>))}
    </ul>
  );
}
