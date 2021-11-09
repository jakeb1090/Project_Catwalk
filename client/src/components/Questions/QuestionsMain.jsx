/* eslint-disable react/no-unused-state */
import React from 'react';
import axios from 'axios';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import API_KEY from '../../../config';
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
      searchText: '',
      questionsN: 2,
      answersN: 2,
      questionListLength: 0,
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.updateAnswersN = this.updateAnswersN.bind(this);
    this.fetchQuestions = this.fetchQuestions.bind(this);
  }

  componentDidMount() {
    const { currentProduct } = this.props;
    this.fetchQuestions(currentProduct);
  }

  fetchQuestions(productId) {
    const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/';

    const params = {
      product_id: productId,
      // page: 2,
      count: 10,
    };

    const headers = {
      'Content-Type': 'application/json',
      Authorization: API_KEY,
    };

    const config = { params, headers };

    axios.get(url, config)
      .then((res) => {
        // eslint-disable-next-line react/no-unused-state
        this.setState({ questionList: res.data.results });
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
            onFetchQuestions={this.fetchQuestions}
          />
          <div className="button-container">

            {
              questionsN < questionList.length
                ? (
                  <input
                    type="button"
                    value="More Answered Questions"
                    onClick={(prevState) =>
                      // eslint-disable-next-line implicit-arrow-linebreak
                      this.setState({ ...prevState, questionsN: questionsN + 2 })}
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
