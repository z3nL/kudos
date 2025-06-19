import { useState } from 'react'
import { Routes, Route, BrowserRouter } from "react-router"

import boardsContext from './Utils/boardsContext.js'

import './App.css'

import AddBoard from './Components/AddBoard'
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import Boards from './Components/Boards'
import Kudos from  './Components/Kudos'
import NotFound from './Components/NotFound'
import './CSS/Footer.css' // No need for an isolated component

function App() {
  // Tracks if add board modal should be open
  const [isAddingBoard, setIsAddingBoard] = useState(false);
  const toggleAddingBoard = () => {setIsAddingBoard(!isAddingBoard)};

  // Stores kudo boards with setter to append/delete from them in display
  const [boardsOnDisplay, setBoardsOnDisplay] = useState([]);

  // Tracks if a search is active
  const [isSearchActive, setSearchActivity] = useState(false);
  
  // Stores cache of existing boards to preserve display post search/filter
  const [boardsCache, setBoardsCache] = useState([]);

  // Store title and ID of active board to display kudos for
  const [activeBoardTitle, setActiveBoardTitle] = useState("");
  const [activeBoardID, setActiveBoardID] = useState(-1);

  return (
    // Use a context provider that includes board-related states/setters
    <boardsContext.Provider value={{
      boardsOnDisplay, setBoardsOnDisplay, 
      isSearchActive, setSearchActivity, 
      boardsCache, setBoardsCache,
      activeBoardTitle, setActiveBoardTitle,
      activeBoardID, setActiveBoardID
    }} >
    
    {isAddingBoard && <AddBoard toggleAddingBoard={toggleAddingBoard} />}

    <BrowserRouter>
      <Routes>

        <Route path='/' element={
          <>
          <Header />
          <NavBar toggleAddingBoard={toggleAddingBoard} />
          <Boards />
          </>
        } />

        <Route path='/boards/*' element={
          <>
          <Header />
          <Kudos />
          </>
        } />
        
        <Route path='*' element={
          <>
          <Header />
          <NotFound />
          </>
        } />

      </Routes>
    </BrowserRouter>

    <footer>
      <h3>Zen L // CodePath 2025</h3>
    </footer>
    
    </boardsContext.Provider>
  )
}

export default App
