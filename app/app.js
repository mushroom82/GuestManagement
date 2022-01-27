"use strict";

// 모듈
const express = require("express");
const app = express();


// 앱 세팅
app.set("views","./src/views");
app.set("view engine", "ejs");

// 라우팅
//미들웨어를 등록해주는 Method : use -> (./routes/home경로에 있는)index.js를 연결해주는 역할
const home = require("./src/routes/home");
app.use("/", home);
app.use(express.static(`${__dirname}/src/public`));


module.exports = app;

// bin/www.js 쪽으로 이동==============================시작
// // 포트
// const port = 3000;

// // 서버 가동
// app.listen(port,()=>{   // ()=>{} 와 function(){} 동일
//     console.log("서버가동");
// });
// bin/www.js 쪽으로 이동==============================끝



// 라우터 쪽으로 이동=========================시작
// // 루트 경로 연결
// app.get("/",(req, res)=>{
//     // res.send("여기는 루트입니다!!!!");
//     res.render("home/index");
// });

// // 로그인 경로 연결
// app.get("/login",(req, res)=>{
//     // res.send("여기는 로그인 화면입니다.");
//     res.render("home/login");
// });
// 라우터 쪽으로 이동=========================끝



// http로 서버 띄워보기 → express 사용으로 주석======================시작
// express가 http 보다 많은 장점이 존재하기에....
// const http = require("http");
// const app = http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"Text/html; charset=utf-8"})
//     console.log(req.url);
//     if (req.url == "/"){
//         res.end("여기는 루트입니다.");
//     } else if(req.url == "/login"){
//         res.end("여기는 로그인입니다.");
//     }    
// });

// app.listen(3001,()=>{
//     console.log("3001서버가동");
// });
// http로 서버 띄워보기 → express 사용으로 주석======================끝