import React, { Component } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

class GifSearch extends Component {
    state = {
        keyword: '',
    };

    handleChange = (event) => {
        this.setState({ keyword: event.target.value });
    };

    handleSearch = () => {
        if (this.state.keyword.trim() === '') {
            alert('Please enter a keyword!');
            return;
        }
        this.props.onSearch(this.state.keyword);
    };

    render() {
        return (
            <SearchContainer>
                <SearchInput
                    type="text"
                    placeholder="Enter a keyword"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />
                <SearchButton onClick={this.handleSearch}>Search</SearchButton>
            </SearchContainer>
        );
    }
}

export default GifSearch;