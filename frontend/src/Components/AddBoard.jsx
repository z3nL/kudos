import { useContext } from 'react';

import { addBoard } from '../Utils/boardUtils';
import boardsContext from '../Utils/boardsContext';

import '../CSS/AddBoard.css'

const AddBoard = ({ toggleAddingBoard }) => {   
    // Use the boards state and its setter in addBoard
    const { boards, setBoards } = useContext(boardsContext);

    const handleSubmit = (formData) => {
        toggleAddingBoard();

        const boardData = {
            title : formData.get('boardTitle'),
            category : formData.get('categoryDropdown'),
            author : formData.get('boardAuthor'),
            desc : formData.get('boardDescription')
        };

        addBoard(boardData, boards, setBoards);
    }

    return (
        <div id="AddBoardModal" onClick={toggleAddingBoard}>
            <form id="AddBoardModalContent" 
                onClick={(event) => {event.stopPropagation()}} 
                action={handleSubmit}
            >
                <h1>Create New Board</h1>
                <input name="boardTitle" type="text" placeholder="Title" required/>
                <select name="categoryDropdown" defaultValue={""} required>
                    <option value="" disabled>Select a Category</option>
                    <option value="celebration">Celebration</option>
                    <option value="thankyou">Thank You</option>
                    <option value="inspiration">Inspiration</option>
                </select>
                <input name="boardAuthor" type="text" placeholder="Author" required/>
                <input name="boardDescription" type="text" placeholder="Description" required/>
                <button type="submit">Create Board</button>
            </form>
        </div>
    )
}

export default AddBoard;