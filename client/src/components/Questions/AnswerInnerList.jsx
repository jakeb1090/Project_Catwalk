import React from 'react';
import PropTypes from 'prop-types';
import AnswerElement from './AnswerElement';

const AnswerInnerList = (props) => {
  // const [ answersN, setAnswersN ] = useState(2);
  const { answers, answersN } = props;
  const keys = Object.keys(answers);
  // let sorted = {};

  return (
    <div data-testid="answer-inner-list" className="answer-inner-list">
      A:
      {
        answersN !== null
          ? keys.slice(0, answersN).map((key) => <AnswerElement key={key} data={answers[key]} />)
          : keys.map((key) => <AnswerElement key={key} data={answers[key]} />)
      }
    </div>
  );
};

AnswerInnerList.defaultProps = {
  answers: {},
  answersN: null,
};

AnswerInnerList.propTypes = {
  answers: PropTypes.objectOf(PropTypes.object),
  answersN: PropTypes.number,
};

export default AnswerInnerList;
