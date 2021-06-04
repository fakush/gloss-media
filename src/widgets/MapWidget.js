import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class MapWidget extends React.Component {
  render() {
    const mapStyles = {
      width: "100%",
      height: "100%",
    };

    const latitude = parseFloat(this.props.Latitud);
    const longitude = parseFloat(this.props.Longitud);
    
    return (
        <Map
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          containerStyle={{position: 'relative'}}
          className="Map"
          disableDefaultUI={true}
          center={{lat: {latitude} , lng: {longitude} }}
        >
          <Marker position={{lat: {latitude}, lng: {longitude} }} />
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapWidget);
