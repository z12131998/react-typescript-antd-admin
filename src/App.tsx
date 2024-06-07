import './App.less';
import { ConfigProvider } from 'antd';
import { Provider } from "react-redux"; //是一个使用叫做“action”的事件来管理和更新应用状态的模式和工具 它以集中式Store（centralized store）的方式对整个应用中使用的状态进行集中管理
import zhCN from "antd/es/locale/zh_CN"; //默认中文
import Router from "@/router/router";
import { Helmet,HelmetProvider  } from "react-helmet-async";
import React from "react";
import {store} from './sotre/systemStore';
function App() {
  return (
            //<!-- //使用context特性进行向下传播-->
    <>
    <Provider store={store}>
        <ConfigProvider locale={zhCN}>
        <HelmetProvider>
        <Helmet><title>react-antd-admin</title></Helmet>
        </HelmetProvider>
        <Router />
      </ConfigProvider>
      </Provider>
    </>
  );
}

export default App;
