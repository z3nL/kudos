import { useEffect, useState } from 'react'
import { Routes, Route, BrowserRouter } from "react-router"

import boardsContext from './Utils/boardsContext.js'

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

  // Stores kudo boards with setter to append/delete from them in display
  const [boardsOnDisplay, setBoardsOnDisplay] = useState([]);

  // Tracks if a search is active
  const [isSearchActive, setSearchActivity] = useState(false);
  
  // Stores cache of existing boards to preserve display post search/filter
  const [boardsCache, setBoardsCache] = useState([]);

  return (
    // Use a context provider that includes board-related states/setters
    <boardsContext.Provider value={{
      boardsOnDisplay, setBoardsOnDisplay, 
      isSearchActive, setSearchActivity, 
      boardsCache, setBoardsCache,
      }} >
      
    <Header />
    
    {isAddingBoard && <AddBoard toggleAddingBoard={toggleAddingBoard} />}

    <BrowserRouter>
      <Routes>

        <Route path='/' element={
          <>
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
    
    </boardsContext.Provider>
  )
}

export default App
