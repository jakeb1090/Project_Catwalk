import React from 'react';
import axios from 'axios';

// eslint-disable-next-line import/no-named-as-default
import QuestionElement from './QuestionElement';
import QAContainer from './QAContainer';
import LoadMoreAnswers from './LoadMoreAnswers';

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
      Authorization: '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',
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
          ? (<div />) : questionList.map((question) => (
            <QuestionElement
              key={question.question_id}
              body={question.question_body}
              asker={question.asker_name}
              helpfulness={question.question_helpfulness}
              id={question.question_id}
              reported={question.reported}
              answers={question.answers}
            />
          ))
        }
        <QAContainer />
        <LoadMoreAnswers />
      </div>
    );
  }
}

export default QuestionsList;
