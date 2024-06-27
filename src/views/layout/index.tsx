import React from "react";
import { Layout } from "antd";
import LayoutHeader from "./Header";
import LayoutLeftSide from "./LeftSide";
import LayoutContent from "./Content";
import { useAppSelector } from "@/sotre/hooks";
import { Navigate } from "react-router-dom";
function Index() {
    console.log("核心内部首页");
    const userInfo = useAppSelector(state => state.user.userInfo.username);
    if (!userInfo){
        console.log("用户未登录进入首页");
        return <Navigate to="/login" />
    }
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
