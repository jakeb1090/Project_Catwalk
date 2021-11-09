import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AnswerElement from './AnswerElement';
import { getProductQuestions,
  getAnswers,
  addQuestion,
  addAnswer,
  markQuestionHelpful,
  markAnswerHelpful,
  reportQuestion,
  reportAnswer,
} from '../../utils';

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  a {
    color: gray;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  color: dimgray;
  justify-content: flex-start;
`;

const Answers = styled.div`
  display: flex;
  flex-direction: column;

`;

const AnswerInnerList = (props) => {
  const [answerArray, setAnswerArray] = useState([]);
  const { answers, answersN, currentProduct } = props;
  const keys = Object.keys(answers);

  return (
    <div>
      <AnswerContainer data-testid="answer-container">
        <Title>
          <h2>A:</h2>
        </Title>
        <Answers data-testid="answer-list">
          {
          answersN !== null
            ? keys.slice(0, answersN).map((key) => <AnswerElement key={key} data={answers[key]} />)
            : keys.map((key) => <AnswerElement key={key} data={answers[key]} />)
          }
        </Answers>
      </AnswerContainer>
    </div>
  );
};

AnswerInnerList.defaultProps = {
  answers: {},
  answersN: null,
};

AnswerInnerList.propTypes = {
  answers: PropTypes.objectOf(PropTypes.object),
  answersN: PropTypes.number,
};

export default AnswerInnerList;
