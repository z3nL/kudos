import { useState } from 'react'
import './App.css'

import AddBoard from './Components/AddBoard'
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import Boards from './Components/Boards'
import './CSS/Footer.css' // Just import the CSS for the footer, no need for an actual component

function App() {
  const [addBoard, setAddBoard] = useState(false);
  const toggleModal = () => {setAddBoard(!addBoard)};

  return (
    <>

      { addBoard && <AddBoard />}
      <Header />
      <NavBar toggleModal={toggleModal} />
      <Boards />
      <footer>
        <h3>Zen L // CodePath 2025</h3>
      </footer>

    </>
  )
}

export default App
