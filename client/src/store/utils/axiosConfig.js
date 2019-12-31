import axios from 'axios';
const url = 'http://localhost:3333'

export const axiosWithNoAuth = () => axios.create({baseURL: url});
