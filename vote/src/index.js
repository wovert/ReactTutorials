import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Vote from "./Vote";

ReactDOM.render(
  <main>
    <Vote title="世界杯小组赛法国VS秘鲁，法国队必胜" />
    <Vote title="世界杯小组赛阿根廷VS克罗地亚，老板与魔笛之争" />
  </main>,
  document.getElementById("root")
);
