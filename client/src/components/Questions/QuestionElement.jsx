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
const QuestionElement = ({ question }) => {
  const {
    question_body: questionBody,
    question_id: questionId,
    // asker_name: askerName,
    // question_date: questionDate,
    // question_helpfulness: questionHelpfulness,
    // reported,
  } = question;

  return (
    <li data-testid="question-element" className="question-element" key={`000${questionId}`}>
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
  question: {},
  question_id: 99,
  question_body: 'default_question ',
  // data: '{}',
  // asker_name: 'default_person ',
  // question_date: 'default_date ',
  // question_helpfulness: 0,
  // reported: false,
};

QuestionElement.propTypes = {
  question: PropTypes.objectOf(PropTypes.object),
  question_body: PropTypes.string,
  question_id: PropTypes.number,
  // data: PropTypes.object,
  // asker_name: PropTypes.string,
  // question_date: PropTypes.string,
  // question_helpfulness: PropTypes.number,
  // reported: PropTypes.bool,

};

export default QuestionElement;
