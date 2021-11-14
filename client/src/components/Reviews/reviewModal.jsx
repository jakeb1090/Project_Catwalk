import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import ModalAddPhotos from './reviewModalPhotos';

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  `;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const Red = styled.div`
  font-weight: bold;
  color: red;
`;
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: 12,
    height: '75%',
  },
};

const InputBox = styled.input`
  display: flex;
  flex-direction: column;
  // margin-bottom: 20px;
  height: 30px;
  font-size: 15px;
  border-radius: 6px;
  padding-left: 10px;
  width: 90%;
  `;

const Radio = styled.input`

`;

const FormStyle = styled.div`
// z-index: 100;
// position: relative;
  margin: 20px;


  textarea {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    font-size: 15px;
    border-radius: 6px;
    width: 90%;
   }

   h2 {
     color: dimgray;
   }

   h5 {
    display: flex;
    flex-direction: row;
    margin-bottom: 3px;
  }

  // label {
  //   display: flex;
  //   flex-direction: column;
  // }

  .product {
    color: darkslategray;
  }

  .notice {
    margin-bottom: 10px;
  }

  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

`;

const Scroll = styled.div`
  top: 150px;
  bottom: auto;
  overflow-y: auto;
`;

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommend: undefined,
      rating: undefined,
      bodyChar: 0,
      photos: [],
      showPhotoModal: false,
    }
  }



  handleSubmit = (event) => {
    const reviewObject = {
      rating: Number(this.state.rating),
      summary: document.getElementById('summary').value,
      body: document.getElementById('body').value,
      recommend: this.state.recommend,
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      photos: this.state.photos,
      characteristics: this.state.characteristics,
    }
    if (!reviewObject.rating) {
      alert("Please select a rating")
    } else if (reviewObject.summary.length > 60) {
      alert("Review headline must be less than 60 characters")
      // } else if (reviewObject.body.length > 1000 || reviewObject.body.length < 50) {
      //   alert("Review must be between 50 and 1000 characters")
    } else if (!reviewObject.recommend) {
      alert("Please select a recommendation")
    } else if (!reviewObject.name) {
      alert("Please fill in your username")
    } else if (!reviewObject.email) {
      alert("Please fill in your email address")
    } else {
      this.props.submitModal(reviewObject);
    }
  }

  changeRating(event) {
    this.setState({
      rating: event.target.value
    })
  }
  changeRecommend(event) {
    const boolean = event.target.value == 'true';
    this.setState({
      recommend: boolean
    })
  }

  changeChar(event) {
    this.setState(prevState => ({
      characteristics: {
        ...prevState.characteristics,
        [event.target.id]: Number(event.target.value)
      }
    }))
  }

  openPhotoModal() {
      this.setState({
        showPhotoModal: true,
      })
  }
  closePhotoModal() {
    this.setState({
      showPhotoModal: false,
    })
  }

  addPhotos(photoArray) {
    this.setState({
      photos: photoArray,
    })
  }

  render() {
    const { isOpen, closeModal, submitModal, characteristics, scaleSelections, ModalButton } = this.props
    const charAndId = Object.keys(characteristics).map((char, index) => {
      return (
        <FlexCol key={characteristics[char].id}>
          <h5><Red>*</Red>{char}</h5>
          <FlexRow>
            <Radio name={char} id={characteristics[char].id} value={1} type="radio" onChange={this.changeChar.bind(this)} />
            <label>{scaleSelections[char][0]}</label>
          </FlexRow>
          <FlexRow>
            <Radio name={char} id={characteristics[char].id} value={2} type="radio" onChange={this.changeChar.bind(this)} />
            <label>{scaleSelections[char][1]}</label>
          </FlexRow>
          <FlexRow>
            <Radio name={char} id={characteristics[char].id} value={3} type="radio" onChange={this.changeChar.bind(this)} />
            <label>{scaleSelections[char][2]}</label>
          </FlexRow>
          <FlexRow>
            <Radio name={char} id={characteristics[char].id} value={4} type="radio" onChange={this.changeChar.bind(this)} />
            <label>{scaleSelections[char][3]}</label>
          </FlexRow>
          <FlexRow>
            <Radio name={char} id={characteristics[char].id} value={5} type="radio" onChange={this.changeChar.bind(this)} />
            <label>{scaleSelections[char][4]}</label>
          </FlexRow>
        </FlexCol>
      )
    })
    return (
      <ReactModal
        isOpen={isOpen}
        style={customStyles}
      >
        <FormStyle data-testid="reviewModal">
          <h2>{`Write Your Review`} </h2>
          <Scroll>
            <FlexRow>
              <FlexCol>
                <h5><Red>*</Red>Overall Rating:</h5>
                <FlexRow>
                  <Radio data-testid="ratingRadio1" name="rating" value="1" type="radio" onChange={this.changeRating.bind(this)} />
                  <label >One Star - "Poor"</label>
                </FlexRow>
                <FlexRow>
                  <Radio name="rating" value="2" type="radio" onChange={this.changeRating.bind(this)} />
                  <label >Two Stars - "Fair"</label>
                </FlexRow>
                <FlexRow>
                  <Radio name="rating" value="3" type="radio" onChange={this.changeRating.bind(this)} />
                  <label >Three Stars - "Average"</label>
                </FlexRow>
                <FlexRow>
                  <Radio name="rating" value="4" type="radio" onChange={this.changeRating.bind(this)} />
                  <label >Four Stars - "Good"</label>
                </FlexRow>
                <FlexRow>
                  <Radio name="rating" value="5" type="radio" onChange={this.changeRating.bind(this)} />
                  <label >Five Stars - "Great"</label>
                </FlexRow>
              </FlexCol>
              <FlexCol>
                <h5><Red>*</Red>Do you recommend this product?</h5>
                <FlexRow>
                  <Radio name="recommend" value="true" type="radio" onChange={this.changeRecommend.bind(this)} />
                  <label>Yes</label>
                </FlexRow>
                <FlexRow>
                  <Radio name="recommend" value="false" type="radio" onChange={this.changeRecommend.bind(this)} />
                  <label>No</label>
                </FlexRow>
              </FlexCol>
            </FlexRow>

            <FlexRow>{charAndId}</FlexRow>

            <div>
              <h5>Your Review Headline:</h5>
              <InputBox id="summary" data-testid="summary" placeholder="Example: Best purchase ever!" />
            </div>
            <h5>
              <Red>*</Red>Enter your review here:
            </h5>
            <textarea id="body" data-testid="body" placeholder="Why did you like the product or not?" />
            {/* <div>{`Character count: ${this.state.bodyChar} of 1000`}</div> */}


            <h5>
              <Red>*</Red>Your username:
            </h5>
            <InputBox id="name" data-testid="username" placeholder="jackson11!" />
            <p>For privacy reasons, do not use your full name or email address as your display name.</p>
            <h5>
              <Red>*</Red>Your email address:
            </h5>
            <InputBox id="email" data-testid="email" placeholder="jackson11@email.com" />
          </Scroll>

          <ModalButton onClick={this.openPhotoModal.bind(this)}> Add Photos </ModalButton>


          <br />
          <ModalButton onClick={this.handleSubmit.bind(this)}>Submit Review</ModalButton>
          <ModalButton onClick={closeModal}> Cancel </ModalButton>
          <Red>* = Required</Red>

          <ModalAddPhotos
            isOpen={this.state.showPhotoModal}
            addPhotos={this.addPhotos.bind(this)}
            closePhotoModal={this.closePhotoModal.bind(this)}
            ModalButton={this.props.ModalButton}
          />
        </FormStyle>
      </ReactModal>
    )
  }
}

export default ReviewModal;