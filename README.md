# 所使用额外包
1.react-app-rewired

2.less CSS的高级写法,LESS

3.customize-cra 不破坏脚手架,修改webpack配置

4.react-router-dom 6.22 路由跳转

5.react-helmet-async  head头信息管理,async分支用支持react16+ (弃用react-document-title与react-helmet)

6.Autoprefixer  LESS的单位PX和REM单位的转换

7.axios 是一个基于Promise的HTTP库，用于发起HTTP请求

8.mockjs 假请求假数据，是一款模拟数据生成器，可以生成随机数据，拦截 Ajax 请求

# 所使用的额外组件
1.redux  全局状态管理  这里使用Redux Toolkit(官方推荐的编写 Redux 逻辑的方法)

2.redux-thunk 可以在action里写方法,如果action返回的是一个函数,那么执行他,否则直接执行,这样我们可以在里面做异步等操作

# 版本的选择问题
antd4.X版本更好的支持低版本内核浏览器， CSS IN JS的方式在低版本浏览器上运行很慢，国内不太流行这种（CSS IN JS对于组件化很好，但是对于规范可读性，不是很赞同使用这种）

TypeScript替换JavaScript

# 组件顺序
组件内部的顺序为 props=> state => Hooks => 内部 function => 其他逻辑 =>effects=> JSX

# CSS样式问题
不使用Jsconfig Less-load覆盖,改为使用APP.less做修改,任何参数修改此文件,做到动态的修改

# 插件推荐
路径跳转插件，用于@符号跳转
CSS Peek 4.4.0  className跳到对应的css里面,4.4.1作者怎么一堆BUG，版本不行，需要安装4.4.0

# 包目录结构说明
```bash
├─ src
│   ├─ views # views 所有页面
│   │   ├─ laytou #使用ATND进行页面整体协调布局
```