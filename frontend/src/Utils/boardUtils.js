const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'
// TODO Swap during testing const baseUrl = 'http://localhost:3000';

// Leverage axios to help with more complex requests
import axios from 'axios'

// Loads boards from database
export const loadBoards = (setBoardsOnDisplay, setBoardsCache) => {
    fetch(`${baseUrl}/`)
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
    fetch(`${baseUrl}/boards/${boardID}`, {method: 'DELETE'})
        .then((res) => res.json())
        .then((deletedBoard) => console.log(`Deleted ${deletedBoard}`))
        .catch((error) => {console.log(error)})
}

// Adds a new board to the database and subsequently appends it to the boards state
export const addBoard = (newBoardData, boardsOnDisplay, setBoardsOnDisplay, isSearchActive, boardsCache, setBoardsCache) => {
    axios.post(`${baseUrl}/boards`, newBoardData)
        .then((createdBoard) => {
            console.log(`Created ${createdBoard.data}`); 
            
            // Check if there aren't actually any boards loaded
            const empty = boardsOnDisplay.empty || false;

            // Only update the boards on display if no search is active
            if (!isSearchActive) setBoardsOnDisplay(empty ? [createdBoard.data] : [...boardsOnDisplay, createdBoard.data])
            setBoardsCache(empty ? [createdBoard.data] : [...boardsCache, createdBoard.data])
        })
        .catch((error) => {console.log(error)})
}

// Filters the cached boards by provided search query and displays the result
// An empty search just loads the pre-search cache
export const searchBoards = (query, setBoardsOnDisplay, boardsCache) => {
    if (query != '') {
        const searchResults = boardsCache.filter((board) => 
            board.title.toLowerCase().includes(query)
        );
        setBoardsOnDisplay ( searchResults.length ? searchResults : { empty: true, message: `No results for "${query}"` })
    }
    else {
        setBoardsOnDisplay(boardsCache);
    }

}

const Options = {
    RECENT : "recent",
    CELEBRATION : "Celebration",
    THANKYOU : "Thank You",
    INSPIRATION : "Inspiration"
};

// Filters the displayed boards by provided option and updates the display as such
export const filterBoards = (option, setBoardsOnDisplay, boardsCache) => {
    let filterResults;
    switch (option) {
        case Options.RECENT:
            filterResults = boardsCache.toSorted((a, b) => b.boardID - a.boardID).slice(0, 6);
            setBoardsOnDisplay(filterResults.length ? filterResults : {empty: true, message: "No cards to sort by recency! Try making one." })
            break;

        case Options.CELEBRATION:
            filterResults = boardsCache.filter((board) => board.category == "Celebration");
            setBoardsOnDisplay(filterResults.length ? filterResults : {empty: true, message: "No cards tagged 'Celebration'" })
            break;

        case Options.THANKYOU:
            filterResults = boardsCache.filter((board) => board.category == "Thank You");
            setBoardsOnDisplay(filterResults.length ? filterResults : {empty: true, message: "No cards tagged 'Thank You'" })
            break;

        case Options.INSPIRATION:
            filterResults = boardsCache.filter((board) => board.category == "Inspiration");
            setBoardsOnDisplay(filterResults.length ? filterResults : {empty: true, message: "No cards tagged 'Inspiration'" })
            break;

        default:
            console.error("filterBoards: Received invalid filter option");
    }
}