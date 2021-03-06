import React from 'react';
import {connect} from 'react-redux';
import {Marker} from 'react-google-maps';

import {openMarkerInfo, updateMarkerInfo} from '../actions/settings';
import earthquake from '../assets/earthquake.png';
import fire from '../assets/fire.png';
import flood from '../assets/flood.png';
import other from '../assets/other.png';
import tsunami from '../assets/tsunami.png';
import request from '../assets/request.png';

const google = window.google;
const iconMapping = {
    earthquake,
    fire,
    flood,
    other,
    tsunami,
    request
};

class MapMarker extends React.Component {
    state = {
        opacity: 1
    }

    componentDidUpdate() {
        // identifies selected marker with opacity
        if (this.props.settings.marker.id === this.props.report.id) {
            if (this.state.opacity == 1) {
                this.setState({
                    opacity: .8
                })
            }
        } else {
            if (this.state.opacity == .8) {
                this.setState({
                    opacity: 1
                })
            }
        }
    }

    updateMarkerInfo = () => {
        this.props.openMarkerInfo()
        this.props.updateMarkerInfo(this.props.report)

    };

    render() {
        const image = {
            url: iconMapping[this.props.report.disasterType],
            scaledSize: new google.maps.Size(50, 50)
        };
        return (
            <Marker
                position={this.props.position}
                onClick={this.updateMarkerInfo}
                opacity={this.state.opacity}
                icon={image}
            >

            </Marker>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        settings: state.settings
    };
};

// when map marker clicked -> open info window with report's data
const mapDispatchToProps = (dispatch) => ({
    openMarkerInfo: () => dispatch(openMarkerInfo()),
    updateMarkerInfo: (marker) => dispatch(updateMarkerInfo(marker))
});

export default connect(mapStateToProps, mapDispatchToProps)(MapMarker);