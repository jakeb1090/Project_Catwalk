import React from 'react';
import axios from 'axios';
// eslint-disable-next-line import/no-named-as-default
// import PropTypes from 'prop-types';
import QAContainer from './QAContainer';
import LoadMoreAnswers from './LoadMoreAnswers';
import API_KEY from '../../../config';

//props.currentProductId
class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: 61601,
      // questionList: [],
      // searchText: '',
    };
  }


  render() {
    const { currentProductId } = this.state;
    const { questionsN, answersN, loadMoreAnswers, questionList, currentSearch } = this.props;

    const filteredList = questionList.filter(question => question.question_body.toLowerCase().includes(currentSearch.toLowerCase()));

    return (
      <div data-testid="questions-list" className="question-list">
        &lt;Questions List Container&gt;
        {
        filteredList.slice(0, questionsN).length === 0
          ? (<div>No Questions for this Product</div>)
          : filteredList.slice(0, questionsN).map((nQuestion) => (
            <QAContainer
              key={nQuestion.question_id}
              question={nQuestion}
              answersN={answersN}
              currentProduct={currentProductId}
            />
          ))
        }

        {
          answersN !== null
          ? <input type="button" value="LOAD MORE ANSWERS" onClick={ () => {loadMoreAnswers()} } />
          : <div></div>
        }

      </div>
    );
  }
}

// QuestionsList.propTypes = {
//   currentSearch: PropTypes.string.isRequired,
// };

export default QuestionsList;