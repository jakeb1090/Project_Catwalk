/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import API_KEY from '../../../config';
import QuestionsList from './QuestionsList';
import SearchQuestions from './SearchQuestions';
import ModalAddQuestion from './ModalAddQuestion';

// props: currentProduct

class QuestionsMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionList: [],
      searchText: '',
      questionsN: 2,
      answersN: 2,
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.updateAnswersN = this.updateAnswersN.bind(this);
    this.fetchQuestions = this.fetchQuestions.bind(this);
  }

  componentDidMount() {
    const { currentProduct } = this.props;
    this.fetchQuestions(currentProduct);
  }

  componentDidUpdate(prevProps) {
    const { currentProduct } = this.props;
    if (prevProps.currentProduct !== currentProduct) {
      this.fetchQuestions(currentProduct);
    }
  }

  fetchQuestions(productId) {
    const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/';
    const params = {
      product_id: productId,
      count: 10,
    };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: API_KEY,
    };
    axios.get(url, { params, headers })
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
    const {
      currentProduct,
      TextButton,
      BorderedButton,
      WidgetTitle,
    } = this.props;

    const {
      searchText,
      questionsN,
      answersN,
      questionList,
    } = this.state;

    return (
      <div>
        <div className="test-components" />
        <div data-testid="questions-widget" className="questions-widget" style={{ zIndex: 1400 }}>
          <SearchQuestions updateSearch={this.updateSearch} />
          <QuestionsList
            currentProductId={currentProduct}
            currentSearch={searchText}
            questionsN={questionsN}
            answersN={answersN}
            loadMoreAnswers={this.updateAnswersN}
            questionList={questionList}
            onFetchQuestions={this.fetchQuestions}
            TextButton={TextButton}
            BorderedButton={BorderedButton}
            WidgetTitle={WidgetTitle}
          />
          <div className="button-container">

            {
                questionsN < questionList.length
                  ? (
                    <BorderedButton
                      type="button"
                      value="More Answered Questions"
                      onClick={(prevState) =>
                        // eslint-disable-next-line implicit-arrow-linebreak
                        this.setState({ ...prevState, questionsN: questionsN + 2 })}
                    >
                      More Answered Questions
                    </BorderedButton>
                  )
                  : <div />
              }
            <ModalAddQuestion
              currentProduct={currentProduct}
              BorderedButton={BorderedButton}
              appElement="app"
            />
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
