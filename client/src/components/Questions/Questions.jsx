import React from 'react';
import QuestionsMain from './QuestionsMain';

const Questions = ({currentProduct}) => (
  <div data-testid="questions" className="questions">
    Questions/Answers widget...
    <QuestionsMain
      // currentProduct={currentProduct}
      currentProduct={61602}
    />
  </div>
);

export default Questions;
