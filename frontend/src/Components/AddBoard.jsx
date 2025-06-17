import '../CSS/AddBoard.css'

const AddBoard = () => {
    return (
        <div id="AddBoardModal">
            <form id="AddBoardModalContent">
                <h1>Create New Board</h1>
                <input id="boardTitle" type="text" placeholder="Title" required/>
                <select id="categoryDropdown" defaultValue={""} required>
                    <option value="" disabled>Select a Category</option>
                    <option value="celebration">Celebration</option>
                    <option value="thankyou">Thank You</option>
                    <option value="inspiration">Inspiration</option>
                </select>
                <input id="boardAuthor" type="text" placeholder="Author" required/>
                <button type="submit">Create Board</button>
            </form>
        </div>
    )
}

export default AddBoard;