module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/typescript'],
    plugins: [
         [
            '@babel/plugin-proposal-decorators',
            {
               'legacy': true

            }
         ],
         [
           'module-resolver',
           {
             root: ['./src'],
             extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
           }
         ]
      ]
  };
};
