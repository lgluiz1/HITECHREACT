import './style.css'
export default function Button(props) {
  

  return (         
    <button className="btn">
      {props.children}
      <span className="btn__before"></span>
      LEARN MORE
    </button>
  )
}
