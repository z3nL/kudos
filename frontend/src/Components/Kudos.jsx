import { useState, useEffect, useContext } from 'react'

import AddKudo  from './AddKudo'
import KudoCard from './KudoCard'

import { loadKudos }  from '../Utils/kudoUtils.js'
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

    return (
        <>
        {isAddingKudo && <AddKudo kudos={kudos} setKudos={setKudos} toggleAddingKudo={toggleAddingKudo}/>}

        <div className='boardHeader'>
            <h2>{activeBoardTitle}</h2>
            <button onClick={toggleAddingKudo}>Create New Kudo</button>
        </div>

        <section id='Kudos'>
            {!kudos.empty &&
                kudos.map((kudo) => {
                    return (
                        <KudoCard key={kudo.kudoID}
                            kudoID={kudo.kudoID} boardID={kudo.boardID}
                            title={title} description={description} gifSource={gifSource} 
                            owner={owner} voteCount={voteCount}
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