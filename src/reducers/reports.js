const reportsReducerDefaultState = [];

const reportsReducer = (state = reportsReducerDefaultState, action) => {

    switch(action.type) {
        case 'GET_REPORTS':
            return action.reports
        case 'ADD_REPORT':
            return [...state, action.report]
        default:
            return state
    }
}

export default reportsReducer