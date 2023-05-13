export default function DegraderQaudradro(props) {
    const estilo = {
      background: 'linear-gradient(0.25turn, #a24bd4, #7327a1, #380158)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '30vw',
      height: '30vh',
      minWidth: '100px',
      maxWidth: '300px',
    }
    const estiloDiv = {
      backgroundColor: '#0C0824',
      width: '26vw',
      height: '28vh',
      minWidth: '100px',
      maxWidth: '280px'
    }
    return (
      <div style={estilo} className={props.classe}>
        {props.children}
        <div style={estiloDiv}></div>
      </div>
    )
  }
  