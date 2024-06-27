import React, { useState } from "react";
import { Navigate } from "react-router-dom";
const Error = ({message}) =>{
    const [getData,modifyDate] = useState({time:5,message:message});

    if (getData.time > 0){
        setTimeout(()=>{
            console.log(getData.time);
            let newTime = getData.time - 1;
            modifyDate((getData)=>({...getData,time:newTime}));  //time:getData.time - 1会导致问题，因为严格模式这个会执行二次，结果是输出542
        },1000);
    }else{
        return <Navigate to="login"></Navigate>
    }
    return<>
    <div className="error-container">
        {getData.message}
        <br/>
        {getData.time} 秒后返回登录页面
    </div>
    </>
}

export default Error;