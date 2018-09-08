import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reportsReducer from '../reducers/reports';
import settingsReducer from '../reducers/settings';

export default () => {
    const store = createStore(
        combineReducers({
            reports: reportsReducer,
            settings: settingsReducer
        }),
        applyMiddleware(thunk)
    );
    
    return store;
};