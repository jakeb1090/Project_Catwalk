/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid red;
  padding: 12px;
  border-radius: 8px;
  height: 20px;
  width: 18em;
  font-size: 20px;
  color: purple;
  background-color: lightblue;
`

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
        <Input
          type="text"
          placeholder="have a question? search for answers..."
          onChange={this.handleChange}
          value={this.state.searchText}
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
