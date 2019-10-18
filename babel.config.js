const IS_PROD = ['production'].includes(process.env.NODE_ENV)
const plugins = [];
if(IS_PROD) {
  plugins.push('transform-remove-console') // 配置移除打印
}
module.exports = {
  presets: [  '@vue/app' ],
  plugins
}
