import React, { Component } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

export default class Home extends Component {
    state = {
        mapRegion: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        locationResult: null,
        location: { coords: { latitude: 37.78825, longitude: -122.4324 } },
    };

    componentDidMount() {
        this._getLocationAsync();
    }

    // _handleMapRegionChange = mapRegion => {
    //   this.setState({ mapRegion });
    // };

    _getLocationAsync = async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== "granted") {
            this.setState({
                locationResult: "Permission to access location was denied",
                location,
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        console.log(location);
        this.setState({ locationResult: JSON.stringify(location), location });
    };

    render() {
        return (
            <View>
                <View>
                    <MapView
                        // style={{ alignSelf: 'stretch', height: '100%' }}
                        style={styles.mapStyle}
                        region={{
                            latitude: this.state.location.coords.latitude,
                            longitude: this.state.location.coords.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        // onRegionChange={this._handleMapRegionChange}
                        // customMapStyle={mapStyle}
                    >
                        <Marker
                            coordinate={this.state.location.coords}
                            title="Safe Driving"
                            description="You are here"
                        >
                            <Image
                                source={require("../img/marker.jpg")}
                                style={{ height: 50, width: 50 }}
                            />
                        </Marker>
                    </MapView>
                    <View style={styles.textWrapper}>
                        <Text style={styles.text}>You Are Safe!!!</Text>
                    </View>
                </View>

                {/* <Text style={{zIndex: 5044}}>
                Location: {this.state.locationResult}
            </Text> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        fontWeight: "bold",
        // marginTop: 60,
    },
    textWrapper: {
        position: "absolute",
        width: "100%",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.15)",
        borderRadius: 50,
    },
    mapStyle: {
        width: "100%",
        height: "100%",
    },
});
