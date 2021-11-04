import React from 'react';
// eslint-disable-next-line import/no-named-as-default
// import PropTypes from 'prop-types';
import QAContainer from './QAContainer';

// props.currentProductId
class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: 61601,
      // questionList: [],
      // searchText: '',
    };
  }

  render() {
    const { currentProductId } = this.state;
    const {
      questionsN, answersN, loadMoreAnswers, questionList, currentSearch,
    } = this.props;
    let outputList = [];

    const filteredList = questionList.filter((question) => {
      return question.question_body.toLowerCase().includes(currentSearch.toLowerCase());
    });

    currentSearch.length >= 3
      ? outputList = filteredList
      : outputList = questionList;

    return (
      <div data-testid="questions-list" className="question-list">
        &lt;Questions List Container&gt;
        {
        outputList.slice(0, questionsN).length === 0
          ? (<div className="error-text">No Matching Questions for this Product</div>)
          : outputList.slice(0, questionsN).map((nQuestion) => (
            <QAContainer
              key={nQuestion.question_id}
              question={nQuestion}
              answersN={answersN}
              currentProduct={currentProductId}
            />
          ))
        }

        {
          answersN !== null
            ? <input type="button" value="LOAD MORE ANSWERS" onClick={() => { loadMoreAnswers(); }} />
            : <div />
        }

      </div>
    );
  }
}

// QuestionsList.propTypes = {
//   currentSearch: PropTypes.string.isRequired,
// };

export default QuestionsList;
