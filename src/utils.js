import axios from 'axios';

const omdb = axios.create({
    baseURL:"http://www.omdbapi.com/",
    timeout: 15000,
    params: {
        apikey:"e09df99a"
    }
});


export {omdb};