import React from 'react';
// eslint-disable-next-line import/no-named-as-default
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QAContainer from './QAContainer';

// props.currentProductId
const QList = styled.div`
  display: flex;
  flex-direction: column;
  height: 550px;
  overflow: auto;
`;

const Input = styled.div`
  width: 200px;
`;

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: 61601,
      // searchText: '',
    };
  }

  render() {
    const { currentProductId } = this.state;
    const {
      questionsN, answersN, loadMoreAnswers, questionList, currentSearch,
    } = this.props;
    let outputList = [];

    const sortedList = questionList.sort((b, a) => a.question_helpfulness - b.question_helpfulness);

    const filteredList = sortedList.filter((question) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      question.question_body.toLowerCase().includes(currentSearch.toLowerCase()),
      // eslint-disable-next-line function-paren-newline
    );

    // eslint-disable-next-line no-unused-expressions
    currentSearch.length >= 3
      ? outputList = filteredList
      : outputList = sortedList;

    return (
      <div data-testid="questions-list" className="question-list">
        <QList>
          {/* &lt;Questions List Container&gt; */}
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
          <Input>
            {
              answersN !== null
                ? <input type="button" value="LOAD MORE ANSWERS" onClick={() => { loadMoreAnswers(); }} />
                : <span />
            }
          </Input>
        </QList>
      </div>
    );
  }
}

QuestionsList.defaultProps = {
  answersN: 4,
};

QuestionsList.propTypes = {
  currentSearch: PropTypes.string.isRequired,
  questionsN: PropTypes.number.isRequired,
  answersN: PropTypes.number,
  loadMoreAnswers: PropTypes.func.isRequired,
  questionList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default QuestionsList;
