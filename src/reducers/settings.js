const settingsReducerDefaultState = {
    showMarkerInfo: false
};

const settingsReducer = (state=settingsReducerDefaultState, action) => {
    switch(action.type) {
        case 'OPEN_MARKER_INFO':
            return {
                ...state,
                showMarkerInfo: true
            }
        default:
            return state
    }
}

export default settingsReducer