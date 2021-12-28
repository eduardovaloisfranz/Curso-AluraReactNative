module.exports = function(api) {
  api.cache(true);  
  return {
    presets: ['babel-preset-expo'],
    plugins: [
     ['module-resolver', {
       root: ['.'],
       extensions: [
         '.ts',
         '.tsx',
          '.js',
          '.jsx',
          '.json',
          '.svg',
          '.jpg'
       ],
       alias: [
         {
            '*': './src',
            '@app': './src',
            '@assets': './assets',
            '@views': './src/views',
            '@shared': './src/shared',
         }
       ]
     }]
    ]
    // plugins: [
    //       [
    //          'module-resolver',
    //          {
    //            root: ['./src'],
    //            extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
    //            alias: {
    //              tests: ['./tests/'],
    //              "@components": ["./src/components"],
    //              "@shared" : ['./src/Shared']
                 
    //            }
    //          }
    //      ]
    //     ]
  };
};
