import axios from 'axios';
import config from '../config';

class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getCompanies() {
    return axios.get(`${this.baseUrl}`);
  }

  getCompany({ _id }) {
    return axios.get(`${this.baseUrl}?_id=${_id}`);
  }

  addCompany() {
    return axios.get(`${this.baseUrl}`);
  }

  updateCompany() {
    return axios.get(`${this.baseUrl}`);
  }

  deleteCompany() {
    return axios.get(`${this.baseUrl}`);
  }
}

const api = new Api(config.api_url);

export default api;
