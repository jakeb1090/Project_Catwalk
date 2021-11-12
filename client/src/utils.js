/* eslint-disable arrow-body-style */
import axios from 'axios';
import API_KEY from '../config';

const headers = { headers: { Authorization: API_KEY } };

console.log(headers);

const getPaginatedProducts = (page, count) => axios.get(`/products/?page=${page}&count=${count}`, headers);

const getProduct = (id) => axios.get(`/products/${id}`, headers);

const getProductStyles = (id) => axios.get(`/products/${id}/styles`, headers);

const getProductRelated = (id) => axios.get(`/products/${id}/related`, headers);

const getReviewsMeta = (id) => axios.get(`/reviews/meta/?id=${id}`, headers);

const getProductQuestions = (id, cb) => {
  axios.get(`/products/questions/?${id}`, headers)
    .then((response) => { cb(null, response.data); })
    .catch((err) => { cb(err); });
};

const getAnswers = (questionId) => {
  return axios.get(`/qa/${questionId}/answers`, headers);
};

const getQuestions = (productId, count) => {
  return axios.get(`/qa/questions/${productId}/?count=${count}`, headers);
};

const addQuestion = (questionBody) => {
  return axios.post('/qa/questions', { questionBody }, headers);
};

const addAnswer = (questionId, answerBody) => {
  return axios.post(`/qa/${questionId}/answers`, answerBody, headers);
};

const markQuestionHelpful = (questionId) => {
  return axios.put(`/qa/questions/${questionId}/helpful`, headers);
};

const markAnswerHelpful = (answerId) => {
  return axios.put(`/qa/answers/${answerId}/helpful`);
};

const reportQuestion = (questionId) => {
  return axios.put(`/qa/questions/${questionId}/report`, headers);
};

const reportAnswer = (answerId) => {
  return axios.put(`/qa/answers/${answerId}/report`, headers);
};

export {
  getPaginatedProducts,
  getProduct,
  getProductStyles,
  getProductRelated,
  getReviewsMeta,
  getProductQuestions,
  getAnswers,
  addQuestion,
  addAnswer,
  markQuestionHelpful,
  markAnswerHelpful,
  reportQuestion,
  reportAnswer,
  getQuestions,
};
