import React, {Component} from 'react';
import {Provider} from 'react-redux';

import './css/main.css';
import 'normalize.css';
import AppRouter from './routers/AppRouter';
import DirectionsPage from './pages/DirectionsPage'

class App extends Component {
    render() {
        return (
            <Provider className="App" store={this.props.store}>
                <AppRouter/>
            </Provider>
        );
    }
    // render() {
    //     return (<DirectionsPage/>);
    // }
}

export default App;
