import React from 'react';
import {connect} from 'react-redux';

import Map from './Map';
import {startGetReports} from '../actions/reports';
import GOOGLE_MAP_KEY from '../hidden/api_keys';
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";

const gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
];
// const positions = [
//     {lat: 39.952305, lng: -75.192209},
//     {lat: 39.952238, lng: -75.192204},
// ];
const google = window.google;
// const p1 = new google.maps.LatLng(parseFloat(39.952305), parseFloat(-75.192209));
// const p2 = new google.maps.LatLng(39.952238, -75.192204);


class MapContainer extends React.Component {

    componentDidMount() {
        this.props.getReports();
    }

    render() {
        return (
            <div>
                <Map
                    reports={this.props.reports}
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_KEY}&v=3.exp&libraries=geometry,drawing,places,visualization`}
                    loadingElement={<div style={{height: `100%`}}/>}
                    containerElement={<div style={{height: `600px`, width: `100%`}}/>}
                    mapElement={<div style={{height: `100%`}}/>}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        reports: state.reports
    };
};

// retrieves reports for markers
const mapDispatchToProps = (dispatch) => ({
    getReports: () => dispatch(startGetReports())
});

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);