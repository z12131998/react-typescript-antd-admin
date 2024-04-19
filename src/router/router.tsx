//本文件作为路由管理使用
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "@/views/login/login";
export default function Router(){
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/" element={<Login/>} />
                </Routes>
            </HashRouter>
        </>
    )
}
