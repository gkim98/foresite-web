const settingsReducerDefaultState = {
    showMarkerInfo: false,
    marker: {},
    destination: {}
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
        case 'UPDATE_ROUTE_DESTINATION':
            return {
                ...state,
                destination: action.marker
            }
        default:
            return state
    }
}

export default settingsReducer