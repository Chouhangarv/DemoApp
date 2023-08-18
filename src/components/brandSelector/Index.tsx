import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { styles } from './style'
import { constantImages } from '../../assets/images/Images'

export default function BrandSelect() {

  return (
    <SafeAreaView style={styles.container}>
      <Image source={constantImages.landingBackground} style={styles.bg}></Image>

    </SafeAreaView>
  )
}

