import { useContext } from 'react';

import { addBoard } from '../Utils/boardUtils';
import boardsContext from '../Utils/boardsContext';

import '../CSS/AddModal.css'

const AddBoard = ({ toggleAddingBoard }) => {   
    // Access necessary board-releated states/setters from boardsContext
    const { boardsOnDisplay, setBoardsOnDisplay, isSearchActive, boardsCache, setBoardsCache } = useContext(boardsContext);

    const handleSubmit = (formData) => {
        toggleAddingBoard();

        const boardData = {
            title : formData.get('boardTitle'),
            category : formData.get('categoryDropdown'),
            author : formData.get('boardAuthor'),
            desc : formData.get('boardDescription')
        };

        addBoard(boardData, boardsOnDisplay, setBoardsOnDisplay, isSearchActive, boardsCache, setBoardsCache);
    }

    return (
        <div id="AddModal" onClick={toggleAddingBoard}>
            <form id="AddModalContent" 
                onClick={(event) => {event.stopPropagation()}} 
                action={handleSubmit}
            >
                <h1>Create New Board</h1>
                <input name="boardTitle" type="text" placeholder="Title" required/>
                <select name="categoryDropdown" defaultValue={""} required>
                    <option value="" disabled>Select a Category</option>
                    <option value="Celebration">Celebration</option>
                    <option value="Thank You">Thank You</option>
                    <option value="Inspiration">Inspiration</option>
                </select>
                <input name="boardAuthor" type="text" placeholder="Author (optional)" />
                <input name="boardDescription" type="text" placeholder="Description" required/>
                <button type="submit">Create Board</button>
            </form>
        </div>
    )
}

export default AddBoard;