import foto from '../img/oculos.jpg'
import QuadradoWhite from  '../backgroudsElements/QuadradoWhite'

export default function Section(props) {
    const principalLinha = {
        width: '100%',
        height: '80px',
        backgroundColor: '#D8B83F',
        display : 'flex',
        alignItems: 'center',
        
    }
    const hEstilo = {
        fontFamily: 'Rajdhani, sans-serif',
        fontSize : '5.5em',
        textTransform: 'uppercase',
        paddingLeft: '15%',
        color: '#fff',
    }
    const gamerEstilo = {
        color: '#0C0824',
    }
    const fotoEstilo ={
        src: foto,
    }
    const imgEstilo = {
        width: '500px',
        height: '500px',
        overflow: 'hidden',
        position: 'relative',
        display : 'flex',
        alignItems: 'center', 
        justifyContent:'center'
    }
    const quadradoTopo = {
        width: '30px',
        height: '30px',
        backgroundColor: '#fff',
        position: 'absolute',
        zIndex: 99,
    }
    return(
        <>
        <div style={principalLinha}className={props.classe}>
            {props.children}
            <h1 style={hEstilo}> Tech <span style={gamerEstilo}>Gamer</span></h1>
            <div style={imgEstilo}>
                <img {...fotoEstilo} draggable="false" alt="Foto" style={{ width: '800px',}}/>
                
            </div>
            <QuadradoWhite style={quadradoTopo} />
        </div>
        </>
    )
}
