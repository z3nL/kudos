import '../CSS/NavBar.css'

const NavBar = ({ toggleModal }) => {
    return (
        <>
        
        <section id="NavBar">
            <form id="SearchBar">
                <input id="searchInput" placeholder="Search for a board" />
                <button type="submit">Search</button>
                <button>Clear</button>
            </form>

            <form id="Filter">
                <button>All</button>
                <button>Recent</button>
                <button>Celebration</button>
                <button>Thank You</button>
                <button>Inspiration</button>
            </form>

            <button onClick={toggleModal}>Create New</button>
        </section>

        </>
    )
}

export default NavBar;