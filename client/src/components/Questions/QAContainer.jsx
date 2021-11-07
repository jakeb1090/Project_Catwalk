/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import QuestionElement from './QuestionElement';
import AnswerInnerList from './AnswerInnerList';
import { getAnswers } from '../../utils';

// const QAContainer = (props) => {
class QAContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
    };
  }

  componentDidMount() {
    const { question: { question_id: questionId } } = this.props;
    getAnswers(questionId)
      .then((res) => {
        this.setState({ answers: res.data });
      })
      .catch((err) => {
        this.setState([{ status: err }]);
      });
  }

  render() {
    const {
      question, answersN, questionsN, loadMoreAnswers, currentProduct,
    } = this.props;
    const { answers } = this.state;

    return (
      <div data-testid="qa-container" className="qa-container">
        &lt;QA container&gt;
        <QuestionElement
          key={question.question_id}
          questionData={question}
          currentProduct={currentProduct}
        />
        <AnswerInnerList
          answers={answers}
          answersN={answersN}
          loadMoreAnswers={loadMoreAnswers}
          questionsN={questionsN}
          currentProduct={currentProduct}
        />
      </div>
    );
  }
}

QAContainer.defaultProps = {
  // questionsN: 2,
//   question: {},
//   answers: {},
//   // question_id:
};

QAContainer.propTypes = {
  // questionsN: PropTypes.number,
//   question: PropTypes.objectOf(PropTypes.object),
//   answers: PropTypes.objectOf(PropTypes.object),
//   question_id: PropTypes.number.isRequired,
};

export default QAContainer;
