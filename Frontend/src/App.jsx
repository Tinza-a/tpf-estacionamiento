<<<<<<< Updated upstream
import { useState } from 'react'
import './App.css'
=======
import react from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from '../src/pages/main-page.jsx'
import ParkingPage from "./pages/parking-page.jsx";
>>>>>>> Stashed changes

function App() {


  return (
    <>
<<<<<<< Updated upstream
     <h1>ejemplo</h1>
=======
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/ParkingPage" element={<ParkingPage />} />
      </Routes>
    </BrowserRouter>
>>>>>>> Stashed changes
    </>
  )
}

export default App
