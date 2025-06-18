import { useContext } from 'react';

import { deleteBoard }  from '../Utils/boardUtils.js'
import boardsContext from '../Utils/boardsContext';

import '../CSS/BoardCard.css'

const BoardCard = ({ boardID, title, category, author, desc }) => {
    // Use the boards state and its setter in deleteBoard
    const { boards, setBoards } = useContext(boardsContext);
    return (
        <>

            <article className="BoardCard">
                <img src="/src/assets/react.svg" />
                <h3>{title}</h3>
                <p><b>{category}</b></p>
                <p><b>Author: </b>{author}</p>
                <p><b>Description: </b>{desc}</p>
                <div className='boardCardButtons'>
                    <button>View Board</button>
                        <button onClick={() => deleteBoard(boardID, boards, setBoards)}>Delete Board</button>
                </div>
            </article>

        </>

    )
}

export default BoardCard;