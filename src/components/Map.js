/*global google*/
import React from 'react';
import {connect} from 'react-redux';
import {
    withScriptjs, 
    withGoogleMap, 
    GoogleMap,
    DirectionsRenderer } from 'react-google-maps';
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";

import MapMarker from './MapMarker';
import MarkerInfo from './MarkerInfo';
import { closeMarkerInfo } from '../actions/settings';
import {compose, withProps} from "recompose";
import GOOGLE_MAP_KEY from '../hidden/api_keys';

const options = {
    'gradient': [
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
    ],
    'radius': 100,
    'opacity': 0.8
};

const mapEnvironment = compose(
    withProps({
        containerElement: <div style={{ height: `600px`, width: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withGoogleMap
);

const MapLayout = (props) => {
    const data = [];
    // creates markers from redux store
    const markers = props.reports.map((report, i) => {
        
        // console.log(report);
        data.push(new google.maps.LatLng(report.latitude, report.longitude));
        return (
            <MapMarker
                key={i}
                report={report}
                position={{lat: report.latitude, lng: report.longitude}}
            />
        )
    });

    console.log(props.direction)

    return (
        <div>
            <GoogleMap
                defaultZoom={15}
                center={{lat: 39.951544406619306, lng: -75.19083540348124}}
                onClick={props.closeMarkerInfo}
            >
                {markers}
                <HeatmapLayer
                    options={options}
                    data={data}
                />
                {props.direction && <DirectionsRenderer directions={props.direction} />}
            </GoogleMap>
        </div>

    );
}

const Map = mapEnvironment(MapLayout)

const mapStateToProps = (state) => {
    return {
        reports: state.reports,
        settings: state.settings
    };
};

// close marker info window when click off marker
const mapDispatchToProps = (dispatch) => ({
    closeMarkerInfo: () => dispatch(closeMarkerInfo())
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
