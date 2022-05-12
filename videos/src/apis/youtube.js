import axios from 'axios';

const KEY = 'AIzaSyB9QWJjs5gKwOskvswiZ4EufilzzqWQN3Y';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});