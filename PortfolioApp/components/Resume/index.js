import React, { useContext } from "react";
import { StyleSheet, View, Text, ScrollView, SectionList } from "react-native";
//import Pdf from "react-native-pdf"; 
import { PageContext, componentSizes } from "../../App";
//import WebView from "react-native-webview";
import * as Linking from "expo-linking";
import { AntDesign } from "@expo/vector-icons";

function Resume(props){
    const [state, dispatch] = useContext(PageContext);

    const styles=StyleSheet.create({
        container: {
            height: state.windowSize.height * componentSizes.aboutMe.container.height,
            width: state.windowSize.width * componentSizes.aboutMe.container.width,
            paddingTop: state.windowSize.height * componentSizes.aboutMe.container.height * 0.02,
            paddingHorizontal: state.windowSize.height * componentSizes.aboutMe.container.height * 0.03,
            marginBottom: state.windowSize.height * componentSizes.aboutMe.container.height * 0.1,
            marginTop: state.windowSize.height * componentSizes.aboutMe.container.height * 0.05,
            backgroundColor: state.theme.darkGrey
        },
        textHeader: {
            color: state.theme.silver,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "5%"
        },  
        text: {
            color: state.theme.silver
        },
        linkText: { 
            color: state.theme.grey
        },
        listContainer: {
            flex:1, 
            height: "100%", 
            flexDirection:"column", 
            alignItems: "center"
        },
        listHeader: {
            color: state.theme.silver,
            marginLeft: "2%",
            marginBottom: "3%",
            fontWeight: "bold"
        },
        listText: {
            color: state.theme.silver,
            marginLeft: "10%",
            marginBottom: "1.5%",
            fontStyle: "italic"
        }
    });

    const itemRenderer = ({item}) => {
        return (
            <Text style={styles.listText}><AntDesign name="tool" size={14} color={state.theme.brightRed} />  {item}</Text>
        );
    };

    const headerRenderer = ({section}) => {
        return (
            <Text style={styles.listHeader}><AntDesign name="codesquare" size={14} color={state.theme.darkRed} />  {section.title}</Text>
        );
    }

    return (
        <View style={styles.container}>
            {/* <Pdf 
                source={{uri: "bundle-assets://Alec_Greene_Resume.pdf"}}
            /> */}

            {/* <WebView 
                injectedJavaScript={true}
                javaScriptEnabled={true}
                originWhitelist={['*']}
                allowsInlineMediaPlayback={true}
                source={{uri: "http://docs.google.com/gview?embedded=true&url=http://www.africau.edu/images/default/sample.pdf"}}
            /> */}
            <ScrollView style={{height: "80%"}}>
                <View style={{width: "100%", flexDirection: "row"}}>
                    <View style={styles.listContainer}>
                        <Text style={styles.textHeader}>Programming Languages</Text> 
                        <SectionList
                            sections={[
                                {title: "C#", data: ["5+ full Udemy courses", "7 completed Unity projects", "1 Xamarin application"]},
                                {title: "JavaScript", data: ["6-month Full Stack Web Development Bootcamp through Michigan State University", "My Portfolio (React-Native)"]},
                                {title: "C++", data: ["EECS 180 at University of Michigan", "UofM Camp CAEN", "1 Unreal Engine 4 project"]}
                            ]}
                            renderItem={itemRenderer}
                            renderSectionHeader={headerRenderer}
                            render
                            keyExtractor={(item, index)=>index}
                        />
                    </View>
                    
                    <View style={styles.listContainer}>
                        <Text style={styles.textHeader}>Development Software</Text>
                        <SectionList
                            sections={[
                                {title: "Unity 3D", data: ["5+ full Udemy courses (well over 100 hours)", "7 completed Unity projects", "Completed majority of the tutorials from the youtube channels CodeMonkey and Brackeys"]},
                                {title: "Unreal Engine 4", data: ["Finishing a tech demo", "Completed the main tutorial from Make Games with Katie (4+ hours)"]},
                                {title: "Blender", data: ["Rendered a 3D model of a lightsaber", "Completed the introductory tutorial from the youtube channel Blender Guru (5+ hours)", "Completed the lighting video playlist form Blender Guru"]}
                            ]}
                            renderItem={itemRenderer}
                            renderSectionHeader={headerRenderer}
                            render
                            keyExtractor={(item, index)=>index}
                        />
                    </View>

                    <View style={styles.listContainer}>
                        <Text style={styles.textHeader}>Practical Skills</Text>
                        <SectionList
                            sections={[
                                {title: "Self Learning", data: ["Subjects include but not limited to: Calculus 1-4, RegEx, TypeScript, Blender, React-Native, and Tensorflow", "Well versed in reading documentation from the numerous APIs I've worked with", "Adept at finding resources to learn complex skills"]},
                                {title: "Mathematical Analysis", data: ["Studied a long list of fields including: Linear Algebra, Topology, Group Theory, and Differential Manifolds", "Performed academic research multiple times which required problem solving of the highest level", "Wrote a 15 page research paper which required strategy and endurance to execute"]},
                                {title: "Project Management", data: ["Lead development of 2/3 team projects for the bootcamp I attended, as well as designed the wireframes, sitemap, and API structure for the second project I wasn't the lead on", "Extensive experience outlining code architecture, making UML diagrams, and wireframing graphics rendering using many different tools"]}
                            ]}
                            renderItem={itemRenderer}
                            renderSectionHeader={headerRenderer}
                            render
                            keyExtractor={(item, index)=>index}
                        />
                    </View>
                </View>
            </ScrollView>

            <Text style={[styles.textHeader, { marginTop: "0%", marginBottom: "1%"}]}>Link to document:</Text> <Text style={[styles.linkText, { textAlign: "center", paddingBottom: "1.5%"}]}>https://drive.google.com/file/d/1HF8a9SV1PlUHIL7wSlXnKdrYu4m7fQzE/view?usp=sharing</Text> 
        </View>
    );
}

export default Resume;