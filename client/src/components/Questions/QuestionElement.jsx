/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { markQuestionHelpful, addQuestion, addAnswer } from '../../utils';
import ModalAddAnswer from './ModalAddAnswer';

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  align-items: flex-start;
  color: slategray;

  a {
    color: slategray;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
`;

const QuestionInteraction = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  color: slategray;

  span {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const TwoThirds = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${'' /* align-items: space-between; */}
`;

const QuestionBody = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  color: dimgray;
  width: 620px;
  margin-left: 10px;
`;

const QuestionElement = ({ questionData, currentProduct, BorderedButton }) => {
  const [hasUpVoted, setHasUpVoted] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(false);

  const {
    question_body: questionBody,
    question_helpfulness: questionHelpfulness,
    question_id: questionId,
  } = questionData;

  useEffect(() => {
    setHelpfulCount(questionHelpfulness);
  }, []);

  const handleHelpful = () => {
    if (!hasUpVoted) {
      setHasUpVoted(true);
      // eslint-disable-next-line no-return-assign
      setHelpfulCount((prevState) => prevState += 1);
      markQuestionHelpful(questionId)
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log(response, 'marked as helpful');
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    }
  };

  const handleAddQuestion = () => {
    // eslint-disable-next-line no-console
    console.log('added');
    const data = {
      body: 'but are the sleeves organic though?',
      name: 'Tyler Durden',
      email: 'r123@paper.com',
      product_id: currentProduct,
    };
    addQuestion(data)
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  const handleAddAnswer = (data) => {
    addAnswer(data);
  };

  // const addhandleAddPhoto = () => {

  // };

  return (
    <div className="question-element" data-testid="question-element">
      <hr width="60%" />
      <QuestionContainer>
        <Title>
          <h2>Q:</h2>
        </Title>
        <TwoThirds>
          <QuestionBody>
            <h3>{`${questionBody} `}</h3>
          </QuestionBody>
          <QuestionInteraction>
            Helpful?
            &nbsp;&nbsp;
            <span aria-hidden="true" role="link" onClick={handleHelpful}>Yes</span>
            &nbsp;
            {`(${helpfulCount}) | `}
            &nbsp;
            <ModalAddAnswer
              currentProduct={currentProduct}
              questionBody={questionBody}
              BorderedButton={BorderedButton}
              handleAddAnswer={handleAddAnswer}
            />
          </QuestionInteraction>
        </TwoThirds>
      </QuestionContainer>
    </div>
  );
};

// QuestionElement.defaultProps = {
//   questionData: {},
//   question_id: 99,
//   question_body: 'default_question ',
// data: '{}',
// asker_name: 'default_person ',
// question_date: 'default_date ',
// question_helpfulness: 0,
// reported: false,
// };

// QuestionElement.propTypes = {
//   questionData: PropTypes.objectOf(PropTypes.object),
// question_body: PropTypes.string.isRequired,
// question_id: PropTypes.number.isRequired,
// data: PropTypes.object,
// asker_name: PropTypes.string,
// question_date: PropTypes.string,
// question_helpfulness: PropTypes.number,
// reported: PropTypes.bool,

// };

export default QuestionElement;
