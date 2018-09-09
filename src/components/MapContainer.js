import React from 'react';
import { connect } from 'react-redux';

import Map from './Map';
import MarkerInfo from './MarkerInfo';
import { startGetReports } from '../actions/reports';
import { DirectionsRenderer } from 'react-google-maps';

const google = window.google;
class MapContainer extends React.Component {
    state = {
        directions: null
    }

    componentDidMount() {
        this.props.getReports();
    }

    componentDidUpdate() {
        this.createRoute()
    }

    createRoute = () => {
        console.log('createTriggered')
        console.log(this.props.settings.destination.longitude)
        console.log(this.state.directions)

        const DirectionsService = new google.maps.DirectionsService();  

        DirectionsService.route({
            origin: new google.maps.LatLng(39.9495, -75.193061),
            destination: new google.maps.LatLng(this.props.settings.destination.latitude, 
                this.props.settings.destination.longitude),
            travelMode: google.maps.TravelMode.DRIVING,
        }, (result, status) => {
            console.log(result);
            if (status === google.maps.DirectionsStatus.OK) {
                this.setState({
                    directions: result,
                });
            } else {
                console.error(`error fetching directions ${result}`);
            }
        });
    }

    render() {

        return (
            <div>
                { this.props.settings.showMarkerInfo && <MarkerInfo /> }
                <Map 
                    direction={this.state.directions}
                />
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
const mapDispatchToProps = (dispatch) => ({
    getReports: () => dispatch(startGetReports())
});

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);