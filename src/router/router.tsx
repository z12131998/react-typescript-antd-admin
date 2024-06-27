//本文件作为路由管理使用
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "@/views/login/login";
import Index from "@/views/layout";
import Error from "@/views/error/error";
export default function Router(){
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/404" element={<Error message="404"/>} />
                    <Route path="/*" element={<Index/>} />{/*使用/*标识为父路由 */}
                </Routes>
            </HashRouter>
        </>
    )
}
