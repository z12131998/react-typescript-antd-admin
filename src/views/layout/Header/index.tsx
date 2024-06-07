import React from 'react';
import { Layout, Avatar } from 'antd';
import './index.less'
import { useAppSelector } from '@/sotre/hooks';
const { Header } = Layout;


function LayoutHeader() {
    const userName = useAppSelector(state => state.user.userInfo.username)
    return (<>
        <Header className='layout-header'>
            <div className='left' />
            <div className='right'>
                <Avatar size={40}>{userName}</Avatar>
            </div>
        </Header>
    </>)
}

export default LayoutHeader;