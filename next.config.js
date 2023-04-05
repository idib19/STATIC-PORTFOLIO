/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  images: {
    unoptimized : true,
    loader: 'custom',
    loaderFile: './image-loader.js'
  },

  experimental:{
    fontLoaders:[
      {
        loader:'@next/font/google', options: {subsets:['latin']}
      }
    ]
  }
}

// expermiental objet de configuration
