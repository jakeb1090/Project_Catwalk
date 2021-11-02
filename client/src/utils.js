import axios from 'axios';
import API_KEY from '../config';

const headers = { headers: { Authorization: API_KEY } };

const getPaginatedProducts = (page, count) => {
  return axios.get(`/products/?page=${page}&count=${count}`, headers)
};

const getProduct = (id) => {
  return axios.get(`/products/${id}`, headers)
};

const getProductStyles = (id) => {
  return axios.get(`/products/${id}/styles`, headers)
};

const getProductRelated = (id) => {
  return axios.get(`/products/${id}/related`, headers)
};

const getReviewsMeta = (id) => {
  return axios.get(`/reviews/meta/?id=${id}`, headers)
};

export {
  getPaginatedProducts,
  getProduct,
  getProductStyles,
  getProductRelated,
  getReviewsMeta,
};
