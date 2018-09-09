/*global google*/
import React from 'react';
import {connect} from 'react-redux';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    DirectionsRenderer
} from 'react-google-maps';
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";

import MapMarker from './MapMarker';
import MarkerInfo from './MarkerInfo';
import { closeMarkerInfo } from '../actions/settings';
import { watchTaskAddedEvent } from '../actions/reports';
import {compose, withProps} from "recompose";
import GOOGLE_MAP_KEY from '../hidden/api_keys';

const hasNotSeenOptions = {
    'gradient': [
        'rgba(255, 255, 255, 0)',
        'rgb(232,232,246)',
        'rgb(209,209,236)',
        'rgb(185,185,227)',
        'rgb(162,162,218)',
        'rgb(139,139,209)',
        'rgb(116,116,199)',
        'rgb(93,93,190)',
        'rgb(70,70,181)',
        'rgb(46,46,172)',
        'rgb(23,23,162)',
        'rgb(0,0,153)'
    ],

    'radius': 50,
    'opacity': 0.8
};
const hasSeenOptions = {

    'radius': 50,
    'opacity': 0.8
};

const mapEnvironment = compose(
    withProps({
        containerElement: <div style={{height: `90vh`, width: `100%`}}/>,
        mapElement: <div style={{height: `100%`}}/>
    }),
    withGoogleMap
);

const MapLayout = (props) => {
    const hasNotSeenData = [];
    const hasSeenData = [];
    // creates markers from redux store
    const markers = props.reports.map((report, i) => {
        if (report.hasSeen) {
            hasSeenData.push(new google.maps.LatLng(report.latitude, report.longitude));
        }
        else {
            hasNotSeenData.push(new google.maps.LatLng(report.latitude, report.longitude));
        }
        // console.log(report);
        return (
            <MapMarker
                key={report.id}
                report={report}
                position={{lat: report.latitude, lng: report.longitude}}
            />
        )
    });

    return (
        <div>
            <GoogleMap
                defaultZoom={17}
                center={{lat: 39.951544406619306, lng: -75.19083540348124}}
                onClick={props.closeMarkerInfo}
            >
                {markers}
                <HeatmapLayer
                    options={hasNotSeenOptions}
                    data={hasNotSeenData}
                />
                <HeatmapLayer
                    options={hasSeenOptions}
                    data={hasSeenData}
                />
                {props.direction && <DirectionsRenderer directions={props.direction}/>}
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
const mapDispatchToProps = (dispatch) => { 

    watchTaskAddedEvent(dispatch)
    
    return {
        closeMarkerInfo: () => dispatch(closeMarkerInfo())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
