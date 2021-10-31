/* eslint-disable react/no-unused-state */
import React from 'react';
import GetProducts from './GetProducts';
import GetQuestions from './GetQuestions';
import GetAnswers from './GetAnswers';
import AddQuestion from './AddQuestion';
import AddAnswer from './AddAnswer';
import QuestionsList from './QuestionsList';
import SearchQuestions from './SearchQuestions';
import QAContainer from './QAContainer';

class QuestionsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionId: 38,
      searchText: '',
    };
  }

  render() {
    return (
      <div>
        <div className="test-components">
          <GetProducts />
          <GetQuestions />
          <GetAnswers />
          <AddQuestion />
          <AddAnswer />

          <SearchQuestions />
        </div>
        <div className="questions-widget">
          <SearchQuestions updateSearch={(input) => this.setState({ searchText: input })} />
          <QuestionsList />
          <div className="button-container">
            {/* <GetAnswers />
            <AddQuestion /> */}
            <QAContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionsContainer;
