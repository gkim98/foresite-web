import React, {Component} from 'react';
import Map from '../components/Map';
import GOOGLE_MAP_KEY from '../hidden/api_keys';

class MapPage extends Component {
  render() {
    return (
      <div>
        <Map 
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `600px`, width: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default MapPage;