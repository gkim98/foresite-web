export const openMarkerInfo = () => ({
    type: 'OPEN_MARKER_INFO'
});

export const closeMarkerInfo = () => ({
    type: 'CLOSE_MARKER_INFO'
});

export const updateMarkerInfo = (marker) => ({
    type: 'UPDATE_MARKER_INFO',
    marker
});

export const updateRouteDestination = (marker) => ({
    type: 'UPDATE_ROUTE_DESTINATION',
    marker
});
