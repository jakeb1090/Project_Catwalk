/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';

// updateserach
class SearchQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchText: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // this.setState({ SearchText: e.target.value });
    this.updateSearch(e.target.value);
  }

  render() {
    const { updateSearch } = this.props;
    return (
      <div data-testid="search" className="search">
        <input
          type="text"
          placeholder="have a question? search for answers..."
          onChange={(e) => updateSearch(e.target.value)}
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
