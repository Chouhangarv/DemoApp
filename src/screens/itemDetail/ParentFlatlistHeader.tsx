import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import CommonIncDecBotton from '../../commonComponent/CommonIncDecBotton';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const ParentFlatlistHeader = props => {
  return (
    <>
      <View
        style={{
          width: screenWidth - 80,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 71,
        }}>
        <View>
          <Text>Tacos al pastor</Text>
        </View>
        <View>
          <Image source={props.detail} />
        </View>
        <View>
          <Text>Add more</Text>
        </View>
        <View style={{marginTop: '1%'}}>
          <CommonIncDecBotton
            value={props.quantity}
            onPressAdd={props.IncDecQuantity}
            onPressMinus={props.IncDecQuantity}
          />
        </View>
      </View>
      <View style={{borderWidth: 1, padding: 36}}>
        <View>
          <Text>Description</Text>
        </View>
        <View style={{marginTop: '5%'}}>
          <Text>
            Tacos al pastor are a Mexican classic, featuring thin slices of pork
            marinated in spices and chilies.  Cooked on a vertical spit
            ('trompo'), the meat caramelizes and is served on corn tortillas
            with onion, cilantro, and pineapple, offering a delicious blend of
            flavors and textures.
          </Text>
        </View>
        <View>
          <Text>Drinks</Text>
        </View>
      </View>
    </>
  );
};

export default ParentFlatlistHeader;