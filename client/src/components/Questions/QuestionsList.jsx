import React from 'react';
// eslint-disable-next-line import/no-named-as-default
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QAContainer from './QAContainer';

// props.currentProductId

const QList = styled.div`
display: flex;
flex-direction: column;
max-height: 550px;
overflow: scroll;
font-family: "arial", "monospace";
margin-top: 30px;
overflow-x: hidden
`;

const Input = styled.div`
  min-width: 50%;
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
      questionsN,
      answersN,
      loadMoreAnswers,
      questionList,
      currentSearch,
      onFetchQuestions,
      BorderedButton,
      TextButton,
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
                onFetchQuestions={onFetchQuestions}
              />
            ))
          }
          <Input>

            {
              answersN !== null
                ? (
                  <BorderedButton
                    onClick={() => { loadMoreAnswers(); }}
                  >
                    Load More Answers
                  </BorderedButton>
                )
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
  questionList: [],
};

QuestionsList.propTypes = {
  onFetchQuestions: PropTypes.func.isRequired,
  currentSearch: PropTypes.string.isRequired,
  questionsN: PropTypes.number.isRequired,
  answersN: PropTypes.number,
  loadMoreAnswers: PropTypes.func.isRequired,
  questionList: PropTypes.arrayOf(PropTypes.object),
};

export default QuestionsList;
