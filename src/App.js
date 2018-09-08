import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import AppRouter from './routers/AppRouter';

//test
import MapPage from './pages/MapPage';

class App extends Component {
  render() {
    return (
      <Provider className="App" store={this.props.store}>
        <MapPage />
      </Provider>
    );
  }
}

export default App;
