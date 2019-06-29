import React, { Component } from 'react';
import {
  View, StyleSheet, Dimensions, PermissionsAndroid,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Geolocation from 'react-native-geolocation-service';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.003;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const mapOptions = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 2000,
};

const coordinates = [{ latlng: { latitude: 6.6713353603071, longitude: 3.1596442312002186 } },
  { latlng: { latitude: 6.6713409503070995, longitude: 3.1597242312002187 } },
  { latlng: { latitude: 6.6713465403071, longitude: 3.159804231200219 } },
  { latlng: { latitude: 6.6713521303071, longitude: 3.1598842312002184 } },
  { latlng: { latitude: 6.6713577203071, longitude: 3.1599642312002185 } },
  { latlng: { latitude: 6.6713633103070995, longitude: 3.1600442312002186 } },
  { latlng: { latitude: 6.6713689003071, longitude: 3.1601242312002187 } },
  { latlng: { latitude: 6.6713744903071, longitude: 3.1602042312002188 } },
  { latlng: { latitude: 6.6713800803071, longitude: 3.160284231200219 } },
  { latlng: { latitude: 6.6713856703070995, longitude: 3.1603642312002185 } },
  { latlng: { latitude: 6.6712153603071, longitude: 3.1596442312002186 } },
  { latlng: { latitude: 6.6712209503071, longitude: 3.1597242312002187 } },
  { latlng: { latitude: 6.6712265403071, longitude: 3.159804231200219 } },
  { latlng: { latitude: 6.6712321303071, longitude: 3.1598842312002184 } },
  { latlng: { latitude: 6.6712377203071, longitude: 3.1599642312002185 } },
  { latlng: { latitude: 6.6712433103071, longitude: 3.1600442312002186 } },
  { latlng: { latitude: 6.6712489003071, longitude: 3.1601242312002187 } },
  { latlng: { latitude: 6.6712544903071, longitude: 3.1602042312002188 } },
  { latlng: { latitude: 6.6712600803071, longitude: 3.160284231200219 } },
  { latlng: { latitude: 6.6712656703071, longitude: 3.1603642312002185 } }];

class Find extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      // mapLoading: true,
      // locationServiceStatus: 'online',
    };
    const self = this;

    this.requestLocationPermission();
    Geolocation.getCurrentPosition(
      (result) => {
        self.setState({
          latitude: result.coords.latitude,
          longitude: result.coords.longitude,
          // locationServiceStatus: 'online',
        });
        self.setState({
          mapLoading: false,
        });
      },
      () => {
        self.setState({
          mapLoading: false,
          locationServiceStatus: 'offline',
        });
      },
      mapOptions,
    );
  }

  async requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const self = this;
        Geolocation.getCurrentPosition(
          (result) => {
            self.setState({
              latitude: result.coords.latitude,
              longitude: result.coords.longitude,
              locationServiceStatus: 'online',
            });
            self.setState({
              mapLoading: false,
            });
          },
          () => {
            self.setState({
              mapLoading: false,
              locationServiceStatus: 'offline',
            });
          },
          mapOptions,
        );
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }


  render() {
    const {
      // mapLoading,
      // locationServiceStatus,
      latitude,
      longitude,
    } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          key={0}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          region={{
            latitude,
            longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          style={styles.map}
        >
          {coordinates.map(marker => (
            <Marker
              coordinate={marker.latlng}
            >
              <Icon name="circle" color="orange" solid />
            </Marker>
          ))}
        </MapView>
      </View>

    );
  }
}

export default Find;
