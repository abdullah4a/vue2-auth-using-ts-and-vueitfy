import axios from 'axios';
import baseConfig from './base.config';

const API = axios.create(baseConfig);
export default API;
