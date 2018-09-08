import React from 'react';
import { connect } from 'react-redux';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import MapMarker from './MapMarker';
import MarkerInfo from './MarkerInfo';
import { closeMarkerInfo } from '../actions/settings';

const Map = withScriptjs(withGoogleMap((props) => {

    // creates markers from redux store
    const markers = props.reports.map((report, i) => {
        console.log(report)
        return (
            <MapMarker
                key={i}
                report={report}
                position={{lat: report.latitude, lng: report.longitude}}
            />
        )
    });

    return (
        <div>
            { props.settings.showMarkerInfo && <MarkerInfo /> }
            <GoogleMap
                defaultZoom={15}
                center={{lat: 39.951544406619306, lng: -75.19083540348124}}
                onClick={props.closeMarkerInfo}
            >
                {markers}
            </GoogleMap>
        </div>
        
    );
})) 

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
