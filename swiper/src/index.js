import React from "react";
import ReactDOM from "react-dom";
import Banner from "./components/Banner";

import "./static/css/reset.min.css";

// 在REACT的JSX中需要使用图片等资源的时候，资源的地址不能使用相对地址（因为经过WEBPACK编译后，资源地址的路径已经改变了，原有的相对地址无法找到对应的资源），此时我们需要基于ES6 Module或者CommonJS等模块导入规范，把资源当做模块导入进来（或者我们使用的图片地址都是网络地址）
let imgData = [];
for (let i = 1; i <= 5; i++) {
  imgData.push({
    id: i,
    title: "",
    pic: require(`./static/images/${i}.jpg`)
  });
}

ReactDOM.render(
  <main>
    {/*
      data: 绑定数据
      interval: 自动轮播间隔的时间 3000ms
      step： 默认显示索引（前后各克隆一张）
      speed: 每一张切换所需要的运动是键 300ms
    */}
    <Banner data={imgData} interval={3000} step={1} speed={300} />
    <div style={{ margin: "20px auto" }} />
    <Banner data={imgData} interval={5000} step={3} />
  </main>,
  document.getElementById("root")
);
