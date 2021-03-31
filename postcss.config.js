module.exports = {
  plugins: [
    require('postcss-import'),
    require('precss'),
    // require('postcss-modules'),
    require('autoprefixer'),
    require('postcss-utilities'), // utils
    require('postcss-sorting'),
  ],
};
