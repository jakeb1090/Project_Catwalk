/* eslint-disable react/no-unused-state */
import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getQuestions, getAnswers } from '../../utils';
import AddQuestion from './AddQuestion';
import QuestionsList from './QuestionsList';
import SearchQuestions from './SearchQuestions';

// props: currentProduct

class QuestionsMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionId: 38,
      currentProduct: 0,
      questionList: [],
      answerList: [],
      searchText: '',
      questionsN: 2,
      answersN: 2,
      questionListLength: 0,
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.updateAnswersN = this.updateAnswersN.bind(this);
  }

  componentDidMount() {
    const { currentProduct } = this.props;
    this.setState({ currentProduct });
    getQuestions(currentProduct, 12)
      .then((res) => {
        this.setState({ questionList: res.data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateSearch(input) {
    this.setState({ searchText: input });
  }

  updateAnswersN() {
    this.setState({ answersN: null });
  }

  render() {
    const { currentProduct } = this.props;
    const {
      searchText,
      questionsN,
      answersN,
      questionList,
    } = this.state;

    return (
      <div>
        <div className="test-components" />
        <div data-testid="questions-widget" className="questions-widget">
          <SearchQuestions updateSearch={this.updateSearch} />
          <QuestionsList
            currentProductId={currentProduct}
            currentSearch={searchText}
            questionsN={questionsN}
            answersN={answersN}
            loadMoreAnswers={this.updateAnswersN}
            questionList={questionList}
          />
          <div className="button-container">

            {
              questionsN < questionList.length
                ? (
                  <input
                    type="button"
                    value="More Answered Questions"
                    onClick={(prevState) => {...prevState, questionsN + 2}}
                  />
                )
                : <div />
            }

            <AddQuestion />
          </div>
        </div>
      </div>
    );
  }
}

QuestionsMain.propTypes = {
  currentProduct: PropTypes.number.isRequired,
};

export default QuestionsMain;
