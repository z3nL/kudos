import { useState, useEffect } from 'react'
import BoardCard from './BoardCard'
import { loadBoards }  from '../Utils/boardUtils.js'
import '../CSS/Boards.css'

const Board = () => {
    const [boards, setBoards] = useState([]);

    // useEffect( () => {
    //     loadBoards(setBoards);
    // }, []);


    return (
        <>

        <section id="Boards">
            {
            boards.map(board => {
                return (
                    <BoardCard
                        boardId={board.boardId} title={board.title} category={board.category} 
                        author={board.author} description={board.description} 
                    />
                )
            })
        }
        </section>

        </>
    
    )
}

export default Board;