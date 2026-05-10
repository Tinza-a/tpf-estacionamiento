import react from "react";
import ParkingFoto from '../Imgs/Parking-Foto.jpg'
import { Link } from "react-router-dom";

function ParkingSlots({ParkingName, ParkinAddress} ) {

  return (
    <>
    <Link to="/ParkingPage" className="anchor-parkingslots">
    
      <section
        className="anchor-parkingslots-items">

        {/* items1 */}
        <section className="anchor-parkingslots-items1">

            {/* imagen y contenedor */}
          <section className="anchor-parkingslots-itemsimg-container">
            <img src={ParkingFoto} alt="" className="anchor-parkingslots-items-img"/>
          </section>

          <section className="anchor-parkingslots-items1-1">
          <strong>{ParkingName}</strong>
          <p>{ParkinAddress}</p>
          <p>Disponibilidad</p>
          </section>
        </section>

        {/* items2 */}
        <section >
          <strong>Precio</strong>
          <p>Por Hora</p>
        </section>
      </section>
    </Link>
    </>
  )
}

export default ParkingSlots;