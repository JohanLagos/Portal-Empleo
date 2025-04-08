import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/', // cambia si tu backend está en otra URL
});

export default api;