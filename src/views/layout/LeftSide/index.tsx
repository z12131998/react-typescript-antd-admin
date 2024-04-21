import React from 'react';
import { Layout } from 'antd';
import './index.less'
const { Sider } = Layout;


function LayoutLeftSide() {
    return (<>
        <Sider className='layout-side' width="100px">
            <div className='menu-sytle' />
        </Sider>
    </>)
}

export default LayoutLeftSide;