import axios from 'axios'

const KEY = 'AIzaSyB6fnfcyi0ZO2dqGyPGCtmhBmPOOAeOTWE'
/*
    when connecting to a secure API I'd put this in a .env file,
    however since this is a publicly available youtube key I'm putting it in my code
*/
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        
        // edit the max results param for more sidebar videos
        maxResults: 5,
        
        //this is normally stored in .env file excluded in .gitignore
        key: KEY
    }
})