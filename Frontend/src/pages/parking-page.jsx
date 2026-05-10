import react from 'react'
import { Link } from 'react-router-dom';
import ParkingSlots from '../components/parking-slots';
import Navbar from '../components/Navbar';
import Disponibilidad from '../components/disponibilidad';
import BarraResevar from "../components/barra-reservar";

function ParkingPage() {


  return (
    <>
    <section> <Navbar />
    {/* <strong>Detal</strong> */}
    </section>

    <ParkingSlots
        ParkingName= "Nombre del parking 3  "
        ParkinAddress= "Direccion del Parking 3"
      />

    <section className='cuadros-disponibles'>
    <div className='cuadro-disponible'><Disponibilidad /></div>
    <div className='cuadro-disponible'><Disponibilidad /></div>
    <div className='cuadro-disponible'><Disponibilidad /></div>
   </section>

   <BarraResevar/>
    </>
  )
}

export default ParkingPage;
