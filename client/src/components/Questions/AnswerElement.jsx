import React from 'react';

const AnswerElement = (props) => {
  const {
    answerer_name: answererName,
    body,
    date,
    helpfulness,
    id,
    photos,
  } = props;

  return (
    <div className="answerElement" key={id}>
      answer##
      { body }
      { answererName }
    </div>
  );
};

// AnswerElement.propTypes = {
//   body: propTypes
// };

export default AnswerElement;
