import { useState } from 'react'
import { addKudo, searchGIFs } from '../Utils/kudoUtils'

import '../CSS/AddModal.css'
import '../CSS/GIFs.css'

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

    const [gifSearchContent, setGifSearchContent] = useState('');
    const [gifSearchResults, setGifSearchResults] = useState([]);
    const [isDisplayingGIFs, setIsDisplayingGIFs] = useState(false);
    const [gifURL, setGifURL] = useState('');

    const handleSearchChange = (event) => {
        setGifSearchContent(event.target.value);
        event.preventDefault();
    }

    const handleGIFSearch = (event) => {
        event.preventDefault();
        searchGIFs(gifSearchContent, setGifSearchResults);
        setIsDisplayingGIFs(true);
    }

    const handleURLChange = (event) => {
        setGifURL(event.target.value);
    }

    return (
        <div id="AddModal" onClick={toggleAddingKudo}>
            <form id='AddModalContent' action={handleSubmit} onClick={(event) => {event.stopPropagation()}}>
                <h1>Create New Kudo</h1>
                <input name='title' placeholder='Enter kudo title' required />
                <input name='description' placeholder='Description' required />
                <div className='gifSearchResults'>
                    { isDisplayingGIFs &&
                        gifSearchResults.map((gif) => {
                            return (
                                <video className='gifEmbedModal' key={gif.id}
                                    src={gif.images.preview.mp4} 
                                    onClick={() => setGifURL(gif.images.preview.mp4)} 
                                    autoPlay loop
                                >
                                </video>
                            )
                        })
                    }
                </div>
                <input value={gifSearchContent} onChange={handleSearchChange} placeholder='Search GIFs...' />
                <button onClick={handleGIFSearch}>Search</button>
                <input name='gifURL' value={gifURL} onChange={handleURLChange} placeholder='GIF URL' required />
                <input name='owner' placeholder='Owner (optional)' />
                <button>Create</button>
            </form>
        </div>
    )
}

export default AddKudo;