const reportsReducerDefaultState = [];

const reportsReducer = (state = reportsReducerDefaultState, action) => {

    switch(action.type) {
        case 'GET_REPORTS':
            return action.reports
        default:
            return state
    }
}

export default reportsReducer