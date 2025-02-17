import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import MapView, { MAP_TYPES, ProviderPropType } from "react-native-maps";
import { Marker } from "react-native-maps";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = (width * 100) / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class Return extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    };
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  animateRandom() {
    this.map.animateToRegion(this.randomRegion());
  }

  randomCoordinate() {
    return {
      latitude: 40.7128,
      longitude: -74.006,
    };
  }

  randomRegion() {
    return {
      ...this.state.region,
      ...this.randomCoordinate(),
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          // provider={this.props.provider}
          ref={(ref) => {
            this.map = ref;
          }}
          mapType={MAP_TYPES.TERRAIN}
          style={styles.map}
          initialRegion={this.state.region}
          onRegionChange={(region) => this.onRegionChange(region)}
        >
          <Marker
            coordinate={{
              latitude: 40.7128,
              longitude: -74.006,
            }}
          />
        </MapView>
        <View style={[styles.bubble, styles.latlng]}>
          <Text style={{ textAlign: "center" }}>
            {this.state.region.latitude.toPrecision(7)},
            {this.state.region.longitude.toPrecision(7)}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.animateRandom()}
            style={[styles.bubble, styles.button]}
          >
            <Text style={styles.buttonText}>Animate (Region)</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Return.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: "stretch",
  },
  button: {
    width: 100,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "transparent",
  },
  buttonText: {
    textAlign: "center",
  },
});

export default Return;
