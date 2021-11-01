import React from 'react';
import PropTypes from 'prop-types';

const AnswerElement = ({ data }) => {
  const {
    answerer_name: answererName,
    body,
    date,
    helpfulness,
    id,
    photos,
  } = data;

  return (
    <div data-testid="answer-element" className="answerElement" key={id}>
      <div>{ body }</div>
      <div>
        <span>
          by
          {answererName}
          ,&nbsp;
          {{ date }.slice(0, 10)}
          &nbsp;
          |&nbsp;&nbsp;Helpful?&nbsp;
          <a href="#" onClick={() => console.log('yess') }>&nbsp;Yes&nbsp;</a>
          (
          {helpfulness}
          )
          &nbsp;|&nbsp;&nbsp;Report&nbsp;
        </span>
        <div>
          {
            photos.map((img) => <img key={img} className="img" src={img} alt="cool" />)
          }
        </div>
      </div>
    </div>
  );
};

AnswerElement.defaultProps = {
  data: {},
  answerer_name: 'default_person',
  body: 'default_answer',
  date: 'default_data',
  helpfulness: 99,
  id: 9999,
  photos: ['array', 'of things'],
};

AnswerElement.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  answerer_name: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.string,
  helpfulness: PropTypes.number,
  id: PropTypes.number,
  photos: PropTypes.arrayOf(PropTypes.string),
};

export default AnswerElement;
