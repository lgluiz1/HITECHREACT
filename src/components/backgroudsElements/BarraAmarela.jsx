export default function BarraAmarela(props){
    const estilo = {
        backgroundColor: '#D8B83F',        
      };
   
    return(         
        <div style={estilo} className={props.classe}>
            {props.children}

            
        </div>
    )
}
