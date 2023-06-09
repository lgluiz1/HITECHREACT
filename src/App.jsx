import Logo from './components/logo/Logo'
import Menu from  './components/Menu/Menu'
import Section from './components/Section/Section'
import DegraderQaudradro from './components/backgroudsElements/ElementesInvert/ElementoDegrader'
import ElementesInvert from './components/backgroudsElements/ElementesInvert/ElementesInvert'
import QuadradoWhite from  './components/backgroudsElements/QuadradoWhite'
import ElementoZebrao from  './components/backgroudsElements/ElementoZebrao'
import BarraAmarela from './components/backgroudsElements/BarraAmarela'
import HamburgerMenu from './components/MenuMobiler/HamburgerMenu'
import './App.css'

function App() {
  return (
    <>
    <header className='topo'><Logo/> <Menu classe="desktop"/> <HamburgerMenu classe="ham7" /></header>
    <Section classe="section"/>
    <DegraderQaudradro classe="degrader-one"/>
    <DegraderQaudradro classe="degrader-rigth"/>    
    <DegraderQaudradro classe="degrader-botton"/> 
    <QuadradoWhite classe="quadrado-primeiro"/>    
    <ElementesInvert classe="ElementesLeft"/>
    <ElementesInvert classe="ElementesRigth"/>
    <ElementoZebrao class="ZebraoLeft"/>
    <ElementoZebrao class="ZebraoRigth"/> 
    <BarraAmarela classe="BarraAmarela"/>
    
    
    </>
 
  )
}
export default App
