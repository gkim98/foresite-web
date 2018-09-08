import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import MapPage from '../pages/MapPage';

const AppRouter = () => (
    <Router>
        <Route path="/" component={MapPage} exact={true} />
    </Router>
);

export default AppRouter;