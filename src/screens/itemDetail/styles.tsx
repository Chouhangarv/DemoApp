import {StyleSheet, Dimensions} from 'react-native';
import {COLOURS} from '../../utils/Constants';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
export const styles = StyleSheet.create({
  mainContainer: {
    width: screenWidth,
    height: screenHeight - 122,
    borderWidth: 1,
    paddingHorizontal: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    width: screenWidth - 80,
    height: screenHeight - 172,
    borderWidth: 1,
  },
  backgroundImgStyle: {
    position: 'absolute',
    width: screenWidth,
    height: screenHeight,
  },
  backButtonStyle: {
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
  },
  addCardBtnStyle: {
    width:500,
    height: 85,
    
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    bottom:50,
    backgroundColor:COLOURS.skyBule,
    borderRadius:9
  },
});
