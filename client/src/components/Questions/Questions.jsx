import React from 'react';
import PropTypes from 'prop-types';
import QuestionsMain from './QuestionsMain';

const Questions = ({
  currentProduct,
  textButton,
  borderedButton,
}) => (
  <div data-testid="questions" className="questions">
    <QuestionsMain
      // currentProduct={currentProduct}
      currentProduct={currentProduct}
      textButton={textButton}
      borderedButton={borderedButton}
    />
  </div>
);

Questions.propTypes = {
  currentProduct: PropTypes.number.isRequired,
  textButton: PropTypes.number.isRequired,
  borderedButton: PropTypes.number.isRequired,
};

export default Questions;
