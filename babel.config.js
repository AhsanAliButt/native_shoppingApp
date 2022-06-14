// const path = require('path');
// const pak = require('../package.json');

// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: [
//     [
//       'module-resolver',
//       {
//         extensions: ['.tsx', '.ts', '.js', '.json'],
//         alias: {
//           [pak.name]: path.join(__dirname, '..', pak.source),
//         },
//       },
//     ],
//     'react-native-reanimated/plugin',
//   ],
// };

// const path = require('path');
// const pak = require('../package.json');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['react-native-reanimated/plugin'],
  // plugins: [
  //   [
  //     'module-resolver',
  //     {
  //       extensions: ['.tsx', '.ts', '.js', '.json'],
  //       alias: {
  //         [pak.name]: path.join(__dirname, '..', pak.source),
  //       },
  //     },
  //   ],
  //   'react-native-reanimated/plugin',
  // ],
};
