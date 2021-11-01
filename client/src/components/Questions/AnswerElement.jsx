import React from 'react';

const AnswerElement = (props) => {
  const {
    answerer_name: answererName,
    body,
    date,
    helpfulness,
    id,
    photos,
  } = props.data;

  return (
    <div className="answerElement" key={id}>
      <div>{ body }</div>
      <div>
        <span>
          by
          {' '}
          {' '}
          { answererName }
          ,
          {' '}
          {' '}
          { date.slice(0, 10) }
          {' '}
          {' '}
          |
          {' '}
          {' '}
          Helpful?
          Yes
          (
          {helpfulness}
          )
          {' '}
          {' '}
          |
          {' '}
          {' '}
          Report
        </span>
      </div>
    </div>
  );
};

// AnswerElement.propTypes = {
//   body: propTypes
// };

export default AnswerElement;
