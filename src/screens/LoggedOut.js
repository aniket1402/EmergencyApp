import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
} from "react-native";
import colors from "../styles/colors";
import RoundedButton from "../components/buttons/RoundedButton";
import Icon from "react-native-vector-icons/FontAwesome";
import { transparentHeaderStyle } from "../styles/navigation";
import NavBarButton from "../components/buttons/NavBarButtons";

const LoggedOut = (props) => {
    onFacebookPress = () => {
        alert("Facebook button");
    };

    onCreateAccountPress = () => {
        props.navigation.navigate("Signup");
    };

    onMoreOptionsPress = () => {
        alert("More options");
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.welcomeWrapper}>
                <Image
                    source={require("../img/car1.png")}
                    style={styles.logo}
                />
                <Text style={styles.welcomeText}>Welcome to LifeLine</Text>
                <RoundedButton
                    text="Continue with Facebook"
                    textColor={colors.darkBack}
                    background={colors.darkText}
                    icon={
                        <Icon
                            name="facebook"
                            size={20}
                            style={styles.facebookButtonIcon}
                        />
                    }
                    handleOnPress={onFacebookPress}
                />
                <RoundedButton
                    text="Create Account"
                    textColor={colors.darkText}
                    handleOnPress={onCreateAccountPress}
                />
                <TouchableHighlight
                    style={styles.moreOptionsButton}
                    underlayColor={"transparent"}
                    onPress={onMoreOptionsPress}
                >
                    <Text style={styles.moreOptionsButtonText}>
                        More Options
                    </Text>
                </TouchableHighlight>
                <View style={styles.termAndConditions}>
                    <Text style={styles.termsText}>
                        By tapping continue, Create Account or More
                    </Text>
                    <Text style={styles.termsText}> options, </Text>
                    <Text style={styles.termsText}>I agree to LifeLine's </Text>
                    <TouchableHighlight style={styles.linkButton}>
                        <Text style={styles.termsText}>Terms of service</Text>
                    </TouchableHighlight>
                    <Text style={styles.termsText}>, </Text>
                    <TouchableHighlight style={styles.linkButton}>
                        <Text style={styles.termsText}>
                            Payments Terms of service
                        </Text>
                    </TouchableHighlight>
                    <Text style={styles.termsText}>, </Text>
                    <TouchableHighlight style={styles.linkButton}>
                        <Text style={styles.termsText}>Privacy Policy</Text>
                    </TouchableHighlight>
                    <Text style={styles.termsText}> and </Text>
                    <TouchableHighlight style={styles.linkButton}>
                        <Text style={styles.termsText}>
                            Nondiscrimination Policy
                        </Text>
                    </TouchableHighlight>
                    <Text style={styles.termsText}>.</Text>
                </View>
            </View>
        </View>
    );
};

LoggedOut["navigationOptions"] = (props) => ({
    headerRight: () => (
        <NavBarButton
            handleButtonPress={() => props.navigation.navigate("Login")}
            location="right"
            color={colors.darkText}
            text="Log In"
        />
    ),
    headerStyle: transparentHeaderStyle,
    headerTintColor: colors.darkText,
});

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: "flex",
        backgroundColor: colors.darkBack,
    },
    welcomeWrapper: {
        flex: 1,
        display: "flex",
        marginTop: 50,
        padding: 30,
    },
    welcomeText: {
        fontSize: 30,
        color: colors.darkText,
        fontWeight: "300",
        marginBottom: 40,
    },
    facebookButtonIcon: {
        color: colors.darkBack,
        position: "relative",
        left: 20,
        zIndex: 8,
    },
    logo: {
        width: 100,
        height: 100,
        marginTop: 50,
        marginBottom: 40,
    },
    moreOptionsButton: {
        marginTop: 10,
        width: 125,
    },
    moreOptionsButtonText: {
        color: colors.darkText,
        fontSize: 16,
    },
    termAndConditions: {
        textAlign: "justify",
        flexWrap: "wrap",
        alignItems: "flex-start",
        flexDirection: "row",
        marginTop: 30,
    },
    termsText: {
        color: colors.darkText,
        fontSize: 13,
        fontWeight: "600",
    },
    linkButton: {
        borderBottomWidth: 1,
        borderBottomColor: colors.darkText,
    },
});

export default LoggedOut;
