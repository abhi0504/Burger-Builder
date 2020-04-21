import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-burger-builder-7e8b2.firebaseio.com/'
});

export default instance;
