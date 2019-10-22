import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import CardItem from './components/cards/CardItem';
import Navigator from './components/cards/Navigator';
import axios from 'axios';

class App extends React.Component {
  state = {
    id: 13,
    currentKanji: {
      character: '',
      kunyomi: {},
      meaning: {},
      onyomi: {},
      strokes: { images: [] },
      video: {}
    },
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios({
      method: 'GET',
      url: 'https://kanjialive-api.p.rapidapi.com/api/public/kanji/月',
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
      }
    });

    this.setState({ currentKanji: res.data.kanji, loading: false });
  }

  render() {
    return (
      <div className='App'>
        <Navbar></Navbar>
        <div className='container'>
          <Navigator></Navigator>
          <CardItem
            loading={this.state.loading}
            kanji={this.state.currentKanji}
            id={this.state.id}
          ></CardItem>
        </div>
      </div>
    );
  }
}

export default App;
