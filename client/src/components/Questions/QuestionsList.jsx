import React from 'react';
import axios from 'axios';
// eslint-disable-next-line import/no-named-as-default
// import PropTypes from 'prop-types';
import QAContainer from './QAContainer';
import LoadMoreAnswers from './LoadMoreAnswers';

const { API_KEY } = require('../../../config');

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: 61579,
      questionList: [],
      nList: 2,
      // searchText: '',
    };
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
        // eslint-disable-next-line react/no-unused-state
        this.setState({ questionList: res.data.results });
      });
  }

  render() {
    const { nList, questionList } = this.state;

    return (
      <div data-testid="questions-list" className="question-list">
        &lt;Questions List Container&gt;
        {
        questionList.length === 0
          ? (<div>No Questions for this Product</div>)
          : questionList.slice(0, nList).map((nQuestion) => (
            <QAContainer key={nQuestion.question_id} question={nQuestion} />
          ))
        }
        <LoadMoreAnswers click={() => this.setState({ nList: nList + 2 })} />
      </div>
    );
  }
}

// QuestionsList.propTypes = {
//   currentSearch: PropTypes.string.isRequired,
// };

export default QuestionsList;
