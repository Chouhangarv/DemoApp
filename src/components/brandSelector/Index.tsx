import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { styles } from './style'
import { constantImages } from '../../assets/images/Images'

export default function BrandSelect() {

  return (
    <View style={styles.container}>
      <Image resizeMode='stretch' source={constantImages.landingBackground} style={styles.bg}></Image>
     <Image source={constantImages.dinner} style={styles.dinner}></Image>
      <View style={styles.BrandSelect}>
      <Text style={{fontFamily:"Poppins-SemiBold"}}>Hello</Text>
      </View>
    </View>
  )
}

