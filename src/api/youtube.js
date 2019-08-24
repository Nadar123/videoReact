import axios from "axios";


const KEY = 'AIzaSyClbF5wtvbik4dsD27mdUBvTqr0hohn2XU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        

    }

})