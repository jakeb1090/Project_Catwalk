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
    asker_name: askerName,
    question_body: questionBody,
    question_date: questionDate,
    question_helpfulness: questionHelpfulness,
    question_id: questionId,
    reported,
  } = props.data;

  return (
    <li className="question-element" key={questionId}>
      <div>
        Q:
        {' '}
        { questionBody }
        {/* { askerName }
        { questionDate }
        { questionHelpfulness }
        { questionId }
        { reported } */}
      </div>
    </li>
  );
};

QuestionElement.defaultProps = {
  data: '{}',
  asker_name: 'default_person ',
  question_body: 'default_question ',
  question_date: 'default_date ',
  question_helpfulness: 0,
  question_id: 9999,
  reported: false,
};

QuestionElement.propTypes = {
  data: PropTypes.object,
  asker_name: PropTypes.string,
  question_body: PropTypes.string,
  question_date: PropTypes.string,
  question_helpfulness: PropTypes.number,
  question_id: PropTypes.number,
  reported: PropTypes.bool,

};

export default QuestionElement;
