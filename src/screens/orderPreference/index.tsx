import React from 'react';
import {Image, TouchableOpacity, Text, View} from 'react-native';

import {styles} from './styles';
// import {constantImages} from '../../assets/imageFile';

const takeOut = require('../../../assets/images/takeout/takeout.png');
const dining = require('../../../assets/images/dinning/dinning.png');
const appBackground = require('../../../assets/images/ic_appBackground/ic_appBackground.png');
import {useNavigation} from '@react-navigation/native';

export default function OrderPreferenceScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image resizeMode="stretch" source={appBackground} style={styles.bg} />
      <Image source={dining} style={styles.dinner} />
      <View style={styles.brands}>
        <Text style={styles.description}>What do you Prefer to eat</Text>
        <View style={styles.items}>
          <TouchableOpacity
            style={styles.blocks}
            onPress={() => navigation.navigate('DashboardScreen')}>
            <Image style={styles.indicatorIcon} source={takeOut} />
            <Text style={styles.body}>Take out</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.blocks}
            onPress={() => navigation.navigate('DashboardScreen')}>
            <Image style={styles.indicatorIcon} source={dining} />
            <Text style={styles.body}>Dinning</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.copyrightView}>
        <Text style={styles.copyRight}>
          Copyright © 2010-2023 Kiosk Company S.L. All rights reserved
        </Text>
      </View>
    </View>
  );
}
