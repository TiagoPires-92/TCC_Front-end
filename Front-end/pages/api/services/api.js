import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tccback-end.tiagopires-92.repl.co',
})

export default api;