import React from 'react';
import PropTypes from 'prop-types';
import QuestionsMain from './QuestionsMain';

const Questions = ({
  currentProduct,
  BorderedButton,
  WidgetTitle,
}) => (
  <div data-testid="questions" className="questions">
    <WidgetTitle>QUESTIONS & ANSWERS</WidgetTitle>
    <QuestionsMain
      // currentProduct={currentProduct}
      currentProduct={currentProduct}
      BorderedButton={BorderedButton}
      WidgetTitle={WidgetTitle}
    />
  </div>
);

Questions.propTypes = {
  currentProduct: PropTypes.number.isRequired,
};

export default Questions;
