import React from 'react';
import axios from 'axios';

// eslint-disable-next-line import/no-named-as-default
import QAContainer from './QAContainer';
import LoadMoreAnswers from './LoadMoreAnswers';

const { API_KEY } = require('../../../../config');

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: 61577,
      questionList: [],
      searchText: '',
    };
    this.fetchQuestions = this.fetchQuestions.bind(this);
  }

  componentDidMount() {
    this.fetchQuestions();
  }

  fetchQuestions() {
    const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions';
    const { currentProductId } = this.state;

    const params = {
      product_id: currentProductId,
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
        this.setState({ questionList: res.data.results });
      });
  }

  render() {
    const { questionList } = this.state;
    return (
      <div className="question-list">
        {
        questionList.length === 0
          ? (<div>No Questions for this Product</div>) : questionList.map((question) => (
            <QAContainer key={question.question_id} question={question} />
          ))
        }
        <LoadMoreAnswers />
      </div>
    );
  }
}

export default QuestionsList;
