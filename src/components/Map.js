import React from 'react';
import { connect } from 'react-redux';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import MapMarker from './MapMarker';

const Map = withScriptjs(withGoogleMap((props) => {

    const markers = props.points.map((point, i) => (
        <MapMarker
            key={i}
        />
    ));

    return (
        <GoogleMap
            defaultZoom={14}
            center={{lat: 42.3601, lng: -71.0589}}
        >

        </GoogleMap>
    );
})) 

const mapStateToProps = (state) => {
    return {
        points: state.points
    };
};

export default connect(mapStateToProps)(Map);
