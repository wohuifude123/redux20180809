// 引入dev-server配置文件
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// a third party
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const manifest = require('./service/dist/vendor-manifest.json');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common.baseConfig, {
    output: { //打包路径
        //filename: '[name].bundle.js', //出口文件名
        // filename: '[name].[chunkhash].js',
        // 可以使用__dirname变量获取当前模块文件所在目录的完整绝对路径
        path: __dirname + 'service/dist', //打包路径
        publicPath:'dist/', // 指定publicPath
        filename: '[name].bundle.js',
        library: manifest.name
    },
    devtool: 'source-map',
    devServer: {
        contentBase: [path.join(__dirname, './service')], // 本地服务器 加载页面 所在的目录
        host: '127.0.0.1',
        compress: true,
        port: 6600,
        open: false // 将自动打开浏览器
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(), // 热加载的插件，使用缓存时请注释
        new BundleAnalyzerPlugin({
            analyzerMode: 'server', // static/disabled
            analyzerHost: '127.0.0.1',
            analyzerPort: 9900,
            openAnalyzer: false
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./service/dist/vendor-manifest.json')
        }),
    ]
});

console.log('服务器执行的环境')


let operateFile = require('child_process');
var ip = '1.1.1.1';
var username = 'test';
var password = 'pwd';
var newpassword = 'newpwd';
operateFile.execFile('./configuration-dev.sh',['-H', ip, '-U', username, '-P', password, '-N', newpassword],null,function (err, stdout, stderr) {
	//callback(err, stdout, stderr);
});





