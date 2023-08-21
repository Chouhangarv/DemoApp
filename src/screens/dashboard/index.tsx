import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
const demo1 = require('../../../assets/images/ic_demo1/ic_demo1.png');
const demo2 = require('../../../assets/images/ic_demo2/ic_demo2.png');
const logo = require('../../../assets/images/brandLogo/brandLogo.png');
const menu1 = require('../../../assets/images/ic_menu1/ic_menu1.png');
const menuItem = require('../../../assets/images/ic_menuItem/ic_menuItem.png');
const data = [
  {id: 1, name: 'Dora Taqueria', image: demo1},
  {id: 2, name: 'Barrio Bolws', image: demo2},
  {id: 2, name: 'Barrio Bolws', image: demo1},
];

const brandMenu = [
  {id: 1, name: 'Tacos', image: menu1},
  {id: 2, name: 'Tortillas', image: menu1},
  {id: 3, name: 'Salsas', image: menu1},
  {id: 4, name: 'Bebidas', image: menu1},
];

const itemData = [
  {id: 1, name: 'Carne Asada', price: '8$', image: menuItem},
  {id: 2, name: 'Carnitas', price: '8$', image: menuItem},
  {id: 3, name: 'Al Pastor', price: '8$', image: menuItem},
  {id: 4, name: 'Pescado', price: '8$', image: menuItem},
];

const DashboardScreen = () => {
  const navigation = useNavigation();

  const renderBrand = ({item}) => (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        marginLeft: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 59,
      }}>
      <View>
        <Image source={item.image} />
      </View>
      <View style={{borderWidth: 1, marginTop: 14}}>
        <Text>{item.name}sdasdf sdfs</Text>
      </View>
    </TouchableOpacity>
  );

  const renderMenu = ({item}) => (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        marginTop: '20%',
        paddingHorizontal: 37,
        paddingVertical: 20,
      }}>
      <View>
        <Image source={item.image} />
      </View>
      <View>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderFoods = ({item}) => (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => navigation.navigate('ItemDetailScreen')}>
      <View>
        <Image source={item.image} />
      </View>
      <View>
        <Text>{item.name}</Text>
      </View>
      <View>
        <Text>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{width: '100%', height: '100%'}}>
      <View style={{height: 283, width: '100%', borderWidth: 1}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{borderWidth: 1, flex: 1}} />
          <View style={{borderWidth: 1, flex: 2}}>
            <View style={{marginTop: 33}}>
              <Text>Select another store</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <FlatList
                style={{marginTop: 10}}
                horizontal={true}
                data={data}
                renderItem={renderBrand}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', flex: 1, borderWidth: 1}}>
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image style={{position: 'absolute', top: '-15%'}} source={logo} />
          <FlatList
            style={{marginTop: '40%'}}
            data={brandMenu}
            renderItem={renderMenu}
          />
        </View>
        <View style={{flex: 2, borderWidth: 1}}>
          <View style={{marginTop: '10%', marginBottom: '10%'}}>
            <Text>Popular</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <FlatList numColumns={2} data={itemData} renderItem={renderFoods} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default DashboardScreen;
