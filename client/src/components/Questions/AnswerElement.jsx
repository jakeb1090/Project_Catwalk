import React from 'react';

const AnswerElement = (props) => {
  const {
    answerer_name: answererName,
    body,
    date,
    helpfulness,
    id,
    photos,
  }

  return (
    <div className="answerElement">
      { body }
      { answererName }
    </div>
  );
};

export default AnswerElement;

