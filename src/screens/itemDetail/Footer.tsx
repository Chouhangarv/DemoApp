import React from 'react';
import {View, TextInput} from 'react-native';
import {COLOURS} from '../../utils/Constants';
const Footer = () => {
  return (
    <View style={{paddingHorizontal: '5%',marginTop:'5%',marginBottom:60}}>
      <TextInput style={{borderWidth: 1,height:241,borderRadius:9,borderColor:COLOURS.skyBule}} />
    </View>
  );
};

export default Footer;
