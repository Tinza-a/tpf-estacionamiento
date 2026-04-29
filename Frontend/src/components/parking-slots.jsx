import react from "react";
import ParkingFoto from '../Imgs/Parking-Foto.jpg'

function ParkingSlots({ParkingName, ParkinAddress} ) {

  return (
    <>
    <section style={{ border: "2px solid red", padding: "20px" }}>
        <img src={ParkingFoto} alt="" />
        <strong>{ParkingName}</strong>
        <p>{ParkinAddress}</p>
        <p>Disponibilidad</p>
    </section>
    </>
  )
}

export default ParkingSlots;