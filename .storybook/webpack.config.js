const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css?$/,
        loaders: [ 'style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' ],
        include: path.resolve(__dirname, '../')
      },
      {
       test: /\.(jpg|png|gif)$/,
       loaders: [
         'file-loader',
         'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
       ],
     }
    ]
  }
}
