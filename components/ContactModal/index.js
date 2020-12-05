import React, { useContext } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { PageContext } from "../../App";
import * as Linking from "expo-linking";

function ContactModal(props){
    const [state, dispatch] = useContext(PageContext);

    const styles = StyleSheet.create({
        layer: {
            height: state.windowSize.height,
            width: state.windowSize.width,
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            display: props.visible ? "flex" : "none"
        },
        container: {
            height: state.windowSize.height * 0.8,
            width: state.windowSize.width * 0.6,
            margin: "auto",
            position: "absolute",
            backgroundColor: state.theme.darkRedTransparent,
            display: props.visible ? "flex" : "none"
        },
        header: {
            height: state.windowSize.height * 0.15,
            width: "100%",
            marginBottom: state.windowSize.height * 0.05
        },
        body: {
            height: state.windowSize.height * 0.60,
            width: "100%"
        },
        headerText: {
            textAlign: "center",
            color: state.theme.silver,
            fontSize: state.windowSize.height * 0.75 * 0.15 * 0.5
        },
        linkWrapper: {
            marginBottom: state.windowSize.height * 0.05,
            textAlign: "center"
        },
        label: {
            fontWeight: "bold",
            color: state.theme.silver,
            fontSize: state.windowSize.height * 0.75 * 0.15 * 0.35
        },
        link: {
            color: "silver",
            fontSize: state.windowSize.height * 0.75 * 0.15 * 0.25
        }
    });

    return (
        <Pressable style={styles.layer} onPress={props.callback}>
            <Pressable style={styles.container} onPress={event => event.stopPropagation()}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.headerText}>Reach out to me on one of these channels!</Text>
                </View>

                {/* Links */}
                <View style={styles.body}>
                    <Text style={styles.linkWrapper}>
                        <Text style={styles.label} onPress={() => Linking.openURL("https://github.com/AlecWGreene")}>GitHub</Text>
                    </Text>

                    <Text style={styles.linkWrapper}>
                        <Text style={styles.label} onPress={() => Linking.openURL("https://www.linkedin.com/in/alec-greene-29a5b41b4/")}>LinkedIn</Text>
                    </Text>

                    <Text style={styles.linkWrapper}>
                        <Text style={styles.label}>Email:</Text>  <Text style={styles.link} onPress={() => Linking.openURL("mailto:alecwgreene@gmail.com")}>alecwgreene@gmail.com</Text>
                    </Text>

                </View>
            </Pressable>
        </Pressable>
    );
}

export default ContactModal;