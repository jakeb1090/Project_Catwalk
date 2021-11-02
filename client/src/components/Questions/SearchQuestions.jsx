/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';

// updatesearch
class SearchQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchText: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { updateSearch } = this.props;
    updateSearch(e.target.value);
  }

  render() {
    return (
      <div data-testid="search" className="search">
        <input
          type="text"
          placeholder="have a question? search for answers..."
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

SearchQuestions.defaultProps = {
  updateSearch: () => {},
};

SearchQuestions.propTypes = {
  updateSearch: PropTypes.func,
};

export default SearchQuestions;
