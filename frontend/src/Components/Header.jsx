import { Link } from "react-router"
import '../CSS/Header.css'
import smiley from '../assets/smiley.png'

const Header = () => {
    return (
        <>

        <Link to='/'>
        <header>
            <img id="smiley" src={smiley}/>
            <h1 id="headerTet">Kudo Board</h1>
        </header>
        </Link>

        </>
    )
}

export default Header