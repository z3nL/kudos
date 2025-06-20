import { useContext } from 'react';
import { Link } from "react-router"

import { deleteBoard }  from '../Utils/boardUtils.js'
import boardsContext from '../Utils/boardsContext';

import '../CSS/BoardCard.css'

const BoardCard = ({ boardID, title, category, author, desc }) => {
    // Access necessary board-releated states/setters from boardsContext
    const { boardsOnDisplay, setBoardsOnDisplay, setActiveBoardTitle, setActiveBoardID } = useContext(boardsContext);

    // Helper to make every board image random; "170" has no significance to it
    const min = Math.ceil(170);
    const getRandomizerSeed = () => {
        return Math.floor(Math.random() * min + min);
    }
    
    return (
        <>

            <article className="BoardCard">
                <img className="boardImage" src={`https://picsum.photos/200/150?random=${getRandomizerSeed()}`} />
                <h3 className='boardCardContent'>{title}</h3>
                <p className='boardCardContent'><b>{category}</b></p>
                { author &&
                    <p className='boardCardContent'><b>Author: </b>{author}</p>
                }
                { desc &&
                    <p className='boardCardContent'><b>Description: </b>{desc}</p>
                }
                <div className='boardCardButtons'>
                    <Link to={`/boards/${boardID}`}>
                        <button onClick={() => {setActiveBoardTitle(title); setActiveBoardID(boardID)}}>View Board</button>
                    </Link>
                    <button onClick={() => deleteBoard(boardID, boardsOnDisplay, setBoardsOnDisplay)}>Delete Board</button>
                </div>
            </article>

        </>

    )
}

export default BoardCard;