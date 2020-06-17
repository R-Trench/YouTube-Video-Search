import axios from 'axios'

const KEY = 'AIzaSyB6fnfcyi0ZO2dqGyPGCtmhBmPOOAeOTWE'

//key is listed in code because users need to access it.
//this should never be the case when connecting with a secure api

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})