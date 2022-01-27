"use strict"        //이커머 스크립트의 문법을 준수하겠다!!

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");



// 루트 경로 연결=============================시작
// home.ctrl.js 로 분리
// router.get("/",(req, res)=>{
//     // res.send("여기는 루트입니다!!!!");
//     res.render("home/index");
// });
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓컨트럴러 부분 모듈화↓↓↓↓↓↓↓↓↓↓↓↓↓↓
router.get("/", ctrl.output.hello);
// 루트 경로 연결=============================끝



// 로그인 경로 연결===========================시작
// home.ctrl.js 로 분리
// router.get("/login",(req, res)=>{
//     // res.send("여기는 로그인 화면입니다.");
//     res.render("home/login");
// });
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓컨트럴러 부분 모듈화↓↓↓↓↓↓↓↓↓↓↓↓↓↓
router.get("/login", ctrl.output.login);
// 로그인 경로 연결===========================끝


router.post("/login", ctrl.process.login);



// router을 외부에서 사용할 수 있게 exports
module.exports = router;