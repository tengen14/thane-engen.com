import axios from 'axios';

export default axios.create({
    baseURL: 'http://thane-engen.com:5000'
});