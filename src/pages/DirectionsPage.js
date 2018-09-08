import React, {Component} from 'react';
import MapWithADirectionsRenderer from '../components/Directions';
import GOOGLE_MAP_KEY from '../hidden/api_keys';

const originLat = 39.950467, originLng = -75.193714, destLat = 39.952647, destLng = -75.190943;

class DirectionsPage extends Component {
    render() {
        return (
            <div>
                <MapWithADirectionsRenderer coordinates
                />
            </div>
        );
    }
}

export default DirectionsPage;