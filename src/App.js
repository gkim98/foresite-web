import React, {Component} from 'react';
import {Provider} from 'react-redux';

import './App.css';
import AppRouter from './routers/AppRouter';
//test
import MapPage from './pages/MapPage';
import DataVisPage from './pages/DataVisPage';

class App extends Component {
    render() {
        return (
            // <Provider className="App" store={this.props.store}>
            // <MapPage />
            // </Provider>
            <div className="App">
                <DataVisPage/>
            </div>
        );
    }
}

export default App;
