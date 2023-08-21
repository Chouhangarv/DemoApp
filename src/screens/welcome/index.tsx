import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {constantImages} from '../../../assets/imageFile';
import {styles} from './styles';
import {DummyBrandName, constants, FONTS, COLOURS} from '../../utils/Constants';
import RenderBrand from './RenderBrand';
import {useNavigation} from '@react-navigation/native';
import CommonBottomSheet from '../../commonComponent/CommonBottomSheet';
import ItemDetailScreen from '../itemDetail/index';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height - 122;
const snapPoints = [screenHeight, screenHeight ];
const WelcomeScreen = () => {
  const navigation = useNavigation();
  const child = useRef();

  useEffect(() => {
    child.current.childFunction1();
  }, []);

  const renderItems = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('OrderPreferenceScreen')}>
      <RenderBrand item={item} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.mainContainerStyle}>
      <ImageBackground
        resizeMode="stretch"
        source={constantImages.ic_appBackground}
        style={styles.backgroundImageStyle}>
        <Image style={styles.appLogoStyle} source={constantImages.ic_appLogo} />
        <View style={{flex: 0.7}} />
        <View
          style={{
            alignSelf: 'center',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View>
            <Text style={styles.welcomeTextStyle}>{constants.WELCOME}</Text>
          </View>
          <View>
            <Text style={styles.selectBrandTextStyle}>
              {constants.SELECT_BRAND}
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 111,
          }}>
          <FlatList
            horizontal={true}
            data={DummyBrandName}
            renderItem={renderItems}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={{flex: 2}} />
      </ImageBackground>
      <CommonBottomSheet
        ref={child}
        snapPoints={snapPoints}
        // onBackdropPress={() => setIsSheetOpen(false)}
        children={<ItemDetailScreen />}
      />
    </View>
  );
};

export default WelcomeScreen;
