import React, { Component } from 'react';
import styled from 'styled-components';
import GifSearch from './components/GifSearch';
import GifList from './components/GifList';

const AppContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  color: black;
  margin: 20px;
`;

class App extends Component {
  state = {
    keyword: '',
  };

  handleSearch = (keyword) => {
    this.setState({ keyword });
  };

  render() {
    return (
      <AppContainer>
        <Title>GIF Search App</Title>
        <GifSearch onSearch={this.handleSearch} />
        <GifList keyword={this.state.keyword} />
      </AppContainer>
    );
  }
}

export default App;