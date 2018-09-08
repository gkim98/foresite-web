import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import pointsReducer from '../reducers/points';

export default () => {
    const store = createStore(
        combineReducers({
            points: pointsReducer
        }),
        applyMiddleware(thunk)
    );
    
    return store;
};