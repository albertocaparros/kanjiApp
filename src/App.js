import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import CardItem from './components/cards/CardItem';
import Navigator from './components/cards/Navigator';
import KanjiState from './context/kanji/KanjiState';

class App extends React.Component {
  render() {
    return (
      <KanjiState>
        <Fragment>
          <div className='App'>
            <Navbar></Navbar>
            <div className='container'>
              <Navigator></Navigator>
              <CardItem></CardItem>
            </div>
          </div>
        </Fragment>
      </KanjiState>
    );
  }
}

export default App;
