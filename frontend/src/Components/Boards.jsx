import { useEffect, useContext } from 'react'

import BoardCard from './BoardCard'

import { loadBoards }  from '../Utils/boardUtils.js'
import boardsContext from '../Utils/boardsContext';

import '../CSS/Boards.css'

const Boards = () => {
    // Access necessary board-releated states/setters from boardsContext
    const { boardsOnDisplay, setBoardsOnDisplay, setBoardsCache } = useContext(boardsContext);

    // Initialize display
    useEffect( () => {
        loadBoards(setBoardsOnDisplay, setBoardsCache);
    }, []);

    return (
        <section id="Boards">
        { !boardsOnDisplay.empty &&
            boardsOnDisplay.map(board => {
                return (
                        <BoardCard key={board.boardID}
                            boardID={board.boardID} title={board.title} category={board.category} 
                            author={board.author} desc={board.desc}
                        />
                )
            })
        }

        {/* If boards contains bool empty, then it also contains a message to indicate as such */}
        { boardsOnDisplay.empty &&
            <p>{boardsOnDisplay.message}</p>
        }
        </section>
    )
}

export default Boards;