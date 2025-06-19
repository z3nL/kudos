import '../CSS/AddModal.css'

const AddKudo = ({ kudos, setKudos, toggleAddingKudo }) => {
    return (
        <div id="AddModal" onClick={toggleAddingKudo}>
            <form id='AddModalContent' onClick={(event) => {event.stopPropagation()}}>
                <h1>Create New Kudo</h1>
                <input name='title' placeholder='Enter kudo title' required />
                <input name='description' placeholder='Description' required />
                <input name='gifQuery' placeholder='Search GIFs...' />
                <button>Search</button>
                <input name='gifURL' placeholder='GIF URL' />
                <button>Copy GIF URL</button>
                <input name='owner' placeholder='Owner (optional)' />
                <button>Create</button>
            </form>
        </div>
    )
}

export default AddKudo;