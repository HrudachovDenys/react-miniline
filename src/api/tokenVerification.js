import axios from 'axios';
import config from './config.json';

export default (token) => {
    const options = {
        method: 'POST',
        url: config.server + '/auth/verification',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data: JSON.stringify({ token: token }),
    }
    return axios(options);
}