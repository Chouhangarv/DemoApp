import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CommonIncDecBotton from '../../commonComponent/CommonIncDecBotton';
import ParentFlatlistHeader from './ParentFlatlistHeader';
import Footer from './Footer';
import {styles} from './styles';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const back = require('../../../assets/images/ic_back/ic_back.png');
const detail = require('../../../assets/images/ic_detail/ic_detail.png');
const ic_sprit = require('../../../assets/images/ic_sprit/ic_sprit.png');
const icBackground = require('../../../assets/images/ic_detailBackground/ic_detailBackground.png');
const ItemDetailScreen = () => {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(0);
  const drinkList = [
    {id: 1, name: 'Sprite', price: '$1.51 ', image: ic_sprit, quantity: 0},
    {id: 2, name: 'Fenta', price: '$1.51 ', image: ic_sprit, quantity: 0},
    {id: 3, name: 'Coke', price: '$1.51 ', image: ic_sprit, quantity: 0},
  ];

  const renderBevrage = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: '5%',
      }}>
      <View>
        <Image source={item.image} />
      </View>
      <View style={{marginLeft: '10%'}}>
        <View>
          <Text>{item.name}</Text>
        </View>
        <View style={{marginTop: 10}}>
          <Text>{item.price}</Text>
        </View>
      </View>
      <View style={{flex: 1}} />
      <View>
        <CommonIncDecBotton value={item.quantity} />
      </View>
    </View>
  );

  const IncDecQuantity = value => {
    if (value == 1) {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Image
        resizeMode="stretch"
        style={styles.backgroundImgStyle}
        source={icBackground}
      />
      <View style={styles.subContainer}>
        <TouchableOpacity
          style={styles.backButtonStyle}
          onPress={() => navigation.goBack()}>
          <View>
            <Image source={back} />
          </View>
          <View>
            <Text>Back</Text>
          </View>
        </TouchableOpacity>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={drinkList}
          ListHeaderComponent={
            <ParentFlatlistHeader quantity={quantity} detail={detail} />
          }
          ListFooterComponent={<Footer />}
          renderItem={renderBevrage}
        />
        <TouchableOpacity 
        style={styles.addCardBtnStyle}
        >
          <Text>Add to card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemDetailScreen;
