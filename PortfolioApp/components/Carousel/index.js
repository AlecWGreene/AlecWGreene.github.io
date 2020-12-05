import React, { useContext } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { PageContext, componentSizes } from "../../App";
import CarouselCard from "../CarouselCard";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

function convertDegreeToRad(angle){
    return angle * Math.PI / 180;
}

function Carousel(props){
    
    const [state, dispatch] = useContext(PageContext);
    const data = Object.entries(props.data);

    const styles = StyleSheet.create({
        container: {
            height: state.windowSize.height * componentSizes.carousel.container.height,
            width: state.windowSize.width * componentSizes.carousel.container.width,
            marginBottom: state.windowSize.height * 0.07,
            overflow: "hidden"
        }
    });
    
    const currentCard = state.currentCard;
    const startAngle = 60;
    const deltaAngle = 4;
    const maxAngle = 85;
    const numSteps = Math.floor((maxAngle - startAngle) / deltaAngle);
    const width = state.windowSize.width * componentSizes.carouselCard.container.width;

    // Swipe handlers
    const moveRight = () =>{
        const plusOne = state.currentCard + 1;
        const newIndex = (plusOne >= data.length) ? (data.length - 1) : plusOne;
        dispatch({
            type: "viewCard", 
            payload: newIndex
        });
    }

    const moveLeft = () =>{
        const plusOne = state.currentCard - 1;
        const newIndex = (plusOne < 0) ? 0 : plusOne;
        dispatch({
            type: "viewCard", 
            payload: newIndex
        });
    }

    return (
        <View style={styles.container}>
            <GestureRecognizer onSwipeLeft={moveRight} onSwipeRight={moveLeft}>
                {
                    data.map((entry, index, arr) => {
                        // Calculate the angle
                        const indexDifference = Math.abs(index - currentCard) < (numSteps + 1) ? (index - currentCard) : numSteps;
                        const angle = (index === currentCard) ? 0 : (Math.abs(indexDifference) < numSteps ? (startAngle + Math.abs(indexDifference) * deltaAngle) : maxAngle);

                        // Calculate the position
                        let position = -width * Math.cos(convertDegreeToRad(angle)) / 2;
                        if(index < currentCard){
                            for(let i = index + 1; i <= currentCard; i++){
                                const tempDifference = Math.abs(i - state.currentCard) < (numSteps + 1) ? (i - state.currentCard) : numSteps;
                                const tempAngle = (i === currentCard) ? 0 : (Math.abs(tempDifference) < numSteps ? (startAngle + Math.abs(tempDifference) * deltaAngle) : maxAngle);

                                position -= width * Math.cos(convertDegreeToRad(tempAngle));
                            }
                        }
                        else if(index > currentCard){
                            for(let i = currentCard + 1; i <= index; i++){
                                const tempDifference = Math.abs(i - currentCard) < (numSteps + 1) ? (i - currentCard) : numSteps;
                                const tempAngle = (i === currentCard) ? 0 : (Math.abs(tempDifference) < numSteps ? (startAngle + Math.abs(tempDifference) * deltaAngle) : maxAngle);
                        
                                position += width * Math.cos(convertDegreeToRad(tempAngle));
                            }
                        }

                        return <CarouselCard 
                                    active={index === currentCard}
                                    scrollable={state.currentPage === 2 || state.currentPage === 3}
                                    index={index}
                                    position={position} 
                                    rotation={angle} 
                                    data={entry}
                                    key={entry[0]}/>
                    })
                }
            </GestureRecognizer >
        </View>
    );
}

export default Carousel;