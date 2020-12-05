import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import Emergency from "./Emergency";
import PhoneCall from "./PhoneCall";
import colors from "../styles/colors";

const Help = ({ navigation }) => {
    return (
        <View>
            <View style={{ marginBottom: 20, marginRight: 10, marginLeft: 10 }}>
                <View style={styles.wrapper}>
                    <View style={styles.wrapper2}>
                        <View style={{ flexGrow: 1 }}>
                            <Text style={styles.text1}>Fortis Hospital</Text>
                            <Text style={styles.text2}>011-27637810</Text>
                        </View>
                        <View style={{ display: "flex" }}>
                            <View>
                                <PhoneCall contactNo={1234567890} />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.wrapper}>
                    <View style={styles.wrapper2}>
                        <View style={{ flexGrow: 1 }}>
                            <Text style={styles.text1}>Max Hospital</Text>
                            <Text style={styles.text2}>011-38735282</Text>
                        </View>
                        <View style={{ display: "flex" }}>
                            <View>
                                <PhoneCall contactNo={1234567890} />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.wrapper}>
                    <View style={styles.wrapper2}>
                        <View style={{ flexGrow: 1 }}>
                            <Text style={styles.text1}>Police Station</Text>
                            <Text style={styles.text2}>011-27453829</Text>
                        </View>
                        <View style={{ display: "flex" }}>
                            <View>
                                <PhoneCall contactNo={1234567890} />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.wrapper}>
                    <View style={styles.wrapper2}>
                        <View style={{ flexGrow: 1 }}>
                            <Text style={styles.text1}>
                                Emergency Contact 1 - 'Papa'
                            </Text>
                            <Text style={styles.text2}>9953785220</Text>
                        </View>
                        <View style={{ display: "flex" }}>
                            <View>
                                <PhoneCall contactNo={1234567890} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            {/* <View style={{ marginTop: 30, marginHorizontal: 30 }}>
                <Button
                    title="Emergency"
                    color={colors.green01}
                    onPress={() =>
                        navigation.navigate("Emergency", {
                            screen: "Emergency",
                        })
                    }
                />
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        marginTop: 50,
    },
    wrapper2: {
        display: "flex",
        flexDirection: "row",
    },
    text1: {
        // marginTop: 10,
        marginLeft: 10,
        fontSize: 22,
        fontWeight: "bold",
    },
    text2: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: "500",
    },
    button: {
        marginHorizontal: 50,
        marginTop: 30,
        backgroundColor: colors.green01,
        color: colors.green01,
    },
});

export default withNavigation(Help);
