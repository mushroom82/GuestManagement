"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

// 라우팅
const home = require("./src/routes/home");


// 앱 세팅
app.set("views","./src/views");
app.set("view engine", "ejs");
//미들웨어를 등록해주는 Method : use -> (./routes/home경로에 있는)index.js를 연결해주는 역할
app.use(express.static(`${__dirname}/src/public`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));    // URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결

app.use("/", home);     //위치 중요!!

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