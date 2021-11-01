import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AnswerElement from './AnswerElement';

//     "answers": [
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
//     ]

const AnswerInnerList = (props) => {
  const { answers } = props;
  const keys = Object.keys(answers);

  return (
    <div className="answer-inner-list">
      {
        keys.map((key) => <AnswerElement key={key} data={answers[key]} />)
      }
    </div>
  );
};

AnswerInnerList.defaultProps = {
  // answererName: 'person',

};

AnswerInnerList.propTypes = {
  answers: PropTypes.object,
};

export default AnswerInnerList;

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
