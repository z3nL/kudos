import { useState } from 'react'
import { Routes, Route, BrowserRouter, Link } from "react-router"
import './App.css'

import AddBoard from './Components/AddBoard'
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import Boards from './Components/Boards'
import NotFound from './Components/NotFound'
import './CSS/Footer.css' // No need for an isolated component

function App() {
  // Tracks if add board modal should be open
  const [isAddingBoard, setIsAddingBoard] = useState(false);
  const toggleAddingBoard = () => {setIsAddingBoard(!isAddingBoard)};

  return (
    <>
    <Header />

    <BrowserRouter>
      <Routes>

        <Route path='/' element={
          <>
          {isAddingBoard && <AddBoard/>}
          <NavBar toggleAddingBoard={toggleAddingBoard} />
          <Boards />
          </>
        } />

        <Route path='*' element={<NotFound />} />

      </Routes>
    </BrowserRouter>

    <footer>
      <h3>Zen L // CodePath 2025</h3>
    </footer>
    </>
  )
}

export default App
