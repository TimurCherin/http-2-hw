import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const GifListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const GifItem = styled.img`
  width: 200px;
  border-radius: 10px;
`;

class GifList extends Component {
    state = {
        gifs: [],
    };

    componentDidUpdate(prevProps) {
        if (prevProps.keyword !== this.props.keyword) {
            this.fetchGifs(this.props.keyword);
        }
    }

    fetchGifs = async (keyword) => {
        const apiKey = '69UAhvGmpdIT71PsxHvAqCa59cjM0bc1';
        const url = `https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${apiKey}&limit=20`;
        try {
            const response = await axios.get(url);
            this.setState({ gifs: response.data.data });
        } catch (error) {
            console.error('Error fetching gifs:', error);
        }
    };

    render() {
        return (
            <GifListContainer>
                {this.state.gifs.map((gif) => (
                    <GifItem key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
                ))}
            </GifListContainer>
        );
    }
}

export default GifList;
