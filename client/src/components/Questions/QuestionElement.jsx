import React from 'react';
import PropTypes from 'prop-types';

// key={question.question_id}
// body={question.question_body}
// asker={question.asker_name}
// helpfulness={question.question_helpfulness}
// id={question.question_id}
// reported={question.reported}
// answers={question.answers}

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
  asker: 'rick',
  helpfulness: 4,
  id: 43333,
  reported: false,
};

QuestionElement.propTypes = {
  body: PropTypes.string,
  asker: PropTypes.string,
  helpfulness: PropTypes.number,
  id: PropTypes.number,
  reported: PropTypes.bool,
};

export default QuestionElement;
