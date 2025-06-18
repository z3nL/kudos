// Leverage axios to help with more complex requests
import axios from 'axios'

// Loads boards from database
export const loadBoards = (setBoardsOnDisplay, setBoardsCache) => {
    fetch("http://localhost:3000/")
        .then((res) => res.json())
        .then((boards) => {setBoardsOnDisplay(boards); setBoardsCache(boards)})
}

// Deletes a board from the databse, provided an ID, and subsequently removes it from the boards state
export const deleteBoard = (boardID, boardsOnDisplay, setBoardsOnDisplay) => {
    deleteBoardFromDB(boardID);

    // TODO There had to be an easier way to do this, right?
    const boardIDs = boardsOnDisplay.map(board => board.boardID);
    const arrayIndex = boardIDs.indexOf(boardID);
    setBoardsOnDisplay(boardsOnDisplay.toSpliced(arrayIndex, 1));

}

// Helper function to remove the board from database
const deleteBoardFromDB = (boardID) => {
    fetch(`http://localhost:3000/boards/${boardID}`, {method: 'DELETE'})
        .then((res) => res.json())
        .then((deletedBoard) => console.log(deletedBoard))
        .catch((error) => {console.log(error)})
}

// Adds a new board to the database and subsequently appends it to the boards state
export const addBoard = (newBoardData, boardsOnDisplay, setBoardsOnDisplay, isSearchActive, boardsCache, setBoardsCache) => {
    axios.post('http://localhost:3000/boards', newBoardData)
        .then((createdBoard) => {
            console.log(createdBoard.data); 
            // Only update the boards on display if no search is active
            if (!isSearchActive) setBoardsOnDisplay([...boardsOnDisplay, createdBoard.data])
            setBoardsCache([...boardsCache, createdBoard.data])
        })
        .catch((error) => {console.log(error)})
}

// Filters the cached boards by provided search query and displays the result
// An empty search just loads the pre-search cache
export const searchBoards = (query, setBoardsOnDisplay, boardsCache) => {
    if (query != '') {
        setBoardsOnDisplay( boardsCache.filter((board) => 
            board.title.toLowerCase().includes(query) ||
            board.author.toLowerCase().includes(query) ||
            board.desc.toLowerCase().includes(query)
        ));
    }
    else {
        setBoardsOnDisplay(boardsCache);
    }

}

// Filters the displayed boards by provided option and updates the display as such
export const filterBoards = (option, setBoardsOnDisplay, boardsCache) => {
    console.log("Filtering by option " + option);
    switch (option) {
        case "recent":
            setBoardsOnDisplay(boardsCache.toSorted((a, b) => b.boardID - a.boardID).slice(0, 6));
            break;

        case "Celebration":
            setBoardsOnDisplay(boardsCache.filter((board) => board.category == "Celebration"));
            break;

        case "Thank You":
            setBoardsOnDisplay(boardsCache.filter((board) => board.category == "Thank You"));
            break;

        case "Inspiration":
            setBoardsOnDisplay(boardsCache.filter((board) => board.category == "Inspiration"));
            break;

        default:
            console.error("filterBoards: Received invalid filter option");
    }
}