import React, { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { componentSizes, PageContext } from "../../App";
import * as Linking from 'expo-linking';

function CarouselCard(props){
    const [state, dispatch] = useContext(PageContext);

    const styles = StyleSheet.create({
        container: {
            position: "absolute",
            height: state.windowSize.height * componentSizes.carouselCard.container.height,
            width: state.windowSize.width * componentSizes.carouselCard.container.width,
            backgroundColor: (props.active) ? state.theme.darkRedTransparent : state.theme.brightRedTransparent,
            transform: [
                { translateX: props.position + state.windowSize.width * componentSizes.carousel.container.width / 2},
                { rotateY: `${props.rotation}deg` }
            ]
        },
        header: {
            height: state.windowSize.height * componentSizes.carouselCard.container.height * 1/9,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: state.theme.darkGrey,
            borderColor: state.theme.silver,
            borderWidth: state.windowSize.height * componentSizes.carouselCard.container.height * 0.004,
        },
        body:{
            height: state.windowSize.height * componentSizes.carouselCard.container.height * 8 / 9,
            height: "auto",
            paddingHorizontal: state.windowSize.width * componentSizes.carouselCard.container.width * 0.04,
            paddingTop: state.windowSize.height * componentSizes.carouselCard.container.height * 0.02
        },
        headerText: {
            width: "100%",
            textAlign: "center",
            color: state.theme.silver,
            fontSize: state.windowSize.height * componentSizes.carouselCard.container.height * 1/9 * 0.5
        },
        bodyParagraph:{
            fontSize: state.windowSize.height * componentSizes.carouselCard.container.height * 1/9 * 0.2,
            marginTop: state.windowSize.height * componentSizes.carouselCard.container.height * 1/9 * 0.1,
            marginBottom: state.windowSize.height * componentSizes.carouselCard.container.height * 1/9 * 0.15,
            color: state.theme.grey
        },
        linkText: {
            color: state.theme.darkGrey
        },
        linkLabel: {
            color: state.theme.grey,
            fontWeight: "bold"
        }
    });

    const pressHandler = (index) => {
        return () => dispatch({
            type: "viewCard",
            payload: index
        });
    }

    const renderContent = () => {
        switch(props.data[1].contentType){
            case "text":
                return <>
                    {/* Links */}
                    {
                        !props.data[1].deployment ? undefined : <Text style={styles.linkText}><Text style={styles.linkLabel}>Deployment:</Text> <Text onPress={() => Linking.openURL(props.data[1].deployment)}>{props.data[1].deployment}</Text> </Text>
                    }
                    <Text style={styles.linkText}><Text style={styles.linkLabel}>Repository:</Text> <Text onPress={() => Linking.openURL(props.data[1].repository)}>{props.data[1].repository}</Text> </Text>

                    {/* Text Body */}
                    {
                        props.data[1].content.split("<br />").map((text, index) => {
                            return <Text style={styles.bodyParagraph} key={index}>
                                {text}
                            </Text>
                        })
                    }
                </>
            default:
                return <Text>Content Not Found</Text>
        }
    }

    return (
        <View style={[styles.container]}>
            {/* Header */}
            <TouchableHighlight style={styles.header} onPress={pressHandler(props.index)}>
                <Text style={styles.headerText}> {props.data[0]} </Text>
            </TouchableHighlight>

            {/* Body */}
            {
                props.scrollable ?
                <ScrollView style={styles.body}>
                    {
                        !props.active ? undefined :
                        <>
                            {
                                renderContent()
                            }
                        </>
                    }
                </ScrollView>
                :
                <View style={styles.body}>
                    {
                        !props.active ? undefined :
                        <>
                            {
                                renderContent()
                            }
                        </>
                    }
                </View>
            }
        </View>
    );
}

export default CarouselCard;