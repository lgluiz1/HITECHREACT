export default function DegraderQaudradro(props){
    const estilo = {
        background: 'linear-gradient(0.25turn, #a24bd4, #7327a1, #380158)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '18vw',
        height: '35vh',
    }
    const estiloDiv = {
        backgroundColor: '#0C0824',
        width: '15vw',
        height: '30vh',
    }
    return(         
        <div style={estilo} className={props.classe} >
            {props.children}
            <div style={estiloDiv}></div>
        </div>
    )
}