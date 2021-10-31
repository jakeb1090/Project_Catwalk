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

const AnswerElement = (props) => {
  const {
    answererName, body, helpfulness, id,
  } = props;

  return (
    <li className="question-element" key={id}>
      <div>
        <b>A... </b>
        { answererName }
        { body }
        {/* { date } */}
        { helpfulness }
        { id }
      </div>
    </li>
  );
};

AnswerElement.defaultProps = {
  answererName: 'person',
  body: 'answer is yes',
  // date: new Date(),
  helpfulness: 0,
  id: 0,
};

AnswerElement.propTypes = {
  answererName: PropTypes.string,
  body: PropTypes.string,
  // date: PropTypes.instanceOf(Date),
  helpfulness: PropTypes.number,
  id: PropTypes.number,

};

export default AnswerElement;
