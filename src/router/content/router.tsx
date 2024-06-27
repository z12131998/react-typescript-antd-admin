//本文件作为路由管理使用
import PageAuthor from "@/views/page_author";
import PageIndex from "@/views/page_index";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginAuth from "@/views/config_component/loginAuth";
export default function Router() {
    return (
        <>
            <Routes>
                <Route path="/index" element={<PageIndex />}/>
                <Route path="/author" element={<PageAuthor />} />
                <Route path="*" element={<LoginAuth/>} />
            </Routes>
        </>
    )
}
