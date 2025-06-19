import { addKudo } from '../Utils/kudoUtils'

import '../CSS/AddModal.css'

const AddKudo = ({ activeBoardID, kudos, setKudos, toggleAddingKudo }) => {
    
    const handleSubmit = (formData) => {
        toggleAddingKudo();

        const newKudoData = {
            title : formData.get('title'),
            description : formData.get('description'),
            gifSource: formData.get('gifURL'),
            owner : formData.get('owner'),
        };

        addKudo(activeBoardID, newKudoData, kudos, setKudos);
    }

    return (
        <div id="AddModal" onClick={toggleAddingKudo}>
            <form id='AddModalContent' action={handleSubmit} onClick={(event) => {event.stopPropagation()}}>
                <h1>Create New Kudo</h1>
                <input name='title' placeholder='Enter kudo title' required />
                <input name='description' placeholder='Description' required />
                <input name='gifQuery' placeholder='Search GIFs...' />
                <button>Search</button>
                <input name='gifURL' placeholder='GIF URL' required />
                <button>Copy GIF URL</button>
                <input name='owner' placeholder='Owner (optional)' />
                <button>Create</button>
            </form>
        </div>
    )
}

export default AddKudo;