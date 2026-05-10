import { useState } from "react";
import ParkingLogo from '../Imgs/Parking-Logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  return(
    <div className="navbar">

      <Link to="/">
      <div className="nav_logo_title">
          
          <img src={ParkingLogo} alt="Parking Foto" className="parking_logo_img" />
     
          
          <p>ParkLogo</p>
      </div>
      </Link>
      
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