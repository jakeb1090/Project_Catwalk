import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  getAnswers,
  addQuestion,
  addAnswer,
  markAnswerHelpful,
  reportQuestion,
  reportAnswer,
} from '../../utils';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  margin-left: 10px;
  color: darkslategray;
`;

const Interactive = styled.span`
  color: gray;
  padding-top: 14px;

  span {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const AnswerElement = ({ data }) => {
  const {
    answerer_name: answererName,
    body,
    date,
    helpfulness,
    id,
    photos,
  } = data;

  const formattedDate = date.slice(0, 10);

  const handleHelpful = () => {
    markAnswerHelpful(id)
      .then((res) => {
        console.log(res, res.status, 'success');
      })
      .catch((error) => {
        console.log(error.status, 'error');
      });
  };

  const handleReport = () => {
    reportAnswer(id)
      .then((res) => {
        console.log(res, res.status);
      })
      .catch((error) => {
        console.log(error.status, 'error');
      });
  };

  return (
    <div data-testid="answer-element" className="answerElementx" key={id}>
      <Body>
        <div>{ body }</div>
        <div>
          <div>
            {
              photos.length
                ? photos.map((img) => <img key={img} className="img" src={img.url} alt="cool" />)
                : <span />
            }
          </div>
          <span>
            <Interactive>
              by&nbsp;
              {answererName}
              ,&nbsp;
              {formattedDate}
              &nbsp;
              |&nbsp;&nbsp;Helpful?&nbsp;
              <span aria-hidden="true" role="link" onClick={handleHelpful}>Yes</span>
              (
              { helpfulness }
              )
              &nbsp;|&nbsp;&nbsp;
              <span aria-hidden="true" role="link" onClick={handleReport}>Report</span>
              &nbsp;
            </Interactive>
          </span>
        </div>
      </Body>
    </div>
  );
};

AnswerElement.defaultProps = {
  data: {},
  answerer_name: 'default_person',
  body: 'default_answer',
  date: 'default_data',
  helpfulness: 99,
  id: 9999,
  photos: ['array', 'of things'],
};

AnswerElement.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  answerer_name: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.string,
  helpfulness: PropTypes.number,
  id: PropTypes.number,
  photos: PropTypes.arrayOf(PropTypes.string),
};

export default AnswerElement;
