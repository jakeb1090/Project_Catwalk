/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import QuestionElement from './QuestionElement';
import AnswerInnerList from './AnswerInnerList';

const QAContainer = (props) => {
  const { question } = props;
  const { answers } = question;

  return (
    <div data-testid="qa-container" className="qa-container">
      &lt;QA container&gt;
      <QuestionElement key={question.question_id} questionData={question} />
      <AnswerInnerList answers={answers} />
    </div>
  );
};

// QAContainer.defaultProps = {
//   question: {},
//   answers: {},
//   // question_id:
// };

// QAContainer.propTypes = {
//   question: PropTypes.objectOf(PropTypes.object),
//   answers: PropTypes.objectOf(PropTypes.object),
//   question_id: PropTypes.number.isRequired,
// };

export default QAContainer;
