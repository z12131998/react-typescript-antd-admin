import React, { useEffect, useRef, useState } from "react";
import echarts from "@/lib/echarts";

//自定义封装的Echarts类
const Echarts = ({height="100%",width="100%",className,id,data = undefined}) =>{
    const myChart = useRef(null);
    const resize = function() {
        myChart.current.resize(); //TODO 优化,300毫秒内多次拖动不变
      }

    useEffect(()=>{
        if (myChart.current != null){
            console.log("执行多次")
            myChart.current.setOption(data);
        }
    })
    useEffect(()=>{
        console.log("执行一次");
        if (data){
                setTimeout(() => { //javascript单线程，react渲染会导致上面css渲染未完成，导致自适应大小失败，单线程会让setTimeout最后执行
                    myChart.current  = echarts.init(document.getElementById(id));
                    myChart.current.setOption(data);
                },300);
                //自适应  容器大小改变时，图表的大小也相应地改变
                window.addEventListener('resize', resize);
            return ()=>{
                window.removeEventListener('resize',resize);
            }
        }
    },[])

    return <>
    <div className={className} id={id} style={{height, width}}></div>
    </>
}
export default Echarts;