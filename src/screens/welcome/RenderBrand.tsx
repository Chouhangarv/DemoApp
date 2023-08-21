import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {FONTS, COLOURS} from '../../utils/Constants';
const RenderBrand = props => {
  return (
    <DropShadow
      style={{
        shadowColor: "grey",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
      }}
    >
    <View style={{padding: 10,width:273, backgroundColor:COLOURS.white, marginLeft:50,marginVertical:5,borderTopRightRadius:20,borderTopLeftRadius:20,borderBottomLeftRadius:5,borderBottomRightRadius:5}}>
      <View>
        <Image source={props.item.image} />
      </View>
      <View>
        <Text>{props.item.name}</Text>
      </View>
    </View>
    </DropShadow>
  );
};

export default RenderBrand;


