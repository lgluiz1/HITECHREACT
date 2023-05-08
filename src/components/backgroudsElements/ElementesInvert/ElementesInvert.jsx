export default function ElementesInvert(props){
    const estilo = {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
      };
    const spanEstilo = {
        width: '50px',
        height: '3px',
        backgroundColor:' #fff',
        rotate: '30deg',
        display: 'block',
    }
    return(         
        <div style={estilo} className={props.classe}>
            {props.children}

            <span style={spanEstilo}></span>
            <span style={spanEstilo}></span>
            <span style={spanEstilo}></span>
            <span style={spanEstilo}></span>
            <span style={spanEstilo}></span>
            <span style={spanEstilo}></span>
            <span style={spanEstilo}></span>
        </div>
    )
}
