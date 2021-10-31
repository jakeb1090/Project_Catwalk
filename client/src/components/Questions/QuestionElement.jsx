<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> aabc142 (Added test buttons for API requests)
import PropTypes from 'prop-types';

// key={question.question_id}
// body={question.question_body}
// asker={question.asker_name}
// helpfulness={question.question_helpfulness}
// id={question.question_id}
// reported={question.reported}
// answers={question.answers}

<<<<<<< HEAD
// { answerer_name, body, date, helpfulness, id, photos }

const QuestionElement = (props) => {
  const {
    body, asker, helpfulness, id, reported,
  } = props;

  return (
    <li className="question-element" key={id}>
      <div>
        <b>Q... </b>
        { body }
        { asker }
        { helpfulness }
        { reported }
        {

        }
      </div>
    </li>
  );
};

QuestionElement.defaultProps = {
  body: 'cool shirt ',
=======
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
>>>>>>> aabc142 (Added test buttons for API requests)
  asker: 'rick',
  helpfulness: 4,
  id: 43333,
  reported: false,
<<<<<<< HEAD
};

=======
  answers: { product1: 'answer1', product2: 'answer2' },
};
>>>>>>> aabc142 (Added test buttons for API requests)
QuestionElement.propTypes = {
  body: PropTypes.string,
  asker: PropTypes.string,
  helpfulness: PropTypes.number,
  id: PropTypes.number,
  reported: PropTypes.bool,
<<<<<<< HEAD
=======
  answers: PropTypes.object,
>>>>>>> aabc142 (Added test buttons for API requests)
};

export default QuestionElement;
