module.exports = function(api) {
  api.cache(true);  
  return {
    presets: ['babel-preset-expo'],
    plugins: [
     ['module-resolver', {
       extensions: [
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
        '.android.js',
        '.android.tsx',
        '.ios.js',
        '.ios.tsx',
        '.jpg',
        '.png',
        ],
        alias: [
          {
            '*': './src',
            '@app': './src',
            '@assets': './assets',
            '@views': './src/views',
            '@shared': './src/shared',
          }
        ],
        //root: ['.'],
      }]
    ]
  };
};
