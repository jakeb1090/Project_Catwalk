import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReviewTile from './reviewTile';
import ReviewModal from './reviewModal';

const List = styled.div`
  margin: 10px 0px;
  flex: 2 1 0;
  width: 200px;
`;

const Dropdown = styled.select`
  border: none;
  margin: 0px 5px;
  font-size: 16px;
  font-family: 'Georgia';
  font-weight: bold;
  color: #2aa343;
`;

const Option = styled.option`
border: none;
margin: 0px 5px;
font-size: 16px;
font-family: 'Georgia';
font-weight: bold;
color: blue;
`;

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qtyToRender: 2,
      rendered: 0,
      showModal: false,
    };
  }

  handleSort(event) {
    this.props.sortBy(event.target.value);
  }

  openModal() {
    this.setState({
      showModal: true,
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
    });
  }

  submitModal(reviewObject) {
    this.setState({
      showModal: false,
    });
    // call reviewapp API function
    this.props.postReview(reviewObject);
  }

  loadMore() {
    const { qtyToRender } = this.state;
    const { reviews } = this.props;
    if (qtyToRender >= reviews.length - 1) {
      this.setState({
        qtyToRender: reviews.length,
      });
    } else {
      this.setState((prevState) => ({
        qtyToRender: prevState.qtyToRender + 2,
      }));
    }
  }

  render() {
    const {
      reviews, starFilters, putFeedback, characteristics,
      TextButton, scaleSelections, BorderedButton
    } = this.props;
    let { qtyToRender, rendered } = this.state;
    if (typeof reviews !== 'object') { return null; }
    const tile = reviews.map((review) => {
      if (
        starFilters[review.rating]
        && qtyToRender > rendered) {
        if (rendered < qtyToRender) {
          rendered++;
        }
        return (
          <ReviewTile
            key={review.review_id}
            review={review}
            putFeedback={putFeedback}
            TextButton={TextButton}
          />
        );
      }
    });

    return (
      <List data-testid="reviewlist">
        {`${reviews.length} reviews, sorted by`}
        <Dropdown data-testid="dropdown" onChange={this.handleSort.bind(this)}>
          <Option value="relevance">Relevance</Option>
          <Option value="helpful">Helpfulness</Option>
          <Option value="newness">Date</Option>
        </Dropdown>
        <div>
          <BorderedButton data-testid="loadMoreButton" onClick={this.loadMore.bind(this)}>Load More</BorderedButton>
          <BorderedButton data-testid="addReviewButton" onClick={this.openModal.bind(this)}>Add Review</BorderedButton>
        </div>
        {tile}
        <ReviewModal
          isOpen={this.state.showModal}
          characteristics={characteristics}
          closeModal={this.closeModal.bind(this)}
          submitModal={this.submitModal.bind(this)}
          scaleSelections={scaleSelections}
          ModalButton={this.props.ModalButton}
        />
      </List>
    );
  }
}

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  starFilters: PropTypes.object,
  characteristics: PropTypes.object,
  putFeedback: PropTypes.func,
  postReview: PropTypes.func,
  sortBy: PropTypes.func,
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
