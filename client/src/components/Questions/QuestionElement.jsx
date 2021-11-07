/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { markQuestionHelpful, addQuestion } from '../../utils';
// import PropTypes from 'prop-types';

// { answerer_name, body, date, helpfulness, id, photos }

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  align-items: flex-start;
  color: slategray;

  a {
    color: slategray;
  }

`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
`;

const QuestionInteraction = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  color: slategray;

  span {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const TwoThirds = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${'' /* align-items: space-between; */}
`;

const QuestionBody = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  color: dimgray;
  width: 620px;
  margin-left: 10px;
`;

const QuestionElement = ({ questionData, currentProduct }) => {
  const {
    question_body: questionBody,
    question_helpfulness: questionHelpfulness,
    question_id: questionId,
    // asker_name: askerName,
    // question_date: questionDate,
    // reported,
  } = questionData;

  const handleHelpful = () => {
    markQuestionHelpful(questionId)
      .then((response) => {
        console.log('helpfule');
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAddQuestion = () => {
    console.log('added');
    const data = {
      body: 'but are the sleeves organic thought?',
      name: 'Tyler Durden',
      email: 'r123@paper.com',
      product_id: currentProduct,
    };
    addQuestion(data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="question-element" data-testid="question-element">
      <QuestionContainer>
        <Title>
          <h2>Q:</h2>
        </Title>
        <TwoThirds>
          <QuestionBody>
            <h2>{`${questionBody} `}</h2>
          </QuestionBody>
          <QuestionInteraction>
            Helpful?
            &nbsp;&nbsp;
            <span aria-hidden="true" role="link" onClick={handleHelpful}>Yes</span>
            &nbsp;
            {`(${questionHelpfulness}) | `}
            &nbsp;
            <span aria-hidden="true" role="link" onClick={handleAddQuestion}>Add Question</span>
          </QuestionInteraction>
        </TwoThirds>
      </QuestionContainer>
    </div>
  );
};

// QuestionElement.defaultProps = {
//   questionData: {},
//   question_id: 99,
//   question_body: 'default_question ',
// data: '{}',
// asker_name: 'default_person ',
// question_date: 'default_date ',
// question_helpfulness: 0,
// reported: false,
// };

// QuestionElement.propTypes = {
//   questionData: PropTypes.objectOf(PropTypes.object),
// question_body: PropTypes.string.isRequired,
// question_id: PropTypes.number.isRequired,
// data: PropTypes.object,
// asker_name: PropTypes.string,
// question_date: PropTypes.string,
// question_helpfulness: PropTypes.number,
// reported: PropTypes.bool,

// };

export default QuestionElement;
