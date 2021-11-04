/* eslint-disable react/no-unused-state */
import React from 'react';
import axios from 'axios';
// import GetProducts from './GetProducts';
// import GetQuestions from './GetQuestions';
// import AddAnswer from './AddAnswer';
// import button.MoreAnsweredQuestions from './button.MoreAnsweredQuestions';
import AddQuestion from './AddQuestion';
import QuestionsList from './QuestionsList';
import SearchQuestions from './SearchQuestions';
import API_KEY from '../../../config';

//props: currentProduct
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
  }

  componentDidMount() {
    this.fetchQuestions();

  }

  fetchQuestions(productId) {
    const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/';
    const { currentProduct } = this.props;

    const params = {
      product_id: currentProduct,
      // page: 2,
      // count: 22,
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
    this.setState({ answersN: null })
  }

  render() {
    const { currentProduct } = this.props;
    const { searchText, questionsN, answersN, questionList } = this.state;
    return (
      <div>
        <div className="test-components">
          {/* <GetProducts />
          <GetQuestions />
          <GetAnswers />
          <AddQuestion />
          <AddAnswer />
          <SearchQuestions /> */}
        </div>
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
              ?<input
                type="button"
                value="More Answered Questions"
                onClick={() => this.setState({questionsN: questionsN + 2})}
              />
              : <div />
            }

            <AddQuestion />
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionsMain;
