import React from 'react';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#reviewmodal')

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommend: undefined,
      rating: undefined,
      bodyChar: 0
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
      photos: [],
      characteristics: {},
      // photos: document.getElementById('photos'),
      // characteristics: document.getElementById('characteristics'),
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
  changeRecommend() {
    const boolean = event.target.value == 'true';
    this.setState({
      recommend: boolean
    })
  }

  render() {
    return (
      <ReactModal isOpen={this.props.isOpen} contentLabel="Modal Example!" >
        <div>
          <h3>Write Your Review</h3>
          <h4>{`For [product name]`} </h4>
          <div>Rating:
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
          <div>Your username:
            <input id="name" placeholder="jackson11!" />
            <p>For privacy reasons, do not use your full name or email address as your display name.</p>
          </div>
          <div> You email address:
            <input id="email" placeholder="jackson11@email.com" />
          </div>
        </div>
        <button onClick={this.handleSubmit.bind(this)}>Submit Review</button>
        <button onClick={this.props.closeModal}> Cancel </button>
      </ReactModal>
    )
  }
}

export default ReviewModal;