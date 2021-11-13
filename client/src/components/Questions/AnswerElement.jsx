import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import {
  markAnswerHelpful,
  reportAnswer,
} from '../../utils';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  margin-left: 10px;
  color: darkslategray;
  margin: 20px;
`;

const Interactive = styled.span`
  color: gray;
  padding-top: 14px;

  span {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const AnswerElement = ({
  data, questionId, onFetchAnswers, id,
}) => {
  const {
    answerer_name: answererName,
    body,
    date,
    helpfulness,
    photos,
  } = data;

  // eslint-disable-next-line prefer-const
  let [helpfulCount, setHelpfulCount] = useState(false);
  const [hasUpVoted, setHasUpVoted] = useState(false);
  const [hasReported, setHasReported] = useState(false);

  useEffect(() => {
    setHelpfulCount(helpfulness);
  }, []);

  const formattedDate = moment(date).format('ll');

  const handleHelpful = () => {
    if (!hasUpVoted) {
      setHelpfulCount(helpfulCount += 1);
      setHasUpVoted(true);
      markAnswerHelpful(id)
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log(res, res.status, 'marked as helpful');
        })
        .then(() => {
          onFetchAnswers(questionId);
        });
    }
  };

  const handleReport = () => {
    if (!hasReported) {
      setHasReported((prevState) => !prevState);
      reportAnswer(id)
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log(res, res.status, 'answer reported');
        })
        .then(() => {
          onFetchAnswers(questionId);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error, 'error');
        });
    }
  };

  return (
    <div data-testid="answer-element" className="answerElementx" key={id}>
      <Body>
        <div>{ body }</div>
        <div>
          <div>
            {
              photos.length
                // eslint-disable-next-line react/no-array-index-key
                ? photos.map((img, idx) => <img key={`${img}${idx}`} className="img" src={img.url} alt="cool" />)
                : <span />
            }

          </div>
          <span>
            <Interactive>
              by&nbsp;
              {
                answererName === 'Seller'
                  ? <b>{answererName}</b>
                  : <span>{answererName}</span>
              }

              ,&nbsp;
              {formattedDate}
              &nbsp;
              |&nbsp;&nbsp;Helpful?&nbsp;
              <span aria-hidden="true" role="link" onClick={handleHelpful}>Yes</span>
              (
              { helpfulCount }
              )
              &nbsp;|&nbsp;&nbsp;
              {
                !hasReported
                  ? <span aria-hidden="true" role="link" onClick={handleReport}>Report</span>
                  : <span aria-hidden="true" role="link" onClick={handleReport}><i>Reported</i></span>
              }
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
  questionId: 99,
  answerer_name: 'default_person',
  body: 'default_answer',
  date: 'default_data',
  helpfulness: 99,
  id: 9999,
  photos: ['array', 'of things'],
};

AnswerElement.propTypes = {
  questionId: PropTypes.number,
  data: PropTypes.objectOf(PropTypes.any),
  answerer_name: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.string,
  helpfulness: PropTypes.number,
  id: PropTypes.number,
  photos: PropTypes.arrayOf(PropTypes.string),
  onFetchAnswers: PropTypes.func.isRequired,
};

export default AnswerElement;
