import React, {Component} from 'react';
import './App.css';
import AppRouter from './routers/AppRouter';
//test
import MapPage from './pages/MapPage';
import DataVisPage from './pages/DataVisPage';

class App extends Component {
    render() {
        return (
            <div className="App">
                <DataVisPage/>
            </div>
        );
    }
}

export default App;
