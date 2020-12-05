import React, { useContext, useEffect } from "react";
import {Text} from "react-native";
import StepIndicator from "react-native-step-indicator";
import { PageContext, pages } from "../../App";
import {AntDesign, Ionicons } from "@expo/vector-icons";

function NavBar(props){
    const [state, dispatch] = useContext(PageContext);

    const indicatorStyles = {
        stepIndicatorSize: 35,
        currentStepIndicatorSize: 50,
        separatorStrokeWidth: 7,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: state.theme.brightRed,
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: state.theme.silver,
        stepStrokeUnFinishedColor: state.theme.silver,
        separatorFinishedColor: state.theme.silver,
        separatorUnFinishedColor: state.theme.silver,
        stepIndicatorFinishedColor: '#ffffff',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: state.theme.brightRed,
        stepIndicatorLabelFinishedColor: state.theme.silver,
        stepIndicatorLabelUnFinishedColor: state.theme.silver,
        labelColor: '#999999',
        labelSize: 13,
        currentStepLabelColor: state.theme.brightRed
    }

    // Store icons for the nav pages
    const icondDirectory = {
        "Demos": (size, color) => <AntDesign name={"calculator"} size={size} color={color} selectionColor={indicatorStyles.stepStrokeCurrentColor} />,
        "About Me": (size, color) => <Ionicons name={"md-person"} size={size} color={color} selectionColor={indicatorStyles.stepStrokeUnFinishedColor} />,
        "Homework": (size, color) => <AntDesign name={"filetext1"} size={size} color={color} selectionColor={indicatorStyles.stepStrokeUnFinishedColor} />,
        "Resume": (size, color) => <AntDesign name={"pdffile1"} size={size} color={color} selectionColor={indicatorStyles.stepStrokeUnFinishedColor} />,
        "Projects": (size, color) => <AntDesign name={"folder1"} size={size} color={color} selectionColor={indicatorStyles.stepStrokeUnFinishedColor} />
    }

    const index = props.pageArray.findIndex(pageName => pageName === pages[state.currentPage]);

    // Select the icon for the step
    const renderStepIcon = (args) => {
        const pageName = pages[args.position];
        return icondDirectory[pageName] ? 
               icondDirectory[pageName](args.stepStatus === "current" ? 30 : 20, args.stepStatus === "current" ? indicatorStyles.stepStrokeCurrentColor : 
               indicatorStyles.stepStrokeUnFinishedColor) : <Text>{pageName.charAt(0)}</Text>; 
    }

    const pressHandler = (index) => {
        dispatch({
            type: "viewPage",
            payload: index
        })
    }

    return (
        <StepIndicator 
            customStyles={indicatorStyles}
            currentPosition={index}
            labels={props.pageArray}
            renderStepIndicator={renderStepIcon}
            onPress={pressHandler}
        />
    );
}

export default NavBar;