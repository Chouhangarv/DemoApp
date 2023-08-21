import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window');
const scaleFactor = Math.min(width, height) / 1000; // Adjust the base width (320) as needed

export const styles=StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
    },
    bg:{ // Adjust the multiplier to control the image's size relative to the screen width
        height: '100%',    // Height will adjust based on the aspect ratio
        width:"100%",
        position:"absolute"
    },
    dinner:{
        height:72 * scaleFactor,
        width:72 * scaleFactor,
        marginTop:"10%",
        marginLeft:"5%"
        
    },
    brands:{
        height:"80%",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center"

     },
     blocks:{
        height:372 * scaleFactor,
        width:270 * scaleFactor,
        marginTop:"15%",
        borderWidth:1,
        backgroundColor:"#FFFFFF",
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center"
        
     }
     ,items:{
        width:"60%",
        height:"70%",
        flexDirection:"row",
        justifyContent:"space-around",   
     },
     description:{
        marginBottom:"5%",
        fontWeight:"700",
        fontSize:40 * scaleFactor,
        color:"#15ABB1",
        fontFamily:"Poppins-Medium",
        textAlign:"center"
     },
     indicatorIcon:{
        height:145 * scaleFactor,
        width:126 * scaleFactor
     },
     body:{
        fontFamily:"Poppins-Medium",
        fontWeight:"500",
        fontSize:40 * scaleFactor,
        color:"#042C5C"
     },
     copyRight:{
        fontFamily:"Poppins-Medium",
        fontWeight:"300",
        fontSize:18 * scaleFactor,
        color:"#626264",
        bottom:0,
        justifyContent:"center"

     },
     copyrightView:{
        height:"10%",
        alignItems:"center",
        justifyContent:"center"
     }
     
    })