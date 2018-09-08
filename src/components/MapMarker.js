import React from 'react';
import { connect } from 'react-redux';
import { Marker } from 'react-google-maps';
import { openMarkerInfo, updateMarkerInfo } from '../actions/settings';

class MapMarker extends React.Component {

    updateMarkerInfo = () => {
        console.log(this.props.report)
        this.props.openMarkerInfo()
        this.props.updateMarkerInfo(this.props.report)
    }

    render() {
        return (
            <Marker
                position={this.props.position}
                onClick={this.updateMarkerInfo}
            >

            </Marker>
        )
    }
}

// when map marker clicked -> open info window with report's data
const mapDispatchToProps = (dispatch) => ({
    openMarkerInfo: () => dispatch(openMarkerInfo()),
    updateMarkerInfo: (marker) => dispatch(updateMarkerInfo(marker))
});

export default connect(undefined, mapDispatchToProps)(MapMarker);