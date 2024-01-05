module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  //plugins: [
  //  ["babel-plugin-react-docgen-typescript", { exclude: "node_modules" }],
  //],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@': './src',
          '@screens/*': ['screens/*'],
          '@components/*': ['components/*'],
          '@apis/*': ['apis/*'],
          '@assets/*': ['assets/*'],
          '@constants/*': ['constants/*'],
          '@hooks/*': ['hooks/*'],
          '@models/*': ['models/*'],
          '@navigators/*': ['navigator/*'],
          '@screens/*': ['screens/*'],
          '@services/*': ['services/*'],
          '@stores/*': ['stores/*'],
          '@styles/*': ['styles/*'],
          '@types/*': ['types/*'],
          '@utils/*': ['utils/*'],
        },
      },
    ],
  ],
};
