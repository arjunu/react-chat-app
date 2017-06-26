const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.config.js");

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {color: true},
}).listen(5000, "0.0.0.0", function (error) {
    if(error)
        console.error(error);

    console.info("Listening at localhost:5000");
});