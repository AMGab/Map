import React, {Component} from 'react';
import './App.css';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import leafGreen from './assets/tennis.jpeg';
import leafRed from './assets/tennis.jpeg';
import leafOrange from './assets/tennis.jpeg';
import leafShadow from './assets/leaf-shadow.png';

window.navigator.geolocation.getCurrentPosition(
  position => console.log(position),
  err => console.log(err)
)

class App extends Component {
  
  state = {
    greenIcon: {
      lat: 63.419362,
      lng: 10.402789,
    },
    redIcon: {
      lat: 63.416456,
      lng: 10.398370,
    },
    orangeIcon: {
      lat: 63.410661,
      lng: 10.469140,
    },
    zoom: 13
  }


  grenIcon = L.icon({
    iconUrl: leafGreen,
    shadowUrl: leafShadow,
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76]
  });

  redIcon = L.icon({
    iconUrl: leafRed,
    shadowUrl: leafShadow,
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -86]
  });

  orangeIcon = L.icon({
    iconUrl: leafOrange,
    shadowUrl: leafShadow,
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -86]
  });

  render(){
    const positionRedIcon = [this.state.redIcon.lat, this.state.redIcon.lng];
    const positionGreenIcon = [this.state.greenIcon.lat, this.state.greenIcon.lng];
    const positionOrangeIcon = [this.state.orangeIcon.lat, this.state.orangeIcon.lng];
    return (
      <Map className="map" center={positionGreenIcon} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={positionGreenIcon} icon={this.grenIcon}>
          <Popup>
          GLoshogen should have navigation
          </Popup>
        </Marker>
        <Marker position={positionRedIcon} icon={this.redIcon}>
          <Popup>
          teknobyen
          </Popup>
        </Marker>
        <Marker position={positionOrangeIcon} icon={this.orangeIcon}>
          <Popup>
          Dragvoll
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default App;
