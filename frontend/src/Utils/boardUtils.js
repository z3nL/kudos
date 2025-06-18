// Leverage axios to help with more complex requests
import axios from 'axios'

// Loads boards from database
export const loadBoards = (setBoards) => {
    fetch("http://localhost:3000/")
        .then((res) => res.json())
        .then((boards) => setBoards(boards))
}

// Deletes a board from the databse, provided an ID, and subsequently removes it from the boards state
export const deleteBoard = (boardID, boards, setBoards) => {
    deleteBoardFromDB(boardID);

    // TODO There had to be an easier way to do this, right?
    const boardIDs = boards.map(board => board.boardID);
    const arrayIndex = boardIDs.indexOf(boardID);
    setBoards(boards.toSpliced(arrayIndex, 1));

}

// Helper function to remove the board from database
const deleteBoardFromDB = (boardID) => {
    fetch(`http://localhost:3000/boards/${boardID}`, {method: 'DELETE'})
        .then((res) => res.json())
        .then((deletedBoard) => console.log(deletedBoard))
        .catch((error) => {console.log(error)})
}

// Adds a new board to the database and subsequently appends it to the boards state
export const addBoard = (boardData, boards, setBoards) => {
    axios.post('http://localhost:3000/boards', boardData)
        .then((createdBoard) => {console.log(createdBoard.data); setBoards([...boards, createdBoard.data])})
        .catch((error) => {console.log(error)})
}