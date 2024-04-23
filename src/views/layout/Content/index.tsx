import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
import { Layout } from 'antd';
import './index.less'
import Router from '@/router/content/router';
const { Content } = Layout;

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

function LayoutContent() {
    return (<>
        <Content className='layout-content'>
            <Router/>
        </Content>
    </>)
}

export default LayoutContent;