import React, { useState } from 'react';
import PropTypes from 'prop-types';

// key={question.question_id}
// body={question.question_body}
// asker={question.asker_name}
// helpfulness={question.question_helpfulness}
// id={question.question_id}
// reported={question.reported}
// answers={question.answers}

const QuestionElement = ({
  body, asker, helpfulness, id, reported, answers
}) => (
  <li className="question-element" key={id}>
    <span>
      <b>Q... </b>
      {body}
      {asker}
      {helpfulness}
      {reported}
    </span>
  </li>
);

QuestionElement.defaultProps = {
  body: 'cool shirt',
  asker: 'rick',
  helpfulness: 4,
  id: 43333,
  reported: false,
  answers: { product1: 'answer1', product2: 'answer2' },
};
QuestionElement.propTypes = {
  body: PropTypes.string,
  asker: PropTypes.string,
  helpfulness: PropTypes.number,
  id: PropTypes.number,
  reported: PropTypes.bool,
  answers: PropTypes.object,
};

export default QuestionElement;
