/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

// { answerer_name, body, date, helpfulness, id, photos }
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
    <li data-testid="question-element" className="question-element">

      <div className="question-body">
        Q:
        {' '}
        { questionBody }
      </div>
      <div className="question-interation">
        Helpful? Yes{ questionHelpfulness } | Add Answer
      </div>

    </li>
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
