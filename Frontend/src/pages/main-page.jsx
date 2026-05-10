import react from "react";
import ParkingLogo from '../Imgs/Parking-Logo.png'

import Navbar from "../components/Navbar";
import ParkingSlots from "../components/parking-slots";

function MainPage() {

  return (
    <>
         <Navbar/>
   {/* <h1>main page ejemplo</h1> */}
   <section>
    <nav>
        <header>
         {/* <img src={ParkingLogo} alt="Parking Foto" /> */}
        </header>
        {/* Burger menu */}
    </nav>
    <section>
        <h3>Estacionar Ahora</h3>


{/* <hr></hr> */}
            <section>
                <ParkingSlots
                ParkingName= "Nombre del parking 1"
                ParkinAddress= "Direccion del Parking 1"
                />
                {/* <hr /> */}
                <ParkingSlots
                ParkingName= "Nombre del parking 2"
                ParkinAddress= "Direccion del Parking 2"
                />
                {/* <hr /> */}
                <ParkingSlots
                ParkingName= "Nombre del parking 3"
                ParkinAddress= "Direccion del Parking 3"
                />
            </section>
        <h3>Reservar</h3>
            <section>
                <ParkingSlots
                ParkingName= "Nombre del parking 3  "
                ParkinAddress= "Direccion del Parking 3"
                />
            </section>
        </section>
    </section>
    </>
  )
}

export default MainPage;