import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
const ic_minus = require('../../assets/images/ic_minus/ic_minus.png');
const ic_plus = require('../../assets/images/ic_plus/ic_plus.png');

const CommonIncDecBotton = props => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={props.onPressAdd}>
        <Image source={ic_plus} />
      </TouchableOpacity>
      <TextInput
        value={props.value.toString()}
        editable={false}
        style={{fontSize:30, textAlign:'center', minWidth: 50,justifyContent:'center',alignItems:'center'}}
      />
      <TouchableOpacity onPress={props.onPressMinus}>
        <Image source={ic_minus} />
      </TouchableOpacity>
    </View>
  );
};

export default CommonIncDecBotton;
