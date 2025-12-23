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

function createCartItem({ id, name, price, imageUrl }) {
  return instance.post('/carts', {
    id: id,
    name, // 객체 키:value 값이 같으면 축약형으로 작성이 가능하다.
    price,
    imageUrl,
  });
}

function fatchCarts() {
  return instance.get('/carts');
}

function removeCartItem(id) {
  return instance.delete(`/carts/${id}`);
}

export {
  fatchProducts,
  fatchProductItem,
  createCartItem,
  fatchCarts,
  removeCartItem,
};
