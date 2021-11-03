/* eslint-disable react/no-unused-state */
import React from 'react';
// import GetProducts from './GetProducts';
// import GetQuestions from './GetQuestions';
// import AddAnswer from './AddAnswer';
import GetAnswers from './GetAnswers';
import AddQuestion from './AddQuestion';
import QuestionsList from './QuestionsList';
import SearchQuestions from './SearchQuestions';

class QuestionsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionId: 38,
      searchText: '',
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(input) {
    this.setState({ searchText: input });
  }

  render() {
    const { searchText } = this.state;
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
          <QuestionsList currentSearch={searchText} />
          <div className="button-container">
            <GetAnswers />
            <AddQuestion />
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionsContainer;
