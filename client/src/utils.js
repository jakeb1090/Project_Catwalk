/* eslint-disable arrow-body-style */
import axios from 'axios';
import API_KEY from '../config';

const headers = { headers: { Authorization: API_KEY } };

const getPaginatedProducts = (page, count) => {
  return axios.get(`/products/?page=${page}&count=${count}`, headers);
};

const getProduct = (id) => {
  return axios.get(`/products/${id}`, headers);
};

const getProductStyles = (id) => {
  return axios.get(`/products/${id}/styles`, headers);
};

const getProductRelated = (id) => {
  return axios.get(`/products/${id}/related`, headers);
};

const getReviewsMeta = (id) => {
  return axios.get(`/reviews/meta/?id=${id}`, headers);
};

const getProductQuestions = (id, cb) => {
  axios.get(`/products/questions/?${id}`, headers)
    .then((response) => { cb(null, response.data); })
    .catch((err) => { cb(err); });
};

const getAnswers = (questionId) => {
  return axios.get(`/qa/${questionId}/answers`, headers);
};

const addQuestion = (questionBody) => {
  return axios.post('/qa/questions', questionBody, headers);
};

const addAnswer = (questionId, answerBody) => {
  return axios.post(`/qa/${questionId}/answers`, answerBody, headers);
};

const markQuestionHelpful = (questionId) => {
  return axios.put(`/qa/question/${questionId}/helpful`, headers);
};

const markAnswerHelpful = (answerId) => {
  return axios.put(`/qa/answer/${answerId}/helpful`, headers);
};

// const reportQuestion = (questionId) => {
//   return axios.put(`/`)
// };

const reportAnswer = (answerId) => {
  return axios.put(`/qa/answer/${answerId}/report`);
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
  // reportQuestion,
  reportAnswer,
};
