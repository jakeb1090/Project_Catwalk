<<<<<<< HEAD
<<<<<<< HEAD
=======
/* eslint-disable react/no-unused-state */
>>>>>>> e32449df701931fecd09323aa201dff108b30c95
=======
/* eslint-disable react/no-unused-state */
>>>>>>> aabc142 (Added test buttons for API requests)
import React from 'react';
import GetProducts from './GetProducts';
import GetQuestions from './GetQuestions';
import GetAnswers from './GetAnswers';
import AddQuestion from './AddQuestion';
import AddAnswer from './AddAnswer';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import QuestionsList from './QuestionsList';
import SearchQuestions from './SearchQuestions';
>>>>>>> aabc142 (Added test buttons for API requests)

class QuestionsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD

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
=======
      currentQuestionId: 38,
      searchText: '',
>>>>>>> aabc142 (Added test buttons for API requests)
    };
  }

  render() {
    return (
<<<<<<< HEAD
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

=======
      <div>
        <div className="test-components">
          <GetProducts />
          <GetQuestions />
          <GetAnswers />
          <AddQuestion />
          <AddAnswer />

>>>>>>> aabc142 (Added test buttons for API requests)
          <SearchQuestions />
        </div>
        <div className="questions-widget">
          <SearchQuestions updateSearch={(input) => this.setState({ searchText: input })} />
          <QuestionsList />
          <div className="button-container">
<<<<<<< HEAD
            {/* <GetAnswers />
            <AddQuestion /> */}
            <QAContainer />
          </div>
        </div>
>>>>>>> e32449df701931fecd09323aa201dff108b30c95
=======
            <GetAnswers />
            <AddQuestion />
          </div>
        </div>
>>>>>>> aabc142 (Added test buttons for API requests)
      </div>
    );
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
export default Questions;
=======
export default QuestionsContainer;
>>>>>>> e32449df701931fecd09323aa201dff108b30c95
=======
export default QuestionsContainer;
>>>>>>> aabc142 (Added test buttons for API requests)
