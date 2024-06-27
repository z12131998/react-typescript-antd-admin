import React, { useEffect, useRef, useState } from "react";
import './index.less'
import Echarts from "@/components/Echart";
import { Button, InputNumber } from "antd";

const PageIndex = () =>{
    var option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['A', 'B', 'C', 'D', 'E', 'F']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };
      
    const [value,setValue] = useState(option);
    const [charData,setCharData] = useState({A:1,B:2,C:3,D:4,E:5,F:6});

    const modifyChart = ()=> {
        console.log(charData)
        let newValue = Object.assign({},value);
        newValue.series[0]={name: '销量',
        type: 'bar',
        data: [charData.A, charData.B, charData.C, charData.D, charData.E, charData.F]}
        setValue(newValue);
    }

    const changeNumber =(value: number, name : any)=> {
        //监听改变方法,暂无要做的动作
        charData[name] = value;
        console.log(charData)
        setCharData(Object.assign({},charData));
    }

    return (<>
    <div className="app-container">
        <div className="top-search">
        <div className="input">
        A <InputNumber value={charData.A} onChange={(value)=>{
            changeNumber(value,'A');
        }}/> 
        B <InputNumber value={charData.B} onChange={(value)=>{
            changeNumber(value,'B');
        }}/> 
        C <InputNumber value={charData.C} onChange={(value)=>{
            changeNumber(value,'C');
        }}/> 
        D <InputNumber value={charData.D} onChange={(value)=>{
            changeNumber(value,'D');
        }}/> 
        E <InputNumber value={charData.E} onChange={(value)=>{
            changeNumber(value,'E');
        }}/> 
        F <InputNumber value={charData.F} onChange={(value)=>{
            changeNumber(value,'F');
        }}/> 
        <Button type="primary" shape="circle" className="button" onClick={modifyChart}>切换</Button>
        </div>
        </div>
        <div className="chart" id="111">
        <Echarts data={value} width="400px" height="400px" className="left-1" id="left-1" />
        </div>
    </div>
    </>)
}

export default PageIndex;