import axios from 'axios';

const BASE_URL = 'http://localhost:2222/api';

const defaultAPI = axios.create({ baseURL: BASE_URL });

export default defaultAPI;
