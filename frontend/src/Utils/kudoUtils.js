// TODO UNCOMMENT WHEN PUSHING const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'
const baseUrl = 'http://localhost:3000';

// Leverage axios to help with more complex requests
import axios from 'axios'

export const loadKudos = (boardID, setKudos) => {
    fetch(`${baseUrl}/boards/${boardID}`)
        .then((res) => res.json())
        .then((kudos) => {setKudos(kudos); console.log(kudos)})
}