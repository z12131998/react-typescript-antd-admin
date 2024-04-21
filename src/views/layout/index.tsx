import React from "react";
import { Layout } from "antd";
import LayoutHeader from "./Header";
import LayoutLeftSide from "./LeftSide";
import LayoutContent from "./Content";
function Index() {

    /**
     * 100 vh铺平整个浏览器
     * 第一层leftSide
     * 第二层header
     * 第三层foot
     * 第四层content
     */
    return (<>
        <Layout style={{ minHeight: "100vh" }}>
            <LayoutHeader />
            <Layout>
                <LayoutLeftSide />
                <Layout>
                    <LayoutContent />
                </Layout>
            </Layout>
        </Layout>
    </>);
}

export default Index;
