import React, { useContext } from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { componentSizes, PageContext } from "../../App";

function NavLink(props){

    const [state, dispatch] = useContext(PageContext);

    const styles = StyleSheet.create({
        container: {
            height: state.windowSize.height * componentSizes.navLink.container.height,
            width: state.windowSize.height * componentSizes.navLink.container.width
        },
        text: {
            color: state.theme.silver,
            width: "100%",
            margin: "auto",
            textAlign: "center",
            fontSize: 24
        }
    });

    return (
        <TouchableWithoutFeedback style={styles.container} onPress={props.callback}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableWithoutFeedback>
    );
}

export default NavLink;