import { useState, useContext } from 'react';

import { deleteBoard }  from '../Utils/boardUtils.js'
import boardsContext from '../Utils/boardsContext';

import '../CSS/BoardCard.css'

const BoardCard = ({ boardID, title, category, author, desc }) => {
    // Use the boards state and its setter in deleteBoard
    const { boards, setBoards } = useContext(boardsContext);

    // Helper to make every board image random
    const min = Math.ceil(170);
    const getRandomizerSeed = () => {
        return Math.floor(Math.random() * min + min);
    }
    
    return (
        <>

            <article className="BoardCard">
                <img src={`https://picsum.photos/200/150?random=${getRandomizerSeed()}`} />
                <h3 className='boardCardContent'>{title}</h3>
                <p className='boardCardContent'><b>{category}</b></p>
                <p className='boardCardContent'><b>Author: </b>{author}</p>
                <p className='boardCardContent'><b>Description: </b>{desc}</p>
                <div className='boardCardButtons'>
                    <button>View Board</button>
                        <button onClick={() => deleteBoard(boardID, boards, setBoards)}>Delete Board</button>
                </div>
            </article>

        </>

    )
}

export default BoardCard;