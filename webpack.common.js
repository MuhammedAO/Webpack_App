const path = require('path');

module.exports = {
    entry:{
        main:"./src/index.js",
        vendor: "./src/vendor.js"
    },
    plugins: [],
    module: {
    rules: [
   
    {
     test: /\.html$/,
     use: ["html-loader"]
    },
    {
        test: /\.(svg|jpg|png|gif)$/,
        use:{
         loader:"file-loader",
         options:{
             name:"[name].[hash].[ext]",
             outputPath:"imgs"
         }
        }
    }
    
    ],
}
};