// const { default: axios } = require('axios');
import axios from 'axios';

const instance = axios.create({
  baseURL: `http://localhost:4000`,
});

function fatchProducts() {
  return instance.get('/products');
}

function fatchProductItem(id) {
  return instance.get(`/products/${id}`);
}

export { fatchProducts, fatchProductItem };
