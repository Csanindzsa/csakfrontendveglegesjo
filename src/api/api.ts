import axios from 'axios';
import { BASE_URL } from '../utils/backend-conf';

export default axios.create({
    baseURL: BASE_URL
});


export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'application/json'},
    withCredentials: true,
});