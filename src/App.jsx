import Logo from './components/logo/Logo'
import Menu from  './components/Menu/Menu'
import DegraderQaudradro from './components/backgroudsElements/ElementoDegrader'
import ElementesInvert from './components/backgroudsElements/ElementesInvert'
import QuadradoWhite from  './components/backgroudsElements/QuadradoWhite'
import ElementoZebrao from  './components/backgroudsElements/ElementoZebrao'
import './App.css'

function App() {
  return (
    <>
    <header className='topo'><Logo/> <Menu/></header>
    <div className="elementos"><DegraderQaudradro/> <QuadradoWhite/></div>
    <div className="elementosLeft"><ElementesInvert/> <ElementoZebrao/></div>
    <div className="elementosRight"><ElementoZebrao/> 
    <ElementesInvert style={{transform: 'rotate(180deg)', padding: "10px",}}/></div>
    
    
    </>
 
  )
}
export default App
