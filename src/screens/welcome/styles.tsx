import React from 'react';
import {StyleSheet} from 'react-native';
import {FONTS, COLOURS} from '../../utils/Constants';
export const styles = StyleSheet.create({
  mainContainerStyle: {
    width: '100%',
    height: '100%',
  },
  backgroundImageStyle: {
    width: '100%',
    height: '100%',
  },
  appLogoStyle: {
    marginTop: 94,
    marginLeft: 94,
  },
  welcomeTextStyle: {
    color: COLOURS.skyBule,
    fontFamily: 'popins',
    fontSize: 38,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  selectBrandTextStyle: {
    color: COLOURS.darkblack,
    fontFamily: 'popins',
    fontSize: 38,
    fontStyle: 'normal',
    fontWeight: '300',
  },
});
