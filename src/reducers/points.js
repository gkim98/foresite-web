const pointsReducerDefaultState = [];

const pointsReducer = (state = pointsReducerDefaultState, action) => {

    switch(action.type) {
        case 'GET_POINTS':
            return action.points
        default:
            return state
    }
}

export default pointsReducer