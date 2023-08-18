const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const defaultAssetExts = require('metro-config/src/defaults/defaults').assetExts;
const defaultSourceExts = require('metro-config/src/defaults/defaults').sourceExts;

// /**
//  * Metro configuration
//  * https://facebook.github.io/metro/docs/configuration
//  *
//  * @type {import('metro-config').MetroConfig}
//  */


const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: [...defaultAssetExts, 'svg'], // Add 'svg' to the list of asset extensions
    sourceExts: [...defaultSourceExts, 'svg'], // Add 'svg' to the list of source extensions
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
