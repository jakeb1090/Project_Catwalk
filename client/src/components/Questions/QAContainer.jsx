import React from 'react';
import PropTypes from 'prop-types';
import QuestionElement from './QuestionElement';
import AnswerInnerList from './AnswerInnerList';

const QAContainer = (props) => {
  const { question } = props;
  const { answers } = question;

  return (
    <div className="qa-container">
      <QuestionElement data={question} />
      <AnswerInnerList answers={answers} />
    </div>
  );
};

// QAContainer.defaultProps = {
//   question: {},
//   answer: {},
// };

QAContainer.propTypes = {
  question: PropTypes.object,
  answer: PropTypes.object,
};

export default QAContainer;

// {
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
//       "4996646": {
//         "id": 4996646,
//         "body": "It ships from the facility in Tulsa",
//         "date": "2017-11-04T00:00:00.000Z",
//         "answerer_name": "toofast",
//         "helpfulness": 19,
//         "photos": "[]"
//       }
//     }
//   }
// }
