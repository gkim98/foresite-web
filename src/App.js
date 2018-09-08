import React, { Component } from 'react';
import './App.css';
import AppRouter from './routers/AppRouter';

//test
import MapPage from './pages/MapPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapPage />
      </div>
    );
  }
}

export default App;
