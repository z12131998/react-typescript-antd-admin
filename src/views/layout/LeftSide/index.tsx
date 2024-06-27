import React from 'react';
import { Layout, Menu } from 'antd';
import './index.less'
import menuList from '@/router/content/config'
import { useNavigate } from 'react-router-dom';
const { Sider } = Layout;

//初始化map的菜单数据
var routerMap = {};
const initRouterMap = (menuList : any) =>{
    if (menuList){
        menuList.forEach(element => {
            routerMap[element.key] = element;
            if (element.children){
                initRouterMap(element.children);
            }
        });
    }
}

//切换页面
function LayoutLeftSide() {
    const navigate = useNavigate();

    const switchPage = (arrya:any) =>{
        if (routerMap === null || Object.keys(routerMap).length === 0){
            console.log("初始化菜单");
            initRouterMap(menuList);
        }
        console.log("跳转",routerMap[arrya.key].path);
        return navigate(routerMap[arrya.key].path); //可以使用Navigate代替
    }


    return (<>
        <Sider className='layout-side' width="10%">
            <div className='menu-sytle' >
                <Menu theme='dark' mode="inline"
                items={menuList} onClick={switchPage}
                />
            </div>
        </Sider>
    </>)
}

export default LayoutLeftSide;