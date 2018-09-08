import GOOGLE_MAP_KEY from '../hidden/api_keys';
import React, {Component} from 'react';
import {compose, withProps, lifecycle} from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    DirectionsRenderer,
} from "react-google-maps";

const google = window.google;
const MapWithADirectionsRenderer = (coordinates) =>compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=" + GOOGLE_MAP_KEY + "&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{height: `100%`}}/>,
        containerElement: <div style={{height: `800px`}}/>,
        mapElement: <div style={{height: `100%`}}/>,
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
        componentDidMount() {
            const DirectionsService = new google.maps.DirectionsService();
            DirectionsService.route({
                origin: new google.maps.LatLng(originLat, originLng),
                destination: new google.maps.LatLng(destLat, destLng),
                travelMode: google.maps.TravelMode.DRIVING,
                provideRouteAlternatives: true,
            }, (results, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    console.log(results);
                    console.log(results.routes);
                    results.routes.shift();
                    console.log(results.routes);
                    for (var i = 0; i < results.routes.length; i++) {
                        console.log(results.routes[i]);
                    }
                    this.setState({
                        directions: results,
                        directionsRenderer: <DirectionsRenderer directions={results}/>,
                    });
                } else {
                    console.error(`error fetching directions ${results}`);
                }
            });
        }
    })
)(props =>
    <GoogleMap
        defaultZoom={7}
        defaultCenter={new google.maps.LatLng((originLat + destLat) / 2, (originLng + destLng) / 2)}
    >
        {props.directions && props.directionsRenderer}
    </GoogleMap>
);
export default MapWithADirectionsRenderer;