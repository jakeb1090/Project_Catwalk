import React from 'react';
import PropTypes from 'prop-types';
import ReviewTile from './reviewTile';
import ReviewModal from './reviewModal';


class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qtyToRender: 2,
      rendered: 0,
      showModal: false,
    }
  }

  loadMore(event) {
    if (this.state.qtyToRender >= this.props.reviews.length -1) {
      this.setState((prevState) => ({
        qtyToRender: this.props.reviews.length
      })
      )
    } else {
      this.setState((prevState) => ({
        qtyToRender: prevState.qtyToRender + 2
      })
      )
    }
  }

  openModal() {
    this.setState({
      showModal: true
    })
  }
  closeModal() {
    this.setState({
      showModal: false,
    })
  }

  submitModal(reviewObject) {
    this.setState({
      showModal: false
    })
    //call reviewapp API function
    this.props.postReview(reviewObject);
  }

  handleSort(event) {
    this.props.sortBy(event.target.value)
  }

  render() {
    let { reviews, starFilters, putFeedback, characteristics } = this.props;
    let { qtyToRender, rendered } = this.state;
    if (typeof reviews !== 'object') { return null; }
    const tile = reviews.map((review) => {
      if (
        starFilters[review.rating] &&
        qtyToRender > rendered) {
        if (rendered < qtyToRender) {
          rendered++
        }
        return <ReviewTile
          key={review.review_id}
          review={review}
          putFeedback={putFeedback} />;
      }
    });

    return (
      <div data-testid="reviewlist">
        <div>
          <h4>Review List</h4>
          <div>
            <button data-testid="loadMoreButton" onClick={this.loadMore.bind(this)}>Load More</button>
            <button data-testid="addReviewButton" onClick={this.openModal.bind(this)}>Add Review</button>
          </div>
          {`Number of reviews: showing ${qtyToRender} of ${reviews.length}`}
        </div>
        <div>
          Sorted by:
          <select data-testid="dropdown" onChange={this.handleSort.bind(this)}>
            <option value="relevance">Relevance</option>
            <option value="helpful">Helpfulness</option>
            <option value="newness">Date</option>
          </select>
          {tile}
          <ReviewModal
            isOpen={this.state.showModal}
            characteristics={characteristics}
            closeModal={this.closeModal.bind(this)}
            submitModal={this.submitModal.bind(this)} />
        </div>
      </div>
    );
  }
};

ReviewList.propTypes = {
  reviews: PropTypes.array,
  id: PropTypes.number,
};



export default ReviewList;

// individual ReviewTile object:
// body: "Qui odit qui accusantium rerum laboriosam incidunt porro necessitatibus impedit. Omnis assumenda ut voluptas ex eos placeat reiciendis alias deserunt. Voluptate quidem qui est tenetur non sunt deserunt nihil. Voluptas quia aut sint veniam officia. Molestias sit illo sed itaque. Dolores occaecati tempore nihil tempore unde sint odit aut iusto."
// date: "2021-04-25T00:00:00.000Z"
// helpfulness: 29
// photos: [{…}]
// rating: 3
// recommend: true
// response: null
// review_id: 1055695
// reviewer_name: "Ward_Cartwright23"
// summary: "Et repudiandae corporis consequatur voluptas animi.
