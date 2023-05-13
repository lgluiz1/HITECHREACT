import foto from '../img/oculos.jpg'
import QuadradoWhite from  '../backgroudsElements/QuadradoWhite'
import Button from '../button'

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
        fontSize : '5.5Vw',
        textTransform: 'uppercase',
        paddingLeft: '15%',
        color: '#fff',
        display : 'flex',
        gap: '5px',
    }
    const gamerEstilo = {
        color: '#0C0824',
    }
    const fotoEstilo ={
        src: foto,
    }
    const imgEstilo = {
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    const quadradoTopo = {
        width: '30px',
        height: '30px',
        backgroundColor: '#fff',
        position: 'absolute',
        zIndex: 99,
    }
    const lorem = {
        position: 'absolute',
        maxWidth: '40Vw',
        minWidth: '30Vw',
        top: '120%',
        left: '15%',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color : '#fff',
        gap: '30px',
        }
        const siteCom = {
            fontFamily: 'Rajdhani, sans-serif',
            position: 'absolute',
            color: '#D8B83F',
            top: '500%',
            fontSize : 'calc(13px + 1Vw)',
            left: '62%',
            zIndex: '2',
            
        }
    return(
        <>
        <div style={principalLinha}className={props.classe}>
            {props.children}
            <h1 className='hEstilo' style={hEstilo}  > Tech <span className='gamerEstilo' style={gamerEstilo}>Gamer</span></h1>
            <div style={imgEstilo}>
                <img {...fotoEstilo} draggable="false" alt="Foto" style={{ width: '50%', height:'50%', objectFit: 'cover' , minWidth: '200px',
  minHeight: '200px', }}/>
                
            </div>
            <div className="loren" style={lorem}>
                <p className="paragrafo" style={{fontSize:'2Vw',fontFamily: 'Rajdhani, sans-serif',}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt a labore ut animi sapiente eum dolore, libero, facilis atque beatae fuga numquam. Illum dolores magni distinctio soluta doloremque qui molestiae!</p>
                <Button />
            </div>
            <QuadradoWhite style={quadradoTopo} />
             <p style={siteCom}>...WWW.TECH.COM</p>
        </div>
        </>
    )
}
