import { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  return(
    <div className="navbar">
      <div className="nav_logo">Navbar</div>
      <div className={`nav_items ${isOpen ? "open" : ""}`}>
        <a href="#">Tus Reservas</a>
        <a href="#">Tu Historial</a>
        <a href="#">Perfil</a>
        <a href="#">Configuración</a>
      </div>
      <div 
      className={`nav_toggle ${isOpen ? "open" : ""}`}
      onClick={()=> setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Navbar;