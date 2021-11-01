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
      currentProductId: 61579,
      questionList: [],
      nList: 2,
      // searchText: '',
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
    const { questionList, nList } = this.state;
    return (
      <div data-testid="questions-list" className="question-list">
        &lt;Questions List Container&gt;
        {
        questionList.length === 0
          ? (<div>No Questions for this Product</div>)
          : questionList.slice(0, nList).map((question) => (
            <QAContainer key={question.question_id} question={question} />
          ))
        }
        <LoadMoreAnswers click={() => this.setState({ nList: nList + 2 })} />
      </div>
    );
  }
}

export default QuestionsList;

//   "question": {
//     "question_id": 533233,
//     "question_body": "Where does this product ship from?",
//     "question_date": "2017-11-04T00:00:00.000Z",
//     "asker_name": "toofast",
//     "question_helpfulness": 17,
//     "reported": false,
//     "answers": {
//       "4996635": {
//         "id": 4996635,
//         "body": "Mine was delivered from Oklahoma",
//         "date": "2017-11-04T00:00:00.000Z",
//         "answerer_name": "toofast",
//         "helpfulness": 14,
//         "photos": "[]"
//       },
