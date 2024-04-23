//本文件作为路由管理使用
import Author from "@/views/author";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
export default function Router(){
    return (
        <>
                <Routes>
                    <Route path="/" element={<Navigate to='/author' />}/>
                    <Route path="/author" element={<Author/>}/>
                </Routes>
        </>
    )
}
