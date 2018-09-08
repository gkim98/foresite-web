import React, {Component} from 'react';
import MapWithADirectionsRenderer from '../components/Directions';
import GOOGLE_MAP_KEY from '../hidden/api_keys';

class DirectionsPage extends Component {
    render() {
        return (
            <div>
                <MapWithADirectionsRenderer
                />
            </div>
        );
    }
}

export default DirectionsPage;