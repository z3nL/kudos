import { useContext, useEffect, useState } from 'react';

import { searchBoards, filterBoards } from '../Utils/boardUtils.js'

import boardsContext from '../Utils/boardsContext';

import '../CSS/NavBar.css'

const NavBar = ({ toggleAddingBoard }) => {
    // Access necessary board-releated states/setters from boardsContext
    const { setBoardsOnDisplay, boardsCache, setSearchActivity } = useContext(boardsContext);

    // Leverage a search content state to streamline continuous input handling
    const [searchContent, setSearchContent] = useState('');

    // Account for a change in input and let useEffect handle the search
    const handleSearchChange = (event) => {
        setSearchContent(event.target.value);
        event.preventDefault();
    }
    useEffect( () => {
        if (searchContent != '') {
            setSearchActivity(true);
        }
        else {
            setSearchActivity(false);
        }
        searchBoards(searchContent, setBoardsOnDisplay, boardsCache);
    }, [searchContent])

    const handleClear = () => {
        setSearchContent('');
        handleFilter('');
    }

    // TODO Stretch: Intersect search and filter operations using states

    // Handles filtering operations
    const handleFilter = (option) => {
        if (option == '') {
            setBoardsOnDisplay(boardsCache);
            return;
        }
        filterBoards(option, setBoardsOnDisplay, boardsCache)
    }

    return (
        <>
        
        <section id="NavBar">
            <form id="SearchBar" onSubmit={(event) => event.preventDefault()}>
                <input type="text" name="searchInput" value={searchContent} onChange={handleSearchChange} placeholder="Search for a board" />
                <button type="submit">Search</button>
                <button onClick={handleClear}>Clear</button>
            </form>

            <form id="Filter" onSubmit={(event) => event.preventDefault()}>
                <button onClick={() => handleFilter('')}>All</button>
                <button onClick={() => handleFilter("recent")}>Recent</button>
                <button onClick={() => handleFilter("Celebration")}>Celebration</button>
                <button onClick={() => handleFilter("Thank You")}>Thank You</button>
                <button onClick={() => handleFilter("Inspiration")}>Inspiration</button>
            </form>

            <button onClick={toggleAddingBoard}>Create New Board</button>
        </section>

        </>
    )
}

export default NavBar;