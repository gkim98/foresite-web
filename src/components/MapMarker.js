import React from 'react';
import { connect } from 'react-redux';
import { Marker } from 'react-google-maps';
import { openMarkerInfo } from '../actions/settings';

class MapMarker extends React.Component {

    render() {
        return (
            <Marker
                position={this.props.position}
                onClick={this.props.openMarkerInfo}
            >

            </Marker>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    openMarkerInfo: () => dispatch(openMarkerInfo())
});

export default connect(undefined, mapDispatchToProps)(MapMarker);