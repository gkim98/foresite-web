import React from 'react';
import { connect } from 'react-redux';

import Map from './Map';
import { startGetReports } from '../actions/reports';
import GOOGLE_MAP_KEY from '../hidden/api_keys';

class MapContainer extends React.Component {

    componentDidMount() {
        this.props.getReports();
    }

    render() {
        return (
            <div>
                <Map 
                    reports={this.props.reports}
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `600px`, width: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        reports: state.reports
    };
};

const mapDispatchToProps = (dispatch) => ({
    getReports: () => dispatch(startGetReports())
});

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);