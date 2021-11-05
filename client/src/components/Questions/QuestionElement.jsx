/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

// { answerer_name, body, date, helpfulness, id, photos }

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px;
  justify-content: space-between;
  align-items: flex-start;
  color: slategray;

  a {
    color: slategray;
  }
`;

const QuestionInteraction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  color: slategray;
`;

const QuestionBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  color: dimgray;
  width: 620px;
`;

const QuestionElement = ({ questionData }) => {
  const {
    question_body: questionBody,
    question_helpfulness: questionHelpfulness,
    // question_id: questionId,
    // asker_name: askerName,
    // question_date: questionDate,
    // reported,
  } = questionData;

  return (
    <div>
      <QuestionContainer>
        <QuestionBody>
          <h2>{`Q: ${questionBody} `}</h2>
        </QuestionBody>
        <QuestionInteraction>
          Helpful?&nbsp;&nbsp;
          <a href="/localhost:3000">Yes</a>
          &nbsp;
          {`(${questionHelpfulness}) | `}
          &nbsp;
          <a href="http://www.ee.com">
            Add Answer&nbsp;
          </a>
        </QuestionInteraction>
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
