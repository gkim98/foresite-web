import React from 'react';
import { connect } from 'react-redux';
import { Marker } from 'react-google-maps';

import { openMarkerInfo, updateMarkerInfo } from '../actions/settings';
import earthquake from '../assets/earthquake.png';
import fire from '../assets/fire.png';
import flood from '../assets/flood.png';
import other from '../assets/other.png';
import tsunami from '../assets/tsunami.png';

const iconMapping = {
    earthquake,
    fire,
    flood,
    other,
    tsunami
}

class MapMarker extends React.Component {
    state={
        opacity: 1
    }

    componentDidUpdate() {
        // identifies selected marker with opacity
        if(this.props.settings.marker.id == this.props.report.id) {
            if(this.state.opacity == 1) {
                this.setState({
                    opacity: .8
                })
            }
        } else {
            if(this.state.opacity == .8) {
                this.setState({
                    opacity: 1
                })
            }
        }
    }

    updateMarkerInfo = () => {
        this.props.openMarkerInfo()
        this.props.updateMarkerInfo(this.props.report)
        
    }

    render() {
        return (
            <Marker
                position={this.props.position}
                onClick={this.updateMarkerInfo}
                opacity={this.state.opacity}
                icon={iconMapping[this.props.report.disasterType]}
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