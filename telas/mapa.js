import React from 'react';
// import { MapView } from 'expo';
import MapView from 'react-native-maps';
import Carregando from "../recursos/Carregando";

export default class App extends React.Component {
  
  render() {

    const { loading, email, username, name, perfil, jwt } = this.state;
      
    if (loading){
      return(
        <Carregando />
      );
    } else {
    return (
        <MapView
        style={{ flex: 1 }}
        region={{
          latitude: 40.76727216,
          longitude: -73.99392888,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
    >
            {this.state.isLoading ? null : this.state.markers.map((marker, index) => {
         const coords = {
             latitude: marker.latitude,
             longitude: marker.longitude,
         };
    
         const metadata = `Status: ${marker.statusValue}`;
         return (
             <MapView.Marker
                key={index}
                coordinate={coords}
                title={marker.stationName}
                description={metadata}
             />
         );
      })}
    </MapView>
    );
  }
}

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      markers: [],
      loading: true
    };
  }

  componentDidMount() {
    this.fetchMarkerData();
  }

  fetchMarkerData() {
    fetch('https://feeds.citibikenyc.com/stations/stations.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ 
          isLoading: false,
          markers: responseJson.stationBeanList, 
          loading: false
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

}
