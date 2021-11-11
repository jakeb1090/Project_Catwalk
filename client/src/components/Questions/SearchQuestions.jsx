/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid gray;
  padding: 12px;
  border-radius: 8px;
  height: 30px;
  width: 60%;
  font-size: 18px;
  color: gray;
  marginBottom: 15px;
`;

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
    const { searchText } = this.state;
    return (
      <div data-testid="search" className="search">
        <Input
          type="text"
          placeholder="HAVE A QUESTION, SEARCH FOR ANSWERS..."
          onChange={this.handleChange}
          value={searchText}
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
