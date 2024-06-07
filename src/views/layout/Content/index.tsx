import React from 'react';
import { Layout } from 'antd';
import './index.less'
import Router from '@/router/content/router';
const { Content } = Layout;

function LayoutContent() {
    return (<>
        <Content className='layout-content'>
            <Router/>
        </Content>
    </>)
}

export default LayoutContent;