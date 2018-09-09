import React, {Component} from 'react';
import {Provider} from 'react-redux';

import './css/main.css';
import 'normalize.css';
import AppRouter from './routers/AppRouter';

class App extends Component {
    render() {
        return (
            <Provider className="App" store={this.props.store}>
                <AppRouter/>
            </Provider>
        );
    }
}

export default App;
