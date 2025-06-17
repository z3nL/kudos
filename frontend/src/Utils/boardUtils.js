export const loadBoards = (setBoards) => {
    fetch("http://localhost:3000/")
        .then((res) => res.json())
        .then((boards) => setBoards(boards))
}

export const deleteBoard = (boardID) => {
    console.log("hi");
}