import { useState, useEffect, useContext } from 'react'

import AddKudo  from './AddKudo'
import KudoCard from './KudoCard'

import { loadKudos, deleteKudo, incrementVoteCount }  from '../Utils/kudoUtils.js'
import boardsContext from '../Utils/boardsContext';

import '../CSS/Kudos.css'

const Kudos = () => {
    const { activeBoardTitle, activeBoardID } = useContext(boardsContext);

    const [isAddingKudo, setIsAddingKudo] = useState(false);
    const toggleAddingKudo = () => {setIsAddingKudo(!isAddingKudo)};


    const [kudos, setKudos] = useState([]);
    useEffect( () => {
        loadKudos(activeBoardID, setKudos);
    }, [])

    const handleDelete = (activeBoardID, kudoID) => {
        deleteKudo(activeBoardID, kudoID, kudos, setKudos);
    }

    const handleIncrement = (activeBoardID, kudoID) => {
        incrementVoteCount(activeBoardID, kudoID, kudos, setKudos);
    }

    return (
        <>
        {isAddingKudo && 
            <AddKudo activeBoardID={activeBoardID} kudos={kudos} setKudos={setKudos} toggleAddingKudo={toggleAddingKudo}/>
        }

        <div className='boardHeader'>
            <h2>{activeBoardTitle}</h2>
            <button onClick={toggleAddingKudo}>Create New Kudo</button>
        </div>

        <section id='Kudos'>
            {!kudos.empty &&
                kudos.map((kudo) => {
                    return (
                        <KudoCard key={kudo.kudoID}
                            kudoID={kudo.kudoID} activeBoardID={kudo.boardID}
                            title={kudo.title} description={kudo.description} gifSource={kudo.gifSource} 
                            owner={kudo.owner} voteCount={kudo.voteCount} 
                            handleDelete={handleDelete} handleIncrement={handleIncrement}
                        />
                    )
                })
            }
            
            {kudos.empty &&
                <p>{kudos.message}</p>
            }
        </section>
        
        </>
    )
}

export default Kudos;