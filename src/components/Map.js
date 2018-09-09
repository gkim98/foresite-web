import React from 'react';
import {connect} from 'react-redux';
import {
    withGoogleMap, 
    GoogleMap, 
    DirectionsRenderer} from 'react-google-maps';
import MapMarker from './MapMarker';
import { closeMarkerInfo } from '../actions/settings';
import {compose, withProps} from "recompose";
import GOOGLE_MAP_KEY from '../hidden/api_keys';

const mapEnvironment = compose(
        withProps({
            containerElement: <div style={{ height: `600px`, width: `100%` }} />,
            mapElement: <div style={{ height: `100%` }} />
        }),
        withGoogleMap
    );

const MapLayout = (props) => {
    // creates markers from redux store
    const markers = props.reports.map((report, i) => {
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
        <GoogleMap
            defaultZoom={15}
            center={{lat: 39.951544406619306, lng: -75.19083540348124}}
            onClick={props.closeMarkerInfo}
        >
            {markers}
            {props.direction && <DirectionsRenderer directions={props.direction} />}
        </GoogleMap>
    );
}

const Map = mapEnvironment(MapLayout)

const mapStateToProps = (state) => {
    return {
        reports: state.reports
    };
};

// close marker info window when click off marker
const mapDispatchToProps = (dispatch) => ({
    closeMarkerInfo: () => dispatch(closeMarkerInfo())
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
