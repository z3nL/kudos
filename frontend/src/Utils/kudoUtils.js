const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'

const giphyKey = import.meta.env.VITE_GIPHY_API_KEY;

// Leverage axios to help with more complex requests
import axios from 'axios'

// Loads existing kudos corresponding to a board in DB and subsequently updates the kudos state
export const loadKudos = (activeBoardID, setKudos) => {
    fetch(`${baseUrl}/boards/${activeBoardID}`)
        .then((res) => res.json())
        .then((foundKudos) => {setKudos(foundKudos)})
        .catch((error) => {console.log(error)})
}

// Adds a new kudo to the DB and subsequently appends it to the kudos state
export const addKudo = (activeBoardID, newKudoData, kudos, setKudos) => {
    axios.post(`${baseUrl}/boards/${activeBoardID}`, newKudoData)
        .then((createdKudo) => {
            console.log(`Created ${createdKudo.data}`);
            setKudos(kudos.empty ? [createdKudo.data] : [...kudos, createdKudo.data])
        })
        .catch((error) => {console.log(error)})
}

// Deletes a kudo from the DB and subsequently removes it from the kudos state
export const deleteKudo = (activeBoardID, kudoID, kudos, setKudos) => {
    deleteKudoFromDB(activeBoardID, kudoID);
    
    // TODO Same index searching question
    const kudoIDs = kudos.map((kudo) => kudo.kudoID);
    const arrayIndex = kudoIDs.indexOf(kudoID);
    setKudos(kudos.toSpliced(arrayIndex, 1));
}

// Helper function to remove kudo from database
const deleteKudoFromDB = (activeBoardID, kudoID) => {
    fetch(`${baseUrl}/boards/${activeBoardID}/${kudoID}`, {method: 'DELETE'})
        .then((res) => res.json())
        .then((deletedKudo) => console.log(`Deleted ${deletedKudo}`))
        .catch((error) => {console.log(error)})
}

// Increments the vote count of a kudo in DB and reflects this change in kudos state
export const incrementVoteCount = (activeBoardID, kudoID, kudos, setKudos) => {
    fetch(`${baseUrl}/boards/${activeBoardID}/${kudoID}`, {method: 'PUT'})
        .then((res) => res.json())
        .then((updatedKudo) => {
            // TODO Same index searching question
            const kudoIDs = kudos.map((kudo) => kudo.kudoID);
            const arrayIndex = kudoIDs.indexOf(kudoID);
            setKudos(kudos.toSpliced(arrayIndex, 1, updatedKudo))
        })
        .catch((error) => {console.log(error)})
}       

export const searchGIFs = (query, setGifSearchResults) => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&q=${query}&limit=6`)
        .then((res) => res.json())
        .then((response) => { setGifSearchResults(response.data)})
        .catch((error) => {console.log(error)})
}
