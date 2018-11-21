import axios from 'axios';

const agent = axios.create({
    baseURL: 'https://api.unsplash.com/',
        headers: {
            Authorization:'Client-ID 00e0e5dcc69a4b26cf6bd8596f8d7d1c36011410da6317965bfe690b19a3c597'
        },

});

export default agent;