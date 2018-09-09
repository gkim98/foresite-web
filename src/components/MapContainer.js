import React from 'react';
import {connect} from 'react-redux';
import {DirectionsRenderer} from 'react-google-maps';
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";

import Map from './Map';
import MarkerInfo from './MarkerInfo';
import { watchReportAddedEvent } from '../actions/reports';

const google = window.google;
class MapContainer extends React.Component {
    state = {
        directions: null,
        mapLat: 39.951544406619306,
        mapLong: -75.19083540348124
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.createRoute(prevProps.settings.destination.uniqueID, 
            this.props.settings.destination.uniqueID)
    }

    createRoute = (prevDest, currDest) => {
        if(this.props.settings.destination.uniqueID != null 
            && (prevDest != currDest)) {
            const DirectionsService = new google.maps.DirectionsService();  

            DirectionsService.route({
                origin: new google.maps.LatLng(39.950436, -75.193884),
                destination: new google.maps.LatLng(this.props.settings.destination.latitude, 
                    this.props.settings.destination.longitude),
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
    }

    render() {
        return (
            <div>
                { this.props.settings.showMarkerInfo && <MarkerInfo /> }
                <Map 
                    direction={this.state.directions}
                />
                {this.props.settings.showMarkerInfo && <MarkerInfo/>}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        reports: state.reports,
        settings: state.settings
    };
};

// retrieves reports for markers
const mapDispatchToProps = (dispatch) => {
    dispatch(watchReportAddedEvent())
    return { }
};

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);