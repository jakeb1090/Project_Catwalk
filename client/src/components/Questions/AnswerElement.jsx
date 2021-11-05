import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  margin-left: 10px;
  color: darkslategray;
`;

const Interactive = styled.span`
  color: gray;
  padding-top: 14px;
`;

const AnswerElement = ({ data }) => {
  const {
    answerer_name: answererName,
    body,
    date,
    helpfulness,
    id,
    photos,
  } = data;

  const formattedDate = date.slice(0, 10);

  const handleClick = (e) => {
    console.log(e.target.value);
  };

  return (
    <div data-testid="answer-element" className="answerElementx" key={id}>
      <Body>
        <div>{ body }</div>
        <div>
          <div>
            {
              photos.map((img) => <img key={img} className="img" src={img} alt="cool" />)
            }
          </div>
          <span>
            <Interactive>
              by&nbsp;
              {answererName}
              ,&nbsp;
              {formattedDate}
              &nbsp;
              |&nbsp;&nbsp;Helpful?&nbsp;
              <span
                onKeyUp={handleClick}
                onClick={handleClick}
                role="link"
                tabIndex={0}
              >
                Yes
              </span>
              (
              {helpfulness}
              )
              &nbsp;|&nbsp;&nbsp;
              <a href="localhost:300">Report</a>
              &nbsp;
            </Interactive>
          </span>
        </div>
      </Body>
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
