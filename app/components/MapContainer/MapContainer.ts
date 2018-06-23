import PropTypes from "prop-types";
import React, { Component } from "react";
import Mapbox from '@mapbox/react-native-mapbox-gl';

class MapContainer extends Component {
  static propTypes = {
    deliveries: PropTypes.array
  };

  componentWillMount() {
  }


  render() {
    return (
      <View style={styles.container}>
        <Mapbox.MapView
            styleURL={Mapbox.StyleURL.Street}
            zoomLevel={15}
            centerCoordinate={[11.256, 43.770]}
            style={styles.container}>
        </Mapbox.MapView>
      </View>
    );
  }
}

export default MapContainer
