import React, { Component } from 'react';
import Game from './components/game';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
class App extends Component {
  render() {
    return (
			<Provider store={store}>
				<Game></Game>
			</Provider>
		);
  }
}

export default App;
