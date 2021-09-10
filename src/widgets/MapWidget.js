import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapWidget extends React.Component {
  render() {
    const mapStyles = {
      width: '100%',
      height: '300px',
    };

    let latitude = this.props.Latitud;
    let longitude = this.props.Longitud;
    if (latitude[latitude.length - 4] === '.') {
      const dotPosition = latitude.length - 4;
      latitude = latitude.slice(0, dotPosition) + latitude.slice(dotPosition + 1);
    }
    if (longitude[longitude.length - 4] === '.') {
      const dotPosition = longitude.length - 4;
      longitude = longitude.slice(0, dotPosition) + longitude.slice(dotPosition + 1);
    }

    return (
      <div>
        <Map
          google={this.props.google}
          zoom={17}
          style={mapStyles}
          containerStyle={{ position: 'relative' }}
          className='Map'
          disableDefaultUI={true}
          initialCenter={{ lat: latitude, lng: longitude }}
        >
          <Marker position={{ lat: latitude, lng: longitude }} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapWidget);
