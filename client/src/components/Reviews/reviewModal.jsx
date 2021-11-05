import React from 'react';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#reviewmodal')

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommend: undefined,
      rating: undefined,
      bodyChar: 0,
      photos: [],
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
    console.log(reviewObject)
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

  addPhoto(event) {
      this.setState(prevState => ({
        photos: [...prevState.photos, document.getElementById('photo').value]
      }))
  }

  render() {
    const { isOpen, closeModal, submitModal, characteristics } = this.props
    const charAndId = Object.keys(characteristics).map((char, index) => {
      return (
        <div key={characteristics[char].id}>
          <h5>{char}</h5>
          <input name={char} id={characteristics[char].id} value={1} type="radio" onChange={this.changeChar.bind(this)} />
          <label>Poor</label>

          <input name={char} id={characteristics[char].id} value={2} type="radio" onChange={this.changeChar.bind(this)} />
          <label>Below Average</label>

          <input name={char} id={characteristics[char].id} value={3} type="radio" onChange={this.changeChar.bind(this)} />
          <label>What I Expected</label>

          <input name={char} id={characteristics[char].id} value={4} type="radio" onChange={this.changeChar.bind(this)} />
          <label>Pretty Great</label>

          <input name={char} id={characteristics[char].id} value={5} type="radio" onChange={this.changeChar.bind(this)} />
          <label>Perfect</label>
        </div>
      )
    })
    return (
      <ReactModal isOpen={isOpen} >
        <div>
          <h3>Write Your Review</h3>
          <h4>{`For [product name]`} </h4>
          <div>
            <h5>Rating:</h5>
            <input name="rating" value="1" type="radio" onChange={this.changeRating.bind(this)} />
            <label >One Star - "Poor"</label>

            <input name="rating" value="2" type="radio" onChange={this.changeRating.bind(this)} />
            <label >Two Stars - "Fair"</label>

            <input name="rating" value="3" type="radio" onChange={this.changeRating.bind(this)} />
            <label >Three Stars - "Average"</label>

            <input name="rating" value="4" type="radio" onChange={this.changeRating.bind(this)} />
            <label >Four Stars - "Good"</label>

            <input name="rating" value="5" type="radio" onChange={this.changeRating.bind(this)} />
            <label >Five Stars - "Great"</label>
          </div>

          <div>{charAndId}</div>
          <br></br>
          <div>Your Review Headline:
            <input id="summary" placeholder="Example: Best purchase ever!" />
          </div>
          <div>Enter your review here:
            <input id="body" placeholder="Why did you like the product or not?" />
            <div>{`Character count: ${this.state.bodyChar} of 1000`}</div>
          </div>

          <div>Do you recommend this product?
            <input name="recommend" value="true" type="radio" onChange={this.changeRecommend.bind(this)} />
            <label>Yes</label>

            <input name="recommend" value="false" type="radio" onChange={this.changeRecommend.bind(this)} />
            <label>No</label>
          </div>

          <div>Add photo URL:
            <input id="photo" />
            <button name="addPhoto" onClick={this.addPhoto.bind(this)}> Attach Photo</button>
          </div>


          <div>Your username:
            <input id="name" placeholder="jackson11!" />
            <p>For privacy reasons, do not use your full name or email address as your display name.</p>
          </div>
          <div> You email address:
            <input id="email" placeholder="jackson11@email.com" />
          </div>
        </div>
        <button onClick={this.handleSubmit.bind(this)}>Submit Review</button>
        <button onClick={closeModal}> Cancel </button>
      </ReactModal>
    )
  }
}

export default ReviewModal;