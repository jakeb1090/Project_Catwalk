import React from 'react';
import PropTypes from 'prop-types';
import AnswerElement from './AnswerElement';

const AnswerInnerList = (props) => {
  const { answers } = props;
  const keys = Object.keys(answers);

  return (
    <div data-testid="answer-inner-list" className="answer-inner-list">
      A:
      {
        keys.map((key) => <AnswerElement key={key} data={answers[key]} />)
      }
    </div>
  );
};

AnswerInnerList.defaultProps = {
  answers: {},
};

AnswerInnerList.propTypes = {
  answers: PropTypes.objectOf(PropTypes.object),
};

export default AnswerInnerList;
