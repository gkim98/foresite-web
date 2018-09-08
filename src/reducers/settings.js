const settingsReducerDefaultState = {
    showMarkerInfo: false,
    marker: {}
};

const settingsReducer = (state=settingsReducerDefaultState, action) => {
    switch(action.type) {
        case 'OPEN_MARKER_INFO':
            return {
                ...state,
                showMarkerInfo: true
            }
        case 'CLOSE_MARKER_INFO':
            return {
                ...state,
                showMarkerInfo: false
            }
        case 'UPDATE_MARKER_INFO':
            return {
                ...state,
                marker: action.marker 
            }
        default:
            return state
    }
}

export default settingsReducer