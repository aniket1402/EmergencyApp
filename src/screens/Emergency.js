import React, { useEffect, useState } from "react";
import MapView, { Marker, Polygon } from "react-native-maps";
import { StyleSheet, Text, View } from "react-native";
import { API_KEY } from "../../API";

const Emergency = () => {
    // global. x;
    const currLat = 29.97519;
    const currLng = 76.844;
    const [datas, setDatas] = useState([]);
    const [data0, setData0] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const [data4, setData4] = useState([]);
    const getResult = async () => {
        try {
            const hospitalObject = await fetch(
                `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${currLat},${currLng}&radius=500&type=hospital&accuracy=high&sensor=true&key=${API_KEY}`
            );
            const hospitals = await hospitalObject.json();
            // console.log("\n\n\nHello 1")
            // console.log(hospitals.results[7].types)
            const arr = [];
            for (let index = 0; index < hospitals.results.length; index++) {
                const element = hospitals.results[index].geometry.location;
                arr.push(element);
            }
            setDatas(arr);
            setData0(hospitals.results[0].geometry.location);
            setData1(hospitals.results[10].geometry.location);
            setData2(hospitals.results[1].geometry.location);
            setData3(hospitals.results[6].geometry.location);
            setData4(hospitals.results[2].geometry.location);
            // console.log(x)
        } catch (err) {
            console.log("Error fetching data-----------", err);
        }
    };

    useEffect(() => {
        getResult();
    }, []);

    function compare(a, b) {
        // console.log(a.lat)
        if (a.dist < b.dist) {
            return -1;
        }
        if (a.lat > b.lat) {
            return 1;
        }
        return 0;
    }

    const closestHospitals = [];

    function findNearset(datas) {
        for (let i = 0; i < datas.length; i++) {
            const temp = {};
            const x = datas[i].lat;
            const y = datas[i].lng;
            const dist = (currLat - x) ** 2 + (currLng - y) ** 2;
            temp["dist"] = dist;
            temp["lat"] = x;
            temp["lng"] = y;
            closestHospitals.push(temp);
        }
    }

    const data = [data0, data1, data2, data3, data4];
    // data.sort(compare)
    findNearset(datas);
    closestHospitals.sort(compare);
    // console.log(closestHospitals[0].lat)
    const hsp = [
        {
            name: "1",
            latitude: parseFloat(JSON.stringify(data[0].lat)),
            longitude: parseFloat(JSON.stringify(data[0].lng)),
        },
        {
            name: "2",
            latitude: parseFloat(JSON.stringify(data[2].lat)),
            longitude: parseFloat(JSON.stringify(data[2].lng)),
        },
        {
            name: "3",
            latitude: parseFloat(JSON.stringify(data[1].lat)),
            longitude: parseFloat(JSON.stringify(data[1].lng)),
        },
        {
            name: "4",
            latitude: parseFloat(JSON.stringify(data[4].lat)),
            longitude: parseFloat(JSON.stringify(data[4].lng)),
        },
        {
            name: "5",
            latitude: parseFloat(JSON.stringify(data[3].lat)),
            longitude: parseFloat(JSON.stringify(data[3].lng)),
        },
    ];
    // console.log(hsp)

    const state = {
        coordinates1: [
            { name: "1", latitude: data0.lat, longitude: data0.lng },
            { name: "2", latitude: data1.lat, longitude: data1.lng },
            { name: "3", latitude: data2.lat, longitude: data2.lng },
            { name: "4", latitude: data3.lat, longitude: data3.lng },
            { name: "5", latitude: data4.lat, longitude: data4.lng },
        ],
        coordinates2: [
            { name: "1", latitude: 37.8025259, longitude: -122.4351431 },
            { name: "2", latitude: 37.7946386, longitude: -122.421646 },
            { name: "3", latitude: 37.7665248, longitude: -122.4165628 },
            { name: "4", latitude: 37.7834153, longitude: -122.4527787 },
            { name: "5", latitude: 37.7948105, longitude: -122.4596065 },
            { name: "6", latitude: 37.78825, longitude: -122.4324 },
        ],
    };

    return (
        <View>
            <View style={styles.main}>
                <Text style={styles.text}>Stay Calm</Text>
                <Text style={styles.text}>Help is on the way</Text>
            </View>
            <View style={styles.container}>
                <MapView
                    region={{
                        latitude: currLat,
                        longitude: currLng,
                        latitudeDelta: 0.0122,
                        longitudeDelta: 0.0021,
                    }}
                    style={styles.mapStyle}
                >
                    <Polygon coordinates={hsp} />
                    <Marker
                        coordinate={{ latitude: currLat, longitude: currLng }}
                        title="you"
                    />
                    <Marker
                        coordinate={{
                            latitude: parseFloat(JSON.stringify(data0.lat)),
                            longitude: parseFloat(JSON.stringify(data0.lng)),
                        }}
                        title="Help Center"
                    />
                    <Marker
                        coordinate={{
                            latitude: parseFloat(JSON.stringify(data1.lat)),
                            longitude: parseFloat(JSON.stringify(data1.lng)),
                        }}
                        title="Help Center"
                    />
                    <Marker
                        coordinate={{
                            latitude: parseFloat(JSON.stringify(data2.lat)),
                            longitude: parseFloat(JSON.stringify(data2.lng)),
                        }}
                        title="Help Center"
                    />
                    <Marker
                        coordinate={{
                            latitude: parseFloat(JSON.stringify(data3.lat)),
                            longitude: parseFloat(JSON.stringify(data3.lng)),
                        }}
                        title="Help Center"
                    />
                    <Marker
                        coordinate={{
                            latitude: parseFloat(JSON.stringify(data4.lat)),
                            longitude: parseFloat(JSON.stringify(data4.lng)),
                        }}
                        title="Help Center"
                    />
                </MapView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        fontWeight: "900",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    main: {
        marginTop: 20,
        marginBottom: 50,
    },
    container: {
        margin: 20,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "black",
        borderWidth: 5,
    },
    mapStyle: {
        width: 310,
        height: 330,
    },
});

export default Emergency;
