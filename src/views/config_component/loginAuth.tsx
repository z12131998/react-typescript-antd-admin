import { useAppSelector } from "@/sotre/hooks";
import React from "react";
import { Navigate } from "react-router-dom";

const LoginAuth = () =>{
    const userInfo = useAppSelector(state => state.user.userInfo.username);
    if (!userInfo){
        console.log("用户未登录");
        return <Navigate to="/login" />
    }else{
        return <Navigate to="/index"/>
    }

}

export default LoginAuth;