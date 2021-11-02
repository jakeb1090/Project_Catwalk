import React from 'react';

const GetMoreQuestions = () => {
  const handleClick = () => { console.log('clicked'); };

  return (
    <div data-testid="more-questions">
      <input onClick={handleClick} type="button" value="more questions..." />
    </div>
  );
};

export default GetMoreQuestions;
