import React from 'react';
import { Layout, Avatar } from 'antd';
import './index.less'
const { Header } = Layout;


function LayoutHeader() {
    return (<>
        <Header className='layout-header'>
            <div className='left' />
            <div className='right'>
                <Avatar size={40}>USER</Avatar>
            </div>
        </Header>
    </>)
}

export default LayoutHeader;