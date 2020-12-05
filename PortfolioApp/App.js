import React, { useEffect, useReducer, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import ContactModal from "./components/ContactModal";
// import {} from "react-router";
//import Video from 'react-native-video';

// Component imports
import Carousel from "./components/Carousel";
import NavBar from './components/NavBar';
import NavLink from './components/NavLink';

// Data imports
import homework from "./homework.json";
import demos from "./demos.json";
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import projects from "./projects.json";

const pageData = {
  "Homework": homework,
  "Demos": demos,
  "Projects": projects
}

export const PageContext = React.createContext();

// Component styling ratios
export const componentSizes = {
    navbar: {
      container: {
        height: 0.15,
        width: 1
      },
      barContainer: {
        height: 0.15,
        width: 0.5
      }
    },
    carousel: {
      container: {
        height: 0.7,
        width: 1
      }
    },
    carouselCard: {
      container: {
        height: 0.7,
        width: 0.3
      }
    },
    navLink: {
      container: {
        width: 0.25,
        height: 0.125
      }
    },
    aboutMe: {
      container: {
        height: 0.8,
        width: 0.5
      }
    }
}

// Reducer for the page state
function pageStateReducer(state, action){
  switch(action.type){
    case "resizeWindow":
      return {
        ...state,
        windowSize: action.payload
      }
    case "viewPage":
      return {
        ...state,
        currentCard: 0,
        currentPage: action.payload
      }
    case "viewCard":
      if(action.payload === state.currentCard) return state;
      return {
        ...state,
        currentCard: action.payload
      }
    default:
      throw new Error(`Action type ${action.type} is not valid`);
  }
}

export const pages = ["About Me", "Resume", "Demos", "Projects", "Homework"];

// App component
export default function App() {

  const { height: windowHeight, width: windowWidth, fontScale } = useWindowDimensions();
  const [contactModal, showContactModal] = useState(false);

  // Page context for the app state
  const [state, dispatch] = useReducer(pageStateReducer, {
    windowSize: {
      height: windowHeight,
      width: windowWidth,
      fontSize: fontScale
    },
    theme: {
      black: "#000000",
      darkGrey: "#222222",
      darkRed: "#c62323",
      brightRed: "#e82727",
      darkRedTransparent: "rgba(198,35,35,0.8)",
      silver: "#adadad",
      grey: "#9f9f9f"
    },
    currentPage: 2,
    currentCard: 0
  });

  // Stylesheet
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: windowHeight,
      width: windowWidth,
      position: "absolute",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center"
    },
    background: {
      flex: 1,
      position: "absolute",
      height: windowHeight,
      width: windowWidth,
      backgroundColor: state.theme.black
    },
    navBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: windowWidth * componentSizes.navbar.container.width
    },
    navPanel: {
      backgroundColor: state.theme.darkGrey,
      width: windowWidth * componentSizes.navbar.barContainer.width,
      height: windowHeight * componentSizes.navbar.barContainer.height,
      paddingTop: windowHeight * componentSizes.navbar.barContainer.height * 0.25,
      alignSelf: "center"
    }
  }); 

  // Add event listener for when the winow resizes
  useEffect(() => {
    addEventListener("resize", () => {
      dispatch({
        type: "resizeWindow",
        payload: {
            height: windowHeight,
            width: windowWidth,
            fontSize: fontScale
        }
      });
    })
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <PageContext.Provider value={[state, dispatch]}>
        {/* Background */}
        <View style={styles.background}>
            {/* TO BE FIXED <Video 
              src={require("./assets/final_5fc31186bda2da008411c49f_466320.mp4")}
              style={styles.container}
            /> */}
        </View>

        {/* Container */}
        <View style={styles.container}>
          {/* NavBar */}
          <View style={styles.navBar}>
            <NavLink text={"Alec Greene"} />
            <View style={styles.navPanel}>
              <NavBar 
                pageArray={pages}
              />
            </View>
            <NavLink text={"Contact Me"} callback={() => {showContactModal(true)}}/>
          </View>

          {/* Content Body */}
          {
            ["Demos", "Homework", "Projects"].includes(pages[state.currentPage]) ? <Carousel data={pageData[pages[state.currentPage]]}/> : ( pages[state.currentPage] === "About Me" ? <AboutMe /> : <Resume />)
          }
        </View>
        <ContactModal 
          visible={contactModal} 
          callback={() => showContactModal(false)}/>
      </PageContext.Provider>
    </SafeAreaView>
  );
}

