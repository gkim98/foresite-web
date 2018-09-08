import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Navbar from '../components/Navbar';
import MapPage from '../pages/MapPage';
import DataVisPage from '../pages/DataVisPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Navbar />
            <div>
                <Route path="/" component={MapPage} exact={true} />
                <Route path="/viz" component={DataVisPage} />
            </div>
        </div>
    </Router>
);

export default AppRouter;