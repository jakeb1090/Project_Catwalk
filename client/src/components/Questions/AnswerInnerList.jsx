import React, { useState } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import AnswerElement from './AnswerElement';

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

  const {
    answers,
    answersN,
    currentProduct,
    questionId,
    onFetchQuestions,
    onFetchAnswers,
  } = props;
  // const keys = Object.keys(answers);

  const sortedAnswers = answers.sort((a, b) => b.helpfulness - a.helpfulness);

  return (
    <div>
      <AnswerContainer data-testid="answer-container">
        <Title>
          <h2>A:</h2>
        </Title>
        <Answers data-testid="answer-list">
          {
            sortedAnswers.map((answer) => (
              <AnswerElement
                amswers={answers}
                data={answer}
                questionId={questionId}
                onFetchQuestions={onFetchQuestions}
                onFetchAnswers={onFetchAnswers}
                key={`AE${answer.answer_id}`}
              />
            ))
          }
        </Answers>
      </AnswerContainer>
    </div>
  );
};

// AnswerInnerList.defaultProps = {
//   answers: [{}, {}],
//   answersN: null,
// };

// AnswerInnerList.propTypes = {
//   answers: PropTypes.arrayOf(PropTypes.object),
//   answersN: PropTypes.number,
// };

export default AnswerInnerList;
