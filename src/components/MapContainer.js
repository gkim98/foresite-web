import React from 'react';
import { connect } from 'react-redux';

import Map from './Map';
import MarkerInfo from './MarkerInfo';
import { startGetReports } from '../actions/reports';
import { DirectionsRenderer } from 'react-google-maps';

class MapContainer extends React.Component {
    componentDidMount() {
        this.props.getReports();
    }

    render() {

        return (
            <div>
                { this.props.settings.showMarkerInfo && <MarkerInfo /> }
                <Map 
                    //reports={this.props.reports}
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