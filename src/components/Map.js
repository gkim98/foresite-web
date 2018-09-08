import React from 'react';
import {connect} from 'react-redux';
import {
    withScriptjs, 
    withGoogleMap, 
    GoogleMap, 
    DirectionsRenderer} from 'react-google-maps';
import MapMarker from './MapMarker';
import { closeMarkerInfo } from '../actions/settings';
import {compose, withProps, lifecycle} from "recompose";
import GOOGLE_MAP_KEY from '../hidden/api_keys';

const google = window.google;
const mapEnvironment = compose(
        withProps({
            googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_KEY}&v=3.exp&libraries=geometry,drawing,places`,
            loadingElement: <div style={{ height: `100%` }} />,
            containerElement: <div style={{ height: `600px`, width: `100%` }} />,
            mapElement: <div style={{ height: `100%` }} />
        }),
        //withScriptjs,
        withGoogleMap,
        lifecycle({
            componentDidMount() {
                console.log(google)
                const DirectionsService = new google.maps.DirectionsService();
          
                DirectionsService.route({
                    origin: new google.maps.LatLng(41.8507300, -87.6512600),
                    destination: new google.maps.LatLng(41.8525800, -87.6514100),
                    travelMode: google.maps.TravelMode.DRIVING,
                }, (result, status) => {
                    if (status === google.maps.DirectionsStatus.OK) {
                        this.setState({
                            directions: result,
                        });
                    } else {
                        console.error(`error fetching directions ${result}`);
                    }
                });
            }
        })
    );

const MapLayout = (props) => {
    // creates markers from redux store
    // const markers = props.reports.map((report, i) => {
    //     return (
    //         <MapMarker
    //             key={i}
    //             report={report}
    //             position={{lat: report.latitude, lng: report.longitude}}
    //         />
    //     )
    // });

    return (
        <GoogleMap
            defaultZoom={15}
            center={{lat: 39.951544406619306, lng: -75.19083540348124}}
            onClick={props.closeMarkerInfo}
        >
            {props.directions && <DirectionsRenderer directions={props.directions} />}
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
