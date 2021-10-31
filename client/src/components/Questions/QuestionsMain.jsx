<<<<<<< HEAD
=======
/* eslint-disable react/no-unused-state */
>>>>>>> e32449df701931fecd09323aa201dff108b30c95
import React from 'react';
import GetProducts from './GetProducts';
import GetQuestions from './GetQuestions';
import GetAnswers from './GetAnswers';
import AddQuestion from './AddQuestion';
import AddAnswer from './AddAnswer';
<<<<<<< HEAD

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

=======
import QuestionsList from './QuestionsList';
import SearchQuestions from './SearchQuestions';
import QAContainer from './QAContainer';

class QuestionsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionId: 38,
      searchText: '',
>>>>>>> e32449df701931fecd09323aa201dff108b30c95
    };
  }

  render() {
    return (
<<<<<<< HEAD
      <div className="questions-widget">
        <GetProducts />
        <GetQuestions />
        <GetAnswers />
        <AddQuestion />
        <AddAnswer />

=======
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
>>>>>>> e32449df701931fecd09323aa201dff108b30c95
      </div>
    );
  }
}

<<<<<<< HEAD
export default Questions;
=======
export default QuestionsContainer;
>>>>>>> e32449df701931fecd09323aa201dff108b30c95
