import React from 'react';
import './MarkerInfo.css';
import {connect} from 'react-redux';
import {updateRouteDestination} from '../actions/settings';

class MarkerInfo extends React.Component {

    render() {
        return (
            <div className='marker-info'>
                <h3>{this.props.marker.disasterType==='request' ? 'Request type:' : 'Disaster type:' }</h3>
                <p>{this.props.marker.disasterType==='request' ? 'medical' : this.props.marker.disasterType}</p>

                <h3>Coordinates:</h3>
                <p>[{this.props.marker.latitude}, {this.props.marker.longitude}]</p>
                
                <h3>Time:</h3>
                <p>{this.props.marker.time}</p>

                <button onClick={() => {
                    this.props.updateRouteDestination(this.props.marker)
                }}>Route Here
                </button>
            </div>
        )
    }
}

// access the currently clicked marker
const mapStateToProps = (state) => {
    return {
        marker: state.settings.marker
    };
};

// change route destination in store
const mapDispatchToProps = (dispatch) => {
    return {
        updateRouteDestination: (marker) => dispatch(updateRouteDestination(marker))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MarkerInfo);
