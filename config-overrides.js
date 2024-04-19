//override 函数用于包装并修改 CRA 默认的 Webpack 配置
//addLessLoader 函数用于在 Webpack 配置中添加 Less 支持
const { override, addLessLoader, addWebpackAlias,adjustStyleLoaders } = require('customize-cra');
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true, //启用 Less 支持 JavaScript 特性，通常用于引用 JavaScript 中的变量和函数。
      relativeUrls: false, //禁用相对路径 URL，通常在构建后的 CSS 文件中使用绝对路径的 URL。
      //modifyVars: { '@primary-color': '#A80000' }, //修改 Less 变量 @primary-color 的值为 #A80000，这是 Ant Design 中常用的一种主题色。这个配置选项允许你在 Less 文件中使用 Less 变量，并修改其默认值。
    }
  }),
  //配置postcss转换器
  adjustStyleLoaders(({ use: [, , postcss]}) => {
    const postcssOptions = postcss.options;
    postcss.options = { postcssOptions };
  }),
  // 配置路径别名
  addWebpackAlias({
    "@": resolve("src"),
  }),
)