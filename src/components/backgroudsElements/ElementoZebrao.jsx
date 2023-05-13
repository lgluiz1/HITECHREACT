
import propTypes from 'prop-types'
ElementoZebrao.propTypes = {class:propTypes.string , children:propTypes.element.isRequired}

export default function ElementoZebrao(props) {
  const estilo = {
    overflow: "hidden",
    width: "10vw",
    height: "20vh",
  };
  const estiloDiv = {
    width: "15vw",
    height: "25vh",
    backgroundColor: "#0C0824",
    zIndex: "-99",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    rotate: "45deg",
  };
  const estiloSpan = {
    width: "150%",
    height: "10px",
    backgroundColor: "#fff",
    display: "block",
  };

  const list = Array(9).fill(0).map((x, i) => (<span key={i} style={estiloSpan}></span>))

  return (
    <div style={estilo} className={props?.class}>
      {props?.children}
      <div style={estiloDiv}>
        {list}
      </div>
    </div>
  );
}
