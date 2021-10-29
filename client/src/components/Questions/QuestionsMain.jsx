import React from 'react';
import GetProducts from './GetProducts';
import GetQuestions from './GetQuestions';
import GetAnswers from './GetAnswers';
import AddQuestion from './AddQuestion';
import AddAnswer from './AddAnswer';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="questions-widget">
        <GetProducts />
        <GetQuestions />
        <GetAnswers />
        <AddQuestion />
        <AddAnswer />

      </div>
    );
  }
}

export default Questions;
