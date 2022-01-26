"use strict";

const app = require("../app");

// 포트
const port = 3000;

// 서버 가동
app.listen(port,()=>{   // ()=>{} 와 function(){} 동일
    console.log("서버가동");
});