import { useState, useEffect } from 'react'
import { useContext } from 'react';

import BoardCard from './BoardCard'

import { loadBoards }  from '../Utils/boardUtils.js'
import boardsContext from '../Utils/boardsContext';

import '../CSS/Boards.css'

const Boards = () => {
    // Use the boards state and its setter to load data and map content
    const { boards, setBoards } = useContext(boardsContext);

    // Initialize display
    useEffect( () => {
        loadBoards(setBoards);
    }, []);

    return (
        <section id="Boards">
        { !boards.empty &&
            boards.map(board => {
                return (
                        <BoardCard key={board.boardID}
                            boardID={board.boardID} title={board.title} category={board.category} 
                            author={board.author} desc={board.desc}
                        />
                )
            })
        }

        {/* If boards contains bool empty, then it also contains a message to indicate as such */}
        { boards.empty &&
            <p>{boards.message}</p>
        }
        </section>
    )
}

export default Boards;