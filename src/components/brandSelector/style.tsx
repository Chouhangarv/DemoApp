import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get('window');
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
BrandSelect:{
    alignItems:"center",
    justifyContent:"center"
},
dinner:{
    height:10,
    width:10,
    marginTop:30
    
}
})