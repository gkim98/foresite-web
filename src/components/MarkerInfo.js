import React from 'react';
import './MarkerInfo.css';
import { connect } from 'react-redux';

class MarkerInfo extends React.Component {

    render() {
        return (
            <div className='marker-info'>
                <p>{this.props.marker.latitude}</p>
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

export default connect(mapStateToProps)(MarkerInfo);
